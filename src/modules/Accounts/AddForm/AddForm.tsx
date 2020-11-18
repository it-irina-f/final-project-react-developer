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
  state = {
    textInput: "",
    balanceInput: "",
  };

  inputChangeHandle = (ev: React.ChangeEvent) => {
    this.setState({
      textInput: (ev.target as HTMLInputElement).value,
    });
  };

  balanceChangeHandle = (ev: React.ChangeEvent) => {
    this.setState({
      balanceInput: (ev.target as HTMLInputElement).value,
    });
  };

  submitHandler = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const account = (ev.currentTarget.elements[1] as HTMLInputElement).value;
    const id = Date.now();
    const payloadItem = {};
    payloadItem[id] = {
      name: (ev.currentTarget.elements[0] as HTMLInputElement).value,
      currency: (ev.currentTarget.elements[2] as HTMLInputElement).value,
      balance: parseFloat(
        (ev.currentTarget.elements[3] as HTMLInputElement).value
      ),
    };
    const payload = {};
    payload[account] = payloadItem;

    this.props.addListItem(payload);
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
            value={this.state.textInput}
            onChange={this.inputChangeHandle}
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
            value={this.state.balanceInput}
            onChange={this.balanceChangeHandle}
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
