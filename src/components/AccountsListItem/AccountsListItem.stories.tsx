import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";
import { AccountsListItem } from "./AccountsListItem";

export default {
  title: "Accounts Component",
  decorators: [withKnobs],
};

const listItem = {
  name: "Наличные",
  currency: "Руб",
  balance: 2000,
};

export const AccountsListItemComponent = () => [
  <AccountsListItem
    key="jsx"
    listItem={object("AccountsListItem", { ...listItem })}
    id={1603360800}
    clickFunc={action("Click for button")}
  />,
];
