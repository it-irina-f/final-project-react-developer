import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object, array } from "@storybook/addon-knobs";
import { Chart } from "./Chart";
import { mockStatistics, mockStatistics2Bars } from "@/modules/Statistics/mock";

export default {
  title: "Chart Component",
  decorators: [withKnobs],
};

const width = 83;
const list = mockStatistics;
const list2 = mockStatistics2Bars;

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

export const ChartComponent = () => [
  <Chart
    key="jsx"
    data={object("Chart", list)}
    tickLabelsY={tickLabelsY}
    width={width}
    height={height}
  />,
];

export const TwoChartComponent = () => [
  <Chart
    key="jsx"
    data={object("Chart", list2)}
    tickLabelsY={tickLabelsY}
    width={width}
    height={height2}
  />,
];
