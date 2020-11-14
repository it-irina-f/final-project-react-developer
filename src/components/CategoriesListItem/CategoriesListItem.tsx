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
  clickFunc: (id: number) => void;
}

export const CategoriesListItem: React.FC<Props> = ({
  listItem,
  id,
  clickFunc,
}) => {
  return (
    <ListItemWrapper data-wrap="ListItemWrapper">
      <LabelWrapper>
        <LabelItemWrapper>{listItem.name}</LabelItemWrapper>
        <LabelItemWrapper>
          {listItem.isIncome ? <Text variant="uppercase">в доходе</Text> : ""}
          {listItem.isOutgo ? <Text variant="uppercase">в расходе</Text> : ""}
        </LabelItemWrapper>
      </LabelWrapper>
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
    </ListItemWrapper>
  );
};
