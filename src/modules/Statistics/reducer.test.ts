import { actions, reducer, initialState } from "./reducer";
import { getAppState } from "./functions";
import {
  mockStatisticsIncome,
  mockStatisticsIncomeOutgo,
  mockStatisticsOutgo,
  categoriesOutgo,
  categoriesIncome,
  categoriesIncomeOutgo,
} from "./mock";

const appStateOutgo = getAppState(mockStatisticsOutgo);
const appStateIncome = getAppState(mockStatisticsIncome);
const appStateIncomeOutgo = getAppState(mockStatisticsIncomeOutgo);

describe("Statistics reducer", () => {
  it("set data for StatisticsOutgo from initialState", () => {
    expect(reducer(initialState, actions.setData(mockStatisticsOutgo))).toEqual(
      appStateOutgo
    );
  });

  it("set data for StatisticsIncome from initialState", () => {
    expect(
      reducer(initialState, actions.setData(mockStatisticsIncome))
    ).toEqual(appStateIncome);
  });

  it("set data for StatisticsIncomeOutgo from initialState", () => {
    expect(
      reducer(initialState, actions.setData(mockStatisticsIncomeOutgo))
    ).toEqual(appStateIncomeOutgo);
  });

  it("change Filter: check Income, should be typeTransaction: 'income'", () => {
    expect(reducer(appStateOutgo, actions.changeFilter("income"))).toEqual({
      ...appStateOutgo,
      typeTransaction: "income",
    });
  });

  it("change Filter: check Income + Outgo, should be typeTransaction: 'income_outgo'", () => {
    expect(
      reducer(appStateOutgo, actions.changeFilter("income_outgo"))
    ).toEqual({
      ...appStateOutgo,
      typeTransaction: "income_outgo",
    });
  });

  it("change Filter: check Outgo, should be typeTransaction: 'outgo'", () => {
    expect(reducer(appStateIncome, actions.changeFilter("outgo"))).toEqual({
      ...appStateIncome,
      typeTransaction: "outgo",
    });
  });

  it("change Filter-Category: should be update typeCategory", () => {
    expect(
      reducer(appStateOutgo, actions.changeCategory("1603360800"))
    ).toEqual({
      ...appStateOutgo,
      typeCategory: "1603360800",
    });
  });

  it("set Categories for typeTransaction=outgo", () => {
    expect(
      reducer(appStateOutgo, actions.setCategories(categoriesOutgo))
    ).toEqual({
      ...appStateOutgo,
      categories: categoriesOutgo,
    });
  });

  it("set Categories for typeTransaction=income", () => {
    expect(
      reducer(appStateIncome, actions.setCategories(categoriesIncome))
    ).toEqual({
      ...appStateIncome,
      categories: categoriesIncome,
    });
  });

  it("set Categories for typeTransaction=income-outgo", () => {
    expect(
      reducer(appStateIncomeOutgo, actions.setCategories(categoriesIncomeOutgo))
    ).toEqual({
      ...appStateIncomeOutgo,
      categories: categoriesIncomeOutgo,
    });
  });
});
