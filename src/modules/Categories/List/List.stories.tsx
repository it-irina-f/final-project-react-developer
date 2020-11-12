import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";
import { List } from "./List";
import { mockCategories } from "@/modules/Categories/mock";

export default {
  title: "Categories Component",
  decorators: [withKnobs],
};

const list = mockCategories;

export const CategoriesListComponent = () => [
  <List key="jsx" list={object("CategoriesList", { ...list })} />,
];
