import React, { FC } from "react";
import { TransactionsListItem } from "@/components/TransactionsListItem";

interface TransactionsProps {
  [key: number]: TransactionsItemProps;
}

interface TransactionsItemProps {
  amount: number;
  category: string;
  account: string;
  isIncome: boolean;
  isOutgo: boolean;
  comment: string;
}

interface Props {
  list: TransactionsProps;
}

export class List extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const list = this.props.list;
    const itemList = Object.keys(list)
      .sort((a, b) => {
        return -1 * (parseInt(a) - parseInt(b));
      })
      .map((key) => (
        <TransactionsListItem
          key={key}
          listItem={list[key]}
          id={parseInt(key)}
        />
      ));
    return <>{Object.keys(list).length === 0 ? "Список пустой" : itemList}</>;
  }
}
