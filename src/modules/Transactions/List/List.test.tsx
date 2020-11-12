import React from "react";
import { mount, shallow } from "enzyme";
import { mockTransactions } from "@/modules/Transactions/mock";

import { List } from "./List";


const transactions = mockTransactions;
const keys = Object.keys(transactions);
const length = keys.length;

const click = jest.fn();

describe("Component List", () => {
  const wrapper = mount(<List list={transactions} />);

  it("should be find elements = count in array", () => {
    expect(wrapper.find('tr[data-wrap="TableRow"]')).toHaveLength(keys.length);
  });

  it("find manage-buttons", () => {
    expect(wrapper.find("div[role='button']")).toHaveLength(keys.length * 2);
  });

  it("should be find manage buttons in row", () => {
    expect(
      wrapper.find('tr[data-wrap="TableRow"]').at(0).find('div[type="button"]')
    ).toHaveLength(2);
  });

  it("find delete-btn for first List Item", () => {
    expect(
      wrapper.find("div[id='deleteListItem_" + keys[0] + "']")
    ).toHaveLength(1);
  });

  it("find edit-btn for first List Item", () => {
    const wrapper = mount(<List list={transactions} />);
    expect(wrapper.find("div[id='editListItem_" + keys[0] + "']")).toHaveLength(
      1
    );
  });

  it("should be find in text: category, account", () => {
    expect(
      wrapper
        .find('tr[data-wrap="TableRow"]')
        .at(0)
        .find("th")
        .at(3)
        .find("p")
        .text()
    ).toEqual(transactions[keys[length - 1]].account);
  });
});
