import React, { useState } from "react";
import { List } from "@/modules/Categories/List";
import { AddForm } from "@/modules/Categories/AddForm";

import { AppState } from "@/AppStore";
import { categoriesSlice } from "./reducer";
import { connect } from "react-redux";
import { ListWrapper, CategoriesWrapper } from "./style";
import { Spinner, Text } from "sancho";

const mapStateToProps = ({ categories }: AppState) => ({
  ...categories,
});

const mapDispatchToProps = {
  addListItemHandler: categoriesSlice.actions.addListItem,
};

export type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

export const CategoriesComponent: React.FC<Props> = ({
  categories,
  isLoading,
  addListItemHandler,
}) => {
  return (
    <>
      <Text variant="h1">Категории</Text>
      {isLoading ? (
        <Spinner label="Загрузка данных..." center />
      ) : (
        <CategoriesWrapper>
          <ListWrapper>
            <List list={categories} />
          </ListWrapper>
          <AddForm addListItem={addListItemHandler} />
        </CategoriesWrapper>
      )}
    </>
  );
};
export const Categories = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesComponent);
