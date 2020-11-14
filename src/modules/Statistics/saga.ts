import { isEmpty } from "ramda";
import { select, takeEvery, take, call, put, fork } from "redux-saga/effects";

import { actions, selectors } from "./reducer";

import {
  mockStatisticsIncome,
  mockStatisticsIncomeOutgo,
  mockStatisticsOutgo,
} from "./mock";

export function* getStatistics() {
  const name = yield select(selectors.login);
  const statistics = yield select(selectors.statistics);
  let statisticsData;

  // TODO: delete mock in the future
  if (statistics.typeTransaction === "income") {
    statisticsData = mockStatisticsIncome;
  } else if (statistics.typeTransaction === "outgo") {
    statisticsData = mockStatisticsOutgo;
  } else if (statistics.typeTransaction === "income_outgo") {
    statisticsData = mockStatisticsIncomeOutgo;
  }

  yield put(actions.setData(statisticsData));
}

export function* statisticsSaga() {
  yield fork(getStatistics);
  yield takeEvery(actions.changeFilter.type, getStatistics);
}
