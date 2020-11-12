import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";
import { List } from "./List";
import { mockAccounts } from "@/modules/Accounts/mock";

export default {
  title: "Accounts Component",
  decorators: [withKnobs],
};

const list = mockAccounts.cards;

export const AccountsListComponent = () => [
  <List key="jsx" list={object("AccountsList", { ...list })} />,
];
