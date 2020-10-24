import { isEmpty } from "ramda";
import { select, takeEvery, take, call, put, fork } from "redux-saga/effects";

import { getListSession, setListSession } from "@/api/auth";

import { actions, selectors } from "./reducer";
import { mockCategories } from "./mock";

export function* getCategoriesFromSession() {
  const name = yield select(selectors.login);
  let categories = yield call(getListSession, name.username + "-categories");

  if (isEmpty(categories) || categories === null) {
    categories = {};
  } else {
    categories = JSON.parse(categories);
  }

  // TODO: delete mock in the future
  categories = mockCategories;

  yield put(actions.setList(categories));
}

export function* saveCategoriesToSession() {
  const data = yield select(selectors.categories);
  const name = yield select(selectors.login);
  yield call(setListSession, data, name.username);
}

export function* categoriesSaga() {
  yield fork(getCategoriesFromSession);
}
