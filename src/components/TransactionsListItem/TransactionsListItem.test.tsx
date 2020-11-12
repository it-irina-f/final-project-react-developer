import React from "react";
import { mount } from "enzyme";

import { TransactionsListItem } from "./TransactionsListItem";

const listItem = {
  amount: 8000,
  category: "ЖКХ",
  account: "Карта Сбербанк",
  isIncome: false,
  isOutgo: true,
  comment: "",
};

const id = 1603380600000;

const click = jest.fn();

describe("Component TransactionsListItem", () => {
  it("should be able to click the button Delete Item", () => {
    const wrapper = mount(
      <TransactionsListItem id={id} listItem={listItem} clickFunc={click} />
    );
    wrapper.find('div[id="deleteListItem_' + id + '"]').simulate("click");
    expect(click).toHaveBeenCalled();
  });

  it("should be able to click the button Edit Item", () => {
    const wrapper = mount(
      <TransactionsListItem id={id} listItem={listItem} clickFunc={click} />
    );
    wrapper.find('div[id="editListItem_' + id + '"]').simulate("click");
    expect(click).toHaveBeenCalled();
  });
});
