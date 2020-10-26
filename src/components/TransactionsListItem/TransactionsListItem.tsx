import React from "react";
import { IconEdit, IconTrash2, Text, TableRow, TableCell } from "sancho";
import { ManageButton } from "@/components/Buttons";

interface TransactionsItemProps {
  amount: number;
  category: string;
  account: string;
  isIncome: boolean;
  isOutgo: boolean;
  comment: string;
}

interface Props {
  listItem: TransactionsItemProps;
  id: number;
  clickFunc: (id: number) => void;
}

export const TransactionsListItem: React.FC<Props> = ({ listItem, id, clickFunc }) => {
  const date = new Date(id);
  return (
    <TableRow>
      <TableCell>
        <Text variant="paragraph">
          {date.getDate() +
            "." +
            (date.getMonth() + 1) +
            "." +
            date.getFullYear() +
            " " +
            date.getHours() +
            ":" +
            date.getMinutes()}
        </Text>
      </TableCell>
      <TableCell>
        <Text variant="paragraph">{listItem.category}</Text>
        <Text variant="subtitle">{listItem.comment}</Text>
      </TableCell>
      <TableCell>
        <Text variant="paragraph">
          {listItem.isIncome ? "+" : "-"}
          {listItem.amount}
        </Text>
      </TableCell>
      <TableCell>
        <Text variant="paragraph">{listItem.account}</Text>
      </TableCell>
      <TableCell>
        <ManageButton
          icon={<IconEdit />}
          onClick={() => clickFunc(id)}
          label="editListItem"
          id={"editListItem_" + id}
        />
        <ManageButton
          icon={<IconTrash2 />}
          onClick={() => clickFunc(id)}
          label="deleteListItem"
          id={"deleteListItem_" + id}
        />
      </TableCell>
    </TableRow>
  );
};
