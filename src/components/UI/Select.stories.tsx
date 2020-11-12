import React from "react";
import { action } from "@storybook/addon-actions";

import { Select } from "sancho";

export default {
  title: "UI Component",
};

export const SelectComponent = () => [
  <Select key="jsx" inputSize="md" onChange={action("Change selct")}>
    <option value="1">значение 1</option>
    <option value="2">значение 2</option>
    <option value="3">значение 3</option>
    <option value="4">значение 4</option>
    <option value="5">значение 5</option>
  </Select>,
];
