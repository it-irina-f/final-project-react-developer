import React from "react";
import { mount, shallow } from "enzyme";
import renderer from "react-test-renderer";
import {
  mockStatisticsIncome,
  mockStatisticsIncomeOutgo,
} from "@/modules/Statistics/mock";
import { Chart } from "./Chart";

const width = 80;
const list = mockStatisticsIncome;
const list2 = mockStatisticsIncomeOutgo;

const height = {
  1603360799: {
    value1: 250,
  },
  1603360800: {
    value1: 260,
  },
  1603360801: {
    value1: 280,
  },
  1603360802: {
    value1: 350,
  },
  1603360803: {
    value1: 150,
  },
  1603360804: {
    value1: 250,
  },
  1603360805: {
    value1: 340,
  },
  1603360806: {
    value1: 120,
  },
  1603360807: {
    value1: 190,
  },
  1603360808: {
    value1: 200,
  },
  1603360809: {
    value1: 290,
  },
  1603360810: {
    value1: 350,
  },
};
const height2 = {
  1603360799: {
    value1: 250,
    value2: 280,
  },
  1603360800: {
    value1: 260,
    value2: 290,
  },
  1603360801: {
    value1: 280,
    value2: 320,
  },
  1603360802: {
    value1: 350,
    value2: 330,
  },
  1603360803: {
    value1: 150,
    value2: 280,
  },
  1603360804: {
    value1: 250,
    value2: 330,
  },
  1603360805: {
    value1: 340,
    value2: 340,
  },
  1603360806: {
    value1: 120,
    value2: 250,
  },
  1603360807: {
    value1: 190,
    value2: 280,
  },
  1603360808: {
    value1: 200,
    value2: 320,
  },
  1603360809: {
    value1: 290,
    value2: 350,
  },
  1603360810: {
    value1: 350,
    value2: 390,
  },
};
const tickLabelsY = ["97 000", "77 600", "58 200", "38 800", "19 400", "0"];

describe("Test Component Chart when one bar in chart", () => {
  it("check count chart-item in chart, bars in chart-item", () => {
    const wrapper = mount(
      <Chart
        data={list}
        tickLabelsY={tickLabelsY}
        width={width}
        height={height}
      />
    );
    expect(wrapper.find("div[data-id]")).toHaveLength(list.length);
    expect(wrapper.find("div[data-id] span")).toHaveLength(list.length);
  });
});

describe("Test Component Chart when two bars in chart", () => {
  it("check count chart-item in chart, bars in chart-item", () => {
    const wrapper = mount(
      <Chart
        data={list2}
        tickLabelsY={tickLabelsY}
        width={width}
        height={height2}
      />
    );
    expect(wrapper.find("div[data-id]")).toHaveLength(list2.length);
    expect(wrapper.find("div[data-id] span")).toHaveLength(2 * list2.length);
  });
});

describe("Test Component Chart: axis-y", () => {
  it("check count ticks and labels on axis Y", () => {
    const wrapper = mount(
      <Chart
        data={list}
        tickLabelsY={tickLabelsY}
        width={width}
        height={height}
      />
    );

    expect(wrapper.find("#chart-axis-y span")).toHaveLength(tickLabelsY.length);

    expect(wrapper.find("#chart-axis-y span").at(0).text()).toEqual(
      tickLabelsY[0]
    );

    expect(
      wrapper
        .find("#chart-axis-y span")
        .at(tickLabelsY.length - 1)
        .text()
    ).toEqual(tickLabelsY[tickLabelsY.length - 1]);
  });
});

describe("Test Component Chart: axis-x", () => {
  it("check count ticks and labels on axis X", () => {
    const wrapper = mount(
      <Chart
        data={list}
        tickLabelsY={tickLabelsY}
        width={width}
        height={height}
      />
    );

    expect(wrapper.find("#chart-axis-x span")).toHaveLength(list.length);

    expect(wrapper.find("#chart-axis-x span").at(0).text()).toEqual(
      list[0].tickAxisX
    );

    expect(
      wrapper
        .find("#chart-axis-x span")
        .at(list.length - 1)
        .text()
    ).toEqual(list[list.length - 1].tickAxisX);
  });
});
