import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";
import { Bar } from "./Bar";

export default {
  title: "Chart Component",
  decorators: [withKnobs],
};

const width = 200;
const height = {
  1603360799: {
    value1: 250,
  },
};
const height2 = {
  1603360799: {
    value1: 250,
    value2: 370,
  },
};

const barItem = {
  id: 1603360799,
  tickAxisX: "январь 2020",
  amount: 80000,
};

const barItem2 = {
  id: 1603360799,
  tickAxisX: "январь 2020",
  amount: 80000,
  amount2: 70000,
};

export const BarComponent = () => [
  <Bar key="jsx" bar={barItem} width={width} height={height} />,
];

export const TwoBarsComponent = () => [
  <Bar key="jsx" bar={barItem2} width={width} height={height2} />,
];
