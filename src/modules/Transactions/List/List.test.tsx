import React from "react";
import { mount, shallow } from "enzyme";
import renderer from "react-test-renderer";
import { mockTransactions } from "@/modules/Transactions/mock";

import { List } from "./List";

const transactions = mockTransactions;

const click = jest.fn();

describe("Component List", () => {
  const wrapper = mount(<List list={transactions} />);
  it("find manage-buttons", () => {
    expect(wrapper.find("div[role='button']")).toHaveLength(10);
  });

  it("find delete-btn for first List Item", () => {
    expect(wrapper.find("div[id='deleteListItem_1603545780000']")).toHaveLength(
      1
    );
  });

  it("find edit-btn for first List Item", () => {
    const wrapper = mount(<List list={transactions} />);
    expect(wrapper.find("div[id='editListItem_1603545780000']")).toHaveLength(
      1
    );
  });
});
