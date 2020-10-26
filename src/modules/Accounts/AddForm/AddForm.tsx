import React from "react";
import { Button, Input, InputGroup, Select, Text } from "sancho";
import { FormWrapper, BtnWrap } from "./style";

interface AccountsItemProps {
  name: string;
  currency: string;
  balance: number;
}

interface AddFormProps {
  addListItem: (AccountsItemProps) => void;
}

export class AddForm extends React.Component<AddFormProps, {}> {
  submitHandler = (ev: React.FormEvent) => {
    ev.preventDefault();
    this.props.addListItem("");
  };

  render() {
    return (
      <FormWrapper onSubmit={this.submitHandler}>
        <Text variant="h3">Добавление счета</Text>
        <InputGroup label="Наименование">
          <Input
            required
            inputSize="lg"
            placeholder="Наименование"
            type="text"
            name="nameListItem"
            value=""
          />
        </InputGroup>
        <InputGroup label="Тип счета">
          <Select inputSize="lg">
            <option value="cash">наличные</option>
            <option value="cards">банковские карты</option>
            <option value="deposits">депозиты</option>
          </Select>
        </InputGroup>
        <InputGroup label="Валюта">
          <Select inputSize="lg">
            <option value="Руб">Руб</option>
            <option value="Евро">Евро</option>
            <option value="$">Доллар $</option>
          </Select>
        </InputGroup>
        <InputGroup label="Начальный остаток">
          <Input
            inputSize="lg"
            placeholder="Начальный остаток"
            type="text"
            name="balanceListItem"
            value=""
          />
        </InputGroup>
        <BtnWrap>
          <Button intent="primary" type="submit" block component="button">
            Сохранить
          </Button>
        </BtnWrap>
      </FormWrapper>
    );
  }
}
