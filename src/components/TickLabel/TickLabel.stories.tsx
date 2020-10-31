import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";
import { TickLabel } from "./TickLabel";
import { Bar } from "@/components";

export default {
  title: "Chart Component",
  decorators: [withKnobs],
};

const width = 200;

const barItem = {
  id: 1603360799,
  tickAxisX: "январь 2020",
  amount: 80000,
};

export const TickLabelComponent = () => [
  <TickLabel key="jsx" bar={barItem} width={width} />,
];
