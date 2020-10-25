import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";
import { List } from "./List";
import { mockTransactions } from "@/modules/Transactions/mock";

export default {
  title: "Transactions Component",
  decorators: [withKnobs],
};

const list = mockTransactions;

export const TransactionsListComponent = () => [
  <List key="jsx" list={object("TransactionsList", { ...list })} />,
];
