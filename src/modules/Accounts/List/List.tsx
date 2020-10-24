import React, { FC } from "react";
import { AccountsListItem } from "@/components/AccountsListItem";
import { ListWrapper } from "./style";

interface AccountsProps {
  [key: number]: AccountsItemProps;
}

interface AccountsItemProps {
  name: string;
  currency: string;
  balance: number;
}

interface Props {
  list: AccountsProps;
}

export class List extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const list = this.props.list;
    const itemList = Object.keys(list).map((key) => (
      <AccountsListItem key={key} listItem={list[key]} id={parseInt(key)} />
    ));
    return (
      <ListWrapper>
        {Object.keys(list).length === 0 ? "Список пустой" : itemList}
      </ListWrapper>
    );
  }
}
