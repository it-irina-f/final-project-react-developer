import React from "react";
import { mount, shallow } from "enzyme";
import { mockCategories } from "@/modules/Categories/mock";
import { List } from "./List";

const categories = mockCategories;
const keys = Object.keys(categories);
const list = [];

const click = jest.fn();

describe("Component List", () => {
  const wrapper = mount(<List list={categories} />);

  it("should be find elements = count in array", () => {
    expect(wrapper.find('div[data-wrap="ListItemWrapper"]')).toHaveLength(
      keys.length
    );
  });

  it("should be find in text: name", () => {
    expect(
      wrapper
        .find('div[data-wrap="ListItemWrapper"]')
        .at(0)
        .find("label span")
        .at(0)
        .text()
    ).toEqual(categories[keys[0]].name);

    expect(
      wrapper
        .find('div[data-wrap="ListItemWrapper"]')
        .at(0)
        .find("label span")
        .at(1)
        .text()
    ).toEqual("в расходе");
  });

  it("should be find manage buttons in row", () => {
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

  it("find manage-buttons", () => {
    expect(wrapper.find("div[role='button']")).toHaveLength(keys.length * 2);
  });

  it("find edit-btn for first List Item", () => {
    expect(
      wrapper
        .find("div")
        .at(1)
        .find("div[id='editListItem_" + keys[0] + "']")
    ).toHaveLength(1);
  });

  it("find delete-btn for first List Item", () => {
    expect(
      wrapper
        .find("div")
        .at(1)
        .find("div[id='deleteListItem_" + keys[0] + "']")
    ).toHaveLength(1);
  });
});
