import React from "react";
import { mount, shallow } from "enzyme";
import renderer from "react-test-renderer";
import { mockAccounts } from "@/modules/Accounts/mock";

import { List } from "./List";
const cash = mockAccounts.cash;
const keys = Object.keys(cash);
const list = [];

describe("Test Component AccountsList", () => {
  const wrapper = mount(<List list={cash} />);

  it("should be find elements = count in array", () => {
    expect(wrapper.find('div[data-wrap="ListItemWrapper"]')).toHaveLength(
      Object.keys(cash).length
    );
  });

  it("should be find in text: name, balance, currency", () => {
    expect(
      wrapper
        .find('div[data-wrap="ListItemWrapper"]')
        .at(0)
        .find("label span")
        .at(0)
        .text()
    ).toEqual(cash[keys[0]].name);

    expect(
      wrapper
        .find('div[data-wrap="ListItemWrapper"]')
        .at(0)
        .find("label span")
        .at(1)
        .text()
    ).toEqual(cash[keys[0]].balance + " " + cash[keys[0]].currency);
  });

  it("should be find manage buttons", () => {
    expect(
      wrapper
        .find('div[data-wrap="ListItemWrapper"]')
        .at(0)
        .find('div[type="button"]')
    ).toHaveLength(2);
  });

  it("should be empty list", () => {
    const wrapp = mount(<List list={list} />);
    expect(wrapp.find('div[data-wrap="ListWrapper"]').text()).toEqual(
      "Список пустой"
    );
  });
});
