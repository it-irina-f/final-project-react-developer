import { isEmpty } from "ramda";
import { select, takeEvery, take, call, put, fork } from "redux-saga/effects";

import { getAccountsSession, setAccountsSession } from "@/api/auth";

import { actions, selectors } from "./reducer";
import { mockAccounts } from "./mock";

export function* getAccountsFromSession() {
  const name = yield select(selectors.login);
  let accounts = yield call(getAccountsSession, name.username + "-accounts");

  if (isEmpty(accounts) || accounts === null) {
    accounts = {};
  } else {
    accounts = JSON.parse(accounts);
  }

  // TODO: delete mock in the future
  accounts = mockAccounts;

  yield put(actions.setList(accounts));
}

export function* saveAccountsToSession() {
  const data = yield select(selectors.accounts);
  const name = yield select(selectors.login);
  yield call(setAccountsSession, data, name.username);
}

export function* accountsSaga() {
  yield fork(getAccountsFromSession);
}
