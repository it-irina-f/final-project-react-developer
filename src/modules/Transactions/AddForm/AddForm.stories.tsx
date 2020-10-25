import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";
import { AddForm } from "./AddForm";

export default {
  title: "Transactions Component",
  decorators: [withKnobs],
};

export const TransactionsAddFormComponent = () => [<AddForm key="jsx" />];
