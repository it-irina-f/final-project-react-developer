import React from "react";
import { IconEdit, IconTrash2, Text } from "sancho";
import { ManageButton } from "@/components/Buttons";
import { ListItemWrapper, LabelWrapper, LabelItemWrapper } from "./style";

interface CategoriesItemProps {
  name: string;
  isIncome: boolean;
  isOutgo: boolean;
}

interface Props {
  listItem: CategoriesItemProps;
  id: number;
}

export const CategoriesListItem: React.FC<Props> = ({ listItem, id }) => {
  return (
    <ListItemWrapper>
      <LabelWrapper>
        <LabelItemWrapper>{listItem.name}</LabelItemWrapper>
        <LabelItemWrapper>
          {listItem.isIncome ? <Text variant="uppercase">в доходе</Text> : ""}
          {listItem.isOutgo ? <Text variant="uppercase">в расходе</Text> : ""}
        </LabelItemWrapper>
      </LabelWrapper>
      <ManageButton
        icon={<IconEdit />}
        label="editListItem"
        id={"editListItem_" + id}
      />
      <ManageButton
        icon={<IconTrash2 />}
        label="deleteListItem"
        id={"deleteListItem_" + id}
      />
    </ListItemWrapper>
  );
};
