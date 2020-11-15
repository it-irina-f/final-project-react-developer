import { isEmpty } from "ramda";
import { select, takeEvery, take, call, put, fork } from "redux-saga/effects";

import { actions, selectors } from "./reducer";

import { mockCategories } from "@/modules/Categories/mock";

import {
  mockStatisticsIncome,
  mockStatisticsIncomeOutgo,
  mockStatisticsOutgo,
  mockStatisticsIncomeOutgoCategory,
  mockStatisticsOutgoCategory,
  mockStatisticsIncomeCategory,
} from "./mock";

export function* getStatistics() {
  const statistics = yield select(selectors.statistics);
  let statisticsData;

  // TODO: delete mock in the future
  if (statistics.typeCategory === "") {
    if (statistics.typeTransaction === "income") {
      statisticsData = mockStatisticsIncome;
    } else if (statistics.typeTransaction === "outgo") {
      statisticsData = mockStatisticsOutgo;
    } else if (statistics.typeTransaction === "income_outgo") {
      statisticsData = mockStatisticsIncomeOutgo;
    }
  } else {
    if (statistics.typeTransaction === "income") {
      statisticsData = mockStatisticsIncomeCategory[statistics.typeCategory];
    } else if (statistics.typeTransaction === "outgo") {
      statisticsData = mockStatisticsOutgoCategory[statistics.typeCategory];
    } else if (statistics.typeTransaction === "income_outgo") {
      statisticsData =
        mockStatisticsIncomeOutgoCategory[statistics.typeCategory];
    }
  }

  yield put(actions.setData(statisticsData));
}

export function* getCategoriesForFilter() {
  const statistics = yield select(selectors.statistics);

  const categories = mockCategories;

  const keysCategories = Object.keys(categories);

  let keysFilter;
  const categoriesFilter = {};

  if (statistics.typeTransaction === "income") {
    keysFilter = keysCategories.filter((key) => {
      return categories[key].isIncome === true;
    });
  } else if (statistics.typeTransaction === "outgo") {
    keysFilter = keysCategories.filter((key) => {
      return categories[key].isOutgo === true;
    });
  } else if (statistics.typeTransaction === "income_outgo") {
    keysFilter = keysCategories.filter((key) => {
      return (
        categories[key].isOutgo === true && categories[key].isIncome === true
      );
    });
  }

  keysFilter.forEach((key) => {
    categoriesFilter[key] = categories[key];
  });
  yield put(actions.setCategories(categoriesFilter));
}

export function* getData() {
  yield fork(getCategoriesForFilter);
  yield fork(getStatistics);
}

export function* statisticsSaga() {
  yield fork(getCategoriesForFilter);
  yield fork(getStatistics);
  yield takeEvery(actions.changeFilter.type, getData);
  yield takeEvery(actions.changeCategory.type, getStatistics);
}
