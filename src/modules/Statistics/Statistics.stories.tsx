import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";
import { mockStatistics } from "@/modules/Statistics/mock";
import { Chart } from "@/modules/Statistics/Chart";

export default {
  title: "Statistics Component",
  decorators: [withKnobs],
};

const width = 83;
const list = mockStatistics;

export const StatisticsPageComponent = () => [
  <Chart
    key="jsx"
    data={object("StatisticsPageComponent", list)}
    width={width}
  />,
];
