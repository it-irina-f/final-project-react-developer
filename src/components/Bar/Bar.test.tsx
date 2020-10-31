import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import "jest-styled-components";

import { Bar } from "./Bar";
import { BarsWrapper, BarWrapper } from "./style";

const width = 200;
const height = {
  1603360799: {
    value1: 250,
  },
};

const barItem = {
  id: 1603360799,
  tickAxisX: "январь 2020",
  amount: 80000,
};

const barItem2 = {
  id: 1603360899,
  tickAxisX: "январь 2020",
  amount: 80000,
  amount2: 70000,
};

const height2 = {
  1603360899: {
    value1: 250,
    value2: 370,
  },
};

describe("Test Component Bar", () => {
  it("should be find one bar in chart-item", () => {
    const wrapper = mount(
      <Bar id={barItem.id} bar={barItem} width={width} height={height} />
    );
    expect(wrapper.find("div span")).toHaveLength(1);
  });

  it("should be find two bars in chart-item", () => {
    const wrapper = mount(
      <Bar id={barItem2.id} bar={barItem2} width={width} height={height2} />
    );

    expect(wrapper.find("div span")).toHaveLength(2);
  });

  test("it applies styles for BarsWrapper", () => {
    const wrapper = renderer
      .create(<BarsWrapper data-id={barItem.id}></BarsWrapper>)
      .toJSON();
    expect(wrapper).toHaveStyleRule("margin-left", "20px");
  });

  test("it applies styles for first bar in chart-item", () => {
    const wrapper = renderer
      .create(
        <BarWrapper
          widthBar={width}
          heightBar={height[barItem.id].value1}
        ></BarWrapper>
      )
      .toJSON();

    expect(wrapper).toHaveStyleRule("width", width + "px");
    expect(wrapper).toHaveStyleRule("height", height[barItem.id].value1 + "px");
    expect(wrapper).toHaveStyleRule("background", "#1d7cd5");
  });

  test("it applies styles for second bar in chart-item", () => {
    const wrapper = renderer
      .create(
        <BarWrapper
          widthBar={width / 2}
          heightBar={height2[barItem2.id].value2}
          second
        ></BarWrapper>
      )
      .toJSON();

    expect(wrapper).toHaveStyleRule("width", width / 2 + "px");
    expect(wrapper).toHaveStyleRule(
      "height",
      height2[barItem2.id].value2 + "px"
    );
    expect(wrapper).toHaveStyleRule("background", "#a4d4f7");
  });
});
