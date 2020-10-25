import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";
import { mockCategories } from "@/modules/Categories/mock";
import { CategoriesWrapper, ListWrapper } from "@/modules/Categories/style";

import { List } from "@/modules/Categories/List";
import { AddForm } from "@/modules/Categories/AddForm";

export default {
  title: "Categories Component",
  decorators: [withKnobs],
};

const list = mockCategories;

export const CategoriesPageComponent = () => [
  <CategoriesWrapper key="jsx">
    <ListWrapper>
      <List list={object("CategoriesPageComponent", { ...list })} />
    </ListWrapper>
    <AddForm />
  </CategoriesWrapper>,
];
