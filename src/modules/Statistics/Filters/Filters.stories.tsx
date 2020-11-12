import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";
import { Filters } from "./Filters";

export default {
  title: "Filters Component",
  decorators: [withKnobs],
};

export const FiltersComponent = () => [
  <Filters key="jsx" changeFilter={action("change value filter")} />,
];
