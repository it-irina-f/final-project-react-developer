import { expectSaga, testSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { select } from "redux-saga/effects";
import { getStatistics, statisticsSaga, getCategoriesForFilter } from "./saga";
import { actions, selectors, reducer } from "./reducer";
import { getAppState } from "./functions";
import {
  mockStatisticsIncome,
  mockStatisticsIncomeOutgo,
  mockStatisticsOutgo,
  mockStatisticsIncomeOutgoCategory,
  mockStatisticsOutgoCategory,
  mockStatisticsIncomeCategory,
  categoriesOutgo,
  categoriesIncome,
  categoriesIncomeOutgo,
} from "./mock";

const statisticsState = {
  data: [],
  width: 0,
  height: {},
  tickLabelsY: [],
  isLoading: false,
  typeTransaction: "outgo",
  typeCategory: "",
  categories: {},
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

  it("getStatistics success if typeTransaction === 'income' and typeCategory is not empty", () => {
    const key = Object.keys(categoriesIncome)[0];
    const appStateIncomeCategory = getAppState(
      mockStatisticsIncomeCategory[key]
    );
    return expectSaga(getStatistics)
      .withReducer(reducer)
      .provide([
        [
          select(selectors.statistics),
          {
            ...statisticsState,
            typeTransaction: "income",
            typeCategory: key,
            categories: categoriesIncome,
          },
        ],
      ])
      .put(actions.setData(mockStatisticsIncomeCategory[key]))
      .hasFinalState(appStateIncomeCategory)
      .run();
  });

  it("getStatistics success if typeTransaction === 'outgo' and typeCategory is not empty", () => {
    const key = Object.keys(categoriesOutgo)[0];
    const appStateOutgoCategory = getAppState(mockStatisticsOutgoCategory[key]);
    return expectSaga(getStatistics)
      .withReducer(reducer)
      .provide([
        [
          select(selectors.statistics),
          {
            ...statisticsState,
            typeTransaction: "outgo",
            typeCategory: key,
            categories: categoriesOutgo,
          },
        ],
      ])
      .put(actions.setData(mockStatisticsOutgoCategory[key]))
      .hasFinalState(appStateOutgoCategory)
      .run();
  });

  it("getStatistics success if typeTransaction === 'income_outgo' and typeCategory is not empty", () => {
    const key = Object.keys(categoriesIncomeOutgo)[0];
    const appStateIncomeOutgoCategory = getAppState(
      mockStatisticsIncomeOutgoCategory[key]
    );
    return expectSaga(getStatistics)
      .withReducer(reducer)
      .provide([
        [
          select(selectors.statistics),
          {
            ...statisticsState,
            typeTransaction: "income_outgo",
            typeCategory: key,
            categories: categoriesIncomeOutgo,
          },
        ],
      ])
      .put(actions.setData(mockStatisticsIncomeOutgoCategory[key]))
      .hasFinalState(appStateIncomeOutgoCategory)
      .run();
  });

  it("getCategoriesForFilter success if typeTransaction === 'outgo'", () => {
    return expectSaga(getCategoriesForFilter)
      .withReducer(reducer)
      .provide([[select(selectors.statistics), statisticsState]])
      .put(actions.setCategories(categoriesOutgo))
      .hasFinalState({ ...statisticsState, categories: categoriesOutgo })
      .run();
  });

  it("getCategoriesForFilter success if typeTransaction === 'income'", () => {
    return expectSaga(getCategoriesForFilter)
      .withReducer(reducer)
      .provide([
        [
          select(selectors.statistics),
          { ...statisticsState, typeTransaction: "income" },
        ],
      ])
      .put(actions.setCategories(categoriesIncome))
      .hasFinalState({ ...statisticsState, categories: categoriesIncome })
      .run();
  });

  it("getCategoriesForFilter success if typeTransaction === 'income_outgo'", () => {
    return expectSaga(getCategoriesForFilter)
      .withReducer(reducer)
      .provide([
        [
          select(selectors.statistics),
          { ...statisticsState, typeTransaction: "income_outgo" },
        ],
      ])
      .put(actions.setCategories(categoriesIncomeOutgo))
      .hasFinalState({ ...statisticsState, categories: categoriesIncomeOutgo })
      .run();
  });
});
