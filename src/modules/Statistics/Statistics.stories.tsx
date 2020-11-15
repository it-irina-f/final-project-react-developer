import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";
import { mockStatisticsIncome } from "@/modules/Statistics/mock";
import { Chart } from "@/modules/Statistics/Chart";
import { Filters } from "@/modules/Statistics/Filters";

export default {
  title: "Statistics Component",
  decorators: [withKnobs],
};

const width = 83;
const list = mockStatisticsIncome;
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
const tickLabelsY = ["97 000", "77 600", "58 200", "38 800", "19 400", "0"];
const categories = {
  "1603360800": {
    name: "ЖКХ",
    isIncome: false,
    isOutgo: true,
  },
  "1603360801": {
    name: "Продукты",
    isIncome: false,
    isOutgo: true,
  },
  "1603360802": {
    name: "Кафе/рестораны",
    isIncome: false,
    isOutgo: true,
  },
  "1603360803": {
    name: "Развлечения",
    isIncome: false,
    isOutgo: true,
  },
  "1603360807": {
    name: "Freelance",
    isIncome: true,
    isOutgo: true,
  },
};

export const StatisticsPageComponent = () => [
  <Filters
    key="jsx"
    categories={categories}
    changeFilter={action("change value filter")}
    changeCategory={action("change value category")}
  />,
  <Chart
    key="jsx"
    data={object("StatisticsPageComponent", list)}
    width={width}
    height={height}
    tickLabelsY={tickLabelsY}
  />,
];
