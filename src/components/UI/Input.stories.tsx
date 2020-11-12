import React from "react";
import { action } from "@storybook/addon-actions";

import { Input } from "sancho";

export default {
  title: "UI Component",
};

export const InputsComponent = () => [
  <Input
    key="jsx"
    placeholder="placeholder...."
    value=""
    onChange={action("Change input")}
    type="text"
    inputSize="lg"
  />,
];
