import { isEmpty } from "ramda";
import { select, takeEvery, take, call, put, fork } from "redux-saga/effects";

import { getListSession, setListSession } from "@/api/auth";

import { actions, selectors } from "./reducer";

import { mockTransactions } from "./mock";

export function* getTransactionsFromSession() {
  const name = yield select(selectors.login);
  let transactions = yield call(
    getListSession,
    name.username + "-transactions"
  );

  if (isEmpty(transactions) || transactions === null) {
    transactions = {};
  } else {
    transactions = JSON.parse(transactions);
  }

  // TODO: delete mock in the future
  transactions = mockTransactions;

  yield put(actions.setList(transactions));
}

export function* saveTransactionsToSession() {
  const data = yield select(selectors.transactions);
  const name = yield select(selectors.login);
  yield call(setListSession, data, name.username);
}

export function* transactionsSaga() {
  yield fork(getTransactionsFromSession);
}
