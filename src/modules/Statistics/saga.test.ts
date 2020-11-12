import { expectSaga, testSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { select } from "redux-saga/effects";
import { getStatistics, statisticsSaga } from "./saga";
import { actions, selectors, reducer } from "./reducer";
import { getAppState } from "./functions";
import {
  mockStatisticsIncome,
  mockStatisticsIncomeOutgo,
  mockStatisticsOutgo,
} from "./mock";

const statisticsState = {
  data: [],
  width: 0,
  height: {},
  tickLabelsY: [],
  isLoading: false,
  typeTransaction: "outgo",
};

const appStateOutgo = getAppState(mockStatisticsOutgo);
const appStateIncome = getAppState(mockStatisticsIncome);
const appStateIncomeOutgo = getAppState(mockStatisticsIncomeOutgo);

describe("Statistics saga test", () => {
  it("getStatistics success if typeTransaction === 'outgo'", () => {
    return expectSaga(getStatistics)
      .withReducer(reducer)
      .provide([[select(selectors.statistics), statisticsState]])
      .put(actions.setData(mockStatisticsOutgo))
      .hasFinalState(appStateOutgo)
      .run();
  });

  it("getStatistics success if typeTransaction === 'income_outgo'", () => {
    return expectSaga(getStatistics)
      .withReducer(reducer)
      .provide([
        [
          select(selectors.statistics),
          { ...statisticsState, typeTransaction: "income_outgo" },
        ],
      ])
      .put(actions.setData(mockStatisticsIncomeOutgo))
      .hasFinalState(appStateIncomeOutgo)
      .run();
  });

  it("getStatistics success if typeTransaction === 'income'", () => {
    return expectSaga(getStatistics)
      .withReducer(reducer)
      .provide([
        [
          select(selectors.statistics),
          { ...statisticsState, typeTransaction: "income" },
        ],
      ])
      .put(actions.setData(mockStatisticsIncome))
      .hasFinalState(appStateIncome)
      .run();
  });
});
