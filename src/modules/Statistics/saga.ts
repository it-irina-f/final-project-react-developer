import { isEmpty } from "ramda";
import { select, takeEvery, take, call, put, fork } from "redux-saga/effects";

import { actions, selectors } from "./reducer";

import { mockStatistics, mockStatistics2Bars } from "./mock";

export function* getStatistics() {
  const name = yield select(selectors.login);
  let statistics;

  if (isEmpty(statistics) || statistics === null) {
    statistics = [];
  } else {
  }

  // TODO: delete mock in the future
  //statistics = mockStatistics;

  statistics = mockStatistics2Bars;

  yield put(actions.setData(statistics));
}

export function* statisticsSaga() {
  yield fork(getStatistics);
}
