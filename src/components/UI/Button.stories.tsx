import React from "react";
import { action } from "@storybook/addon-actions";

import { Button } from "sancho";

export default {
  title: "UI Component",
};

export const ButtonsComponent = () => [
  <Button
    key="jsx"
    onClick={action("Click for button")}
    type="submit"
    intent="primary"
    size="sm"
  >
    Name button
  </Button>,
];
