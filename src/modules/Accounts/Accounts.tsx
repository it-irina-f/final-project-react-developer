import React, { useState } from "react";
import { List } from "@/modules/Accounts/List";
import { AddForm } from "@/modules/Accounts/AddForm";

import { AppState } from "@/AppStore";
import { accountsSlice } from "./reducer";
import { connect } from "react-redux";
import { ListWrapper, AccountsWrapper } from "./style";
import { Spinner, Text } from "sancho";

const mapStateToProps = ({ accounts }: AppState) => ({
  ...accounts,
});

const mapDispatchToProps = {
  addListItemHandler: accountsSlice.actions.addListItem,
};

export type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

export const AccountsComponent: React.FC<Props> = ({
  cash,
  cards,
  deposits,
  isLoading,
  addListItemHandler,
}) => {
  return (
    <>
      <Text variant="h1">Счета</Text>
      {isLoading ? (
        <Spinner label="Загрузка данных..." center />
      ) : (
        <AccountsWrapper>
          <ListWrapper>
            <Text variant="h3">Наличные</Text>
            <List list={cash} />
            <Text variant="h3">Банковские карты</Text>
            <List list={cards} />
            <Text variant="h3">Депозиты</Text>
            <List list={deposits} />
          </ListWrapper>
          <AddForm addListItem={addListItemHandler} />
        </AccountsWrapper>
      )}
    </>
  );
};
export const Accounts = connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountsComponent);
