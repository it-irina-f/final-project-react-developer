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

export const ChartComponent = () => [
  <Chart key="jsx" data={object("Chart", list)} width={width} />,
];

export const TwoChartComponent = () => [
  <Chart key="jsx" data={object("Chart", list2)} width={width} />,
];
