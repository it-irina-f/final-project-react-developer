import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";

import { AddForm } from "./AddForm";

const click = jest.fn();

describe("Test Component Transactions AddForm", () => {
  it("should be able to click the button", () => {
    const element = mount(<AddForm addListItem={click} />);
    element.find("button").simulate("submit");
    expect(click).toHaveBeenCalled();
  });
});
