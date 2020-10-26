import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";
import { Bar } from "./Bar";

export default {
  title: "Chart Component",
  decorators: [withKnobs],
};

const width = 200;

const barItem = {
  id: 1603360799,
  height: 360,
  tickAxisX: "январь 2020",
};

export const BarComponent = () => [
  <Bar key="jsx" bar={barItem} width={width} />,
];
