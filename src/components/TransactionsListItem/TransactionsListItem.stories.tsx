import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";
import { TransactionsListItem } from "./TransactionsListItem";

export default {
  title: "Transactions Component",
  decorators: [withKnobs],
};

const listItem = {
  amount: 8000,
  category: "ЖКХ",
  account: "Карта Сбербанк",
  isIncome: false,
  isOutgo: true,
  comment: "",
};

export const TransactionsListItemComponent = () => [
  <TransactionsListItem
    key="jsx"
    listItem={object("TransactionsListItem", { ...listItem })}
    id={1603380600000}
    clickFunc={action("Click for button")}
  />,
];
