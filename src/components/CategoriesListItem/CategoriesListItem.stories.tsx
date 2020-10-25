import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";
import { CategoriesListItem } from "./CategoriesListItem";

export default {
  title: "Categories Component",
  decorators: [withKnobs],
};

const listItem = {
  name: "ЖКХ",
  isIncome: false,
  isOutgo: true,
};

export const CategoriesListItemComponent = () => [
  <CategoriesListItem
    key="jsx"
    listItem={object("CategoriesListItem", { ...listItem })}
    id={1603360800}
  />,
];
