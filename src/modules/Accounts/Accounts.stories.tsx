import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";
import { mockAccounts } from "@/modules/Accounts/mock";
import { AccountsWrapper, ListWrapper } from "@/modules/Accounts/style";
import { Text } from "sancho";
import { List } from "@/modules/Accounts/List";
import { AddForm } from "@/modules/Accounts/AddForm";

export default {
  title: "Accounts Component",
  decorators: [withKnobs],
};

const listCash = mockAccounts.cash;
const listCards = mockAccounts.cards;
const listDeposits = mockAccounts.deposits;

export const AccountsPageComponent = () => [
  <AccountsWrapper key="jsx">
    <ListWrapper>
      <Text variant="h3">Наличные</Text>
      <List list={object("TransactionsList", { ...listCash })} />
      <Text variant="h3">Банковские карты</Text>
      <List list={object("TransactionsList", { ...listCards })} />
      <Text variant="h3">Депозиты</Text>
      <List list={object("TransactionsList", { ...listDeposits })} />
    </ListWrapper>
    <AddForm key="jsx" addListItem={action("add new item in list")} />,
  </AccountsWrapper>,
];
