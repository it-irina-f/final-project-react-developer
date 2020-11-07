import React from "react";
import { IconEdit, IconTrash2 } from "sancho";
import { ManageButton } from "@/components/Buttons";
import { ListItemWrapper, LabelWrapper, LabelItemWrapper } from "./style";

interface AccountsItemProps {
  name: string;
  currency: string;
  balance: number;
}

interface Props {
  listItem: AccountsItemProps;
  id: number;
  clickFunc: (id: number) => void;
}

export const AccountsListItem: React.FC<Props> = ({
  listItem,
  id,
  clickFunc,
}) => {
  return (
    <ListItemWrapper data-wrap="ListItemWrapper">
      <LabelWrapper>
        <LabelItemWrapper>{listItem.name}</LabelItemWrapper>
        <LabelItemWrapper>
          {listItem.balance} {listItem.currency}
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
