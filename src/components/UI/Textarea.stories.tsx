import React from "react";
import { action } from "@storybook/addon-actions";

import { TextArea } from "sancho";

export default {
  title: "UI Component",
};

export const TextAreaComponent = () => [
  <TextArea
    key="jsx"
    onChange={action("Change textarea")}
    placeholder="textarea placeholder...."
  />,
];
