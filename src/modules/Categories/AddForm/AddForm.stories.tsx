import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";
import { AddForm } from "./AddForm";

export default {
  title: "Categories Component",
  decorators: [withKnobs],
};

export const CategoriesAddFormComponent = () => [
  <AddForm key="jsx" addListItem={action("add new item in list")} />,
];
