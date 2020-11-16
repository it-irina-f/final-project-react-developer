import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";

import { Filters } from "./Filters";

const click = jest.fn();

const categories = {
  "1603360800": {
    name: "ЖКХ",
    isIncome: false,
    isOutgo: true,
  },
  "1603360801": {
    name: "Продукты",
    isIncome: false,
    isOutgo: true,
  },
  "1603360802": {
    name: "Кафе/рестораны",
    isIncome: false,
    isOutgo: true,
  },
  "1603360803": {
    name: "Развлечения",
    isIncome: false,
    isOutgo: true,
  },
  "1603360807": {
    name: "Freelance",
    isIncome: true,
    isOutgo: true,
  },
};

describe("Test Component Statistics Filters", () => {
  const element = mount(
    <Filters
      categories={categories}
      changeFilter={click}
      changeCategory={click}
    />
  );
  it("should be able to change select for Transaction", () => {
    element.find("select").at(0).simulate("change");
    expect(click).toHaveBeenCalled();
  });

  it("should be find 3 options in select for Transaction", () => {
    expect(element.find("select").at(0).find("option")).toHaveLength(3);
  });

  it("should be able to change select for Type Categories", () => {
    element.find("select").at(1).simulate("change");
    expect(click).toHaveBeenCalled();
  });

  it("should be find 3 options in select for Type Categories", () => {
    expect(element.find("select").at(1).find("option")).toHaveLength(
      Object.keys(categories).length + 1
    );
  });
});
