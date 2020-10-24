import React, { useState } from "react";
import { List } from "@/modules/Transactions/List";
import { AddForm } from "@/modules/Transactions/AddForm";

import { AppState } from "@/AppStore";
import { transactionsSlice } from "./reducer";
import { connect } from "react-redux";
import { TableWrapper, TransactionsWrapper } from "./style";
import {
  Spinner,
  Text,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "sancho";

const mapStateToProps = ({ transactions }: AppState) => ({
  ...transactions,
});

const mapDispatchToProps = {};

export type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

export const TransactionsComponent: React.FC<Props> = ({
  transactions,
  isLoading,
}) => {
  return (
    <>
      <Text variant="h1">Транзакции</Text>
      {isLoading ? (
        <Spinner label="Загрузка данных..." center />
      ) : (
        <TransactionsWrapper>
          <TableWrapper>
            <Table minWidth="300px">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Text variant="uppercase">Дата</Text>
                  </TableCell>
                  <TableCell>
                    <Text variant="uppercase">Категория/Комментарий</Text>
                  </TableCell>
                  <TableCell>
                    <Text variant="uppercase">Сумма</Text>
                  </TableCell>
                  <TableCell>
                    <Text variant="uppercase">Счет</Text>
                  </TableCell>
                  <TableCell>
                    <Text variant="uppercase">Действия</Text>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <List list={transactions} />
              </TableBody>
            </Table>
          </TableWrapper>
          <AddForm />
        </TransactionsWrapper>
      )}
    </>
  );
};
export const Transactions = connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionsComponent);
