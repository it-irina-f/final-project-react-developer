import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";
import { mockTransactions } from "@/modules/Transactions/mock";
import { Table, TableBody, TableCell, TableHead, TableRow, Text } from "sancho";
import { List } from "@/modules/Transactions/List";
import { AddForm } from "@/modules/Transactions/AddForm";
import {
  TableWrapper,
  TransactionsWrapper,
} from "@/modules/Transactions/style";

export default {
  title: "Transactions Component",
  decorators: [withKnobs],
};

const list = mockTransactions;

export const TransactionsPageComponent = () => [
  <TransactionsWrapper key="jsx">
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
          <List list={object("TransactionsPageComponent", { ...list })} />
        </TableBody>
      </Table>
    </TableWrapper>
    <AddForm key="jsx" addListItem={action("add new item in list")} />,
  </TransactionsWrapper>,
];
