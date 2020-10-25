import React from "react";
import { action } from "@storybook/addon-actions";

import { Check } from "sancho";

export default {
  title: "UI Component",
};

export const CheckboxComponent = () => [
  <div key="jsx">
    <Check label="значение 1" onChange={action("Change chekbox")} />
    <Check label="значение 2" checked onChange={action("Change chekbox")} />
  </div>,
];
