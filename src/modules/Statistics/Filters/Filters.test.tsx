import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";

import { Filters } from "./Filters";

const click = jest.fn();

describe("Test Component Statistics Filters", () => {
  const element = mount(<Filters changeFilter={click} />);
  it("should be able to change select", () => {
    element.find("select").simulate("change");
    expect(click).toHaveBeenCalled();
  });

  it("should be find 3 options in select", () => {
    expect(element.find("select option")).toHaveLength(3);
  });
});
