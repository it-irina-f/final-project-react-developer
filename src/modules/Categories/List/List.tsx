import React, { FC } from "react";
import { CategoriesListItem } from "@/components/CategoriesListItem";
import { ListWrapper } from "./style";

interface CategoriesProps {
  [key: number]: CategoriesItemProps;
}

interface CategoriesItemProps {
  name: string;
  isIncome: boolean;
  isOutgo: boolean;
}

interface Props {
  list: CategoriesProps;
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
      <CategoriesListItem
        key={key}
        listItem={list[key]}
        id={parseInt(key)}
        clickFunc={clickFunc}
      />
    ));
    return (
      <ListWrapper>
        {Object.keys(list).length === 0 ? "Список пустой" : itemList}
      </ListWrapper>
    );
  }
}
