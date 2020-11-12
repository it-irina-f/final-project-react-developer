import React from "react";
import { mount } from "enzyme";
import { AccountsListItem } from "./AccountsListItem";

const listItem = {
  name: "Вклад ВТБ",
  currency: "Руб",
  balance: 100000,
};

const id = 1603364404;

const click = jest.fn();

describe("Component AccountsListItem", () => {
  it("should be able to click the button Delete Item", () => {
    const wrapper = mount(
      <AccountsListItem id={id} listItem={listItem} clickFunc={click} />
    );
    wrapper.find('div[id="deleteListItem_' + id + '"]').simulate("click");
    expect(click).toHaveBeenCalled();
  });

  it("should be able to click the button Edit Item", () => {
    const wrapper = mount(
      <AccountsListItem id={id} listItem={listItem} clickFunc={click} />
    );
    wrapper.find('div[id="editListItem_' + id + '"]').simulate("click");
    expect(click).toHaveBeenCalled();
  });
});
