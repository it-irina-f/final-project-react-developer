import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { AppState } from "@/AppStore";
import { Header } from "./Header";
import { mockCategories } from "@/modules/Categories/mock";
import { mockAccounts } from "@/modules/Accounts/mock";
import { mockTransactions } from "@/modules/Transactions/mock";

const store = configureMockStore<AppState>([])({
  login: {
    status: 1,
    username: "Irina",
  },
  transactions: {
    transactions: mockTransactions,
    isLoading: false,
  },
  accounts: {
    cash: mockAccounts.cash,
    cards: mockAccounts.cards,
    deposits: mockAccounts.deposits,
    isLoading: false,
  },
  categories: {
    categories: mockCategories,
    isLoading: false,
  },
});

describe("Header Test", () => {
  const screen = mount(
    <Provider store={store}>
      <Header />
    </Provider>
  );

  it("should render username from store", () => {
    expect(screen.text().includes("Irina")).toBe(true);
  });

  it("should render button for logout", () => {
    expect(screen.find("button").text().includes("Выход")).toBe(true);
  });

  it("should call logout when click on button", () => {
    screen.find("Button").simulate("click");
    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: "user/logout", payload: undefined });
  });
});
