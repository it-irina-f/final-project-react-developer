import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";
import { Filters } from "./Filters";

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

export default {
  title: "Filters Component",
  decorators: [withKnobs],
};

export const FiltersComponent = () => [
  <Filters
    key="jsx"
    categories={categories}
    changeFilter={action("change value filter")}
    changeCategory={action("change value category")}
  />,
];
