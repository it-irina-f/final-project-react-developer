import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import "jest-styled-components";

import { TickLabel } from "./TickLabel";

const width = 80;

const barItem = {
  id: 1603360799,
  tickAxisX: "январь 2020",
  amount: 80000,
};

describe("Test Component Tick Label", () => {
  it("check count ticks and labels on axis X", () => {
    const wrapper = mount(
      <TickLabel key={barItem.id} bar={barItem} width={width} />
    );

    expect(wrapper.text()).toEqual(barItem.tickAxisX);
  });

  test("it applies style-width for tick-label", () => {
    const wrapper = renderer
      .create(<TickLabel key={barItem.id} bar={barItem} width={width} />)
      .toJSON();

    expect(wrapper).toHaveStyleRule("width", width + "px");
  });
});
