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

  clickFuncHandler() {
    console.log("click for button");
  }

  render() {
    const clickFunc = this.clickFuncHandler;
    const list = this.props.list;
    const itemList = Object.keys(list).map((key) => (
      <AccountsListItem
        key={key}
        listItem={list[key]}
        id={parseInt(key)}
        clickFunc={clickFunc}
      />
    ));
    return (
      <ListWrapper data-wrap="ListWrapper">
        {Object.keys(list).length === 0 ? "Список пустой" : itemList}
      </ListWrapper>
    );
  }
}
