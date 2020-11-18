import React from "react";
import { Button, Input, InputGroup, Select, Text, TextArea } from "sancho";
import { FormWrapper, BtnWrap } from "./style";

interface TransactionsItemProps {
  amount: number;
  category: string;
  account: string;
  isIncome: boolean;
  isOutgo: boolean;
  comment: string;
}
interface AddFormProps {
  addListItem: (TransactionsItemProps) => void;
}
export class AddForm extends React.Component<AddFormProps, {}> {
  state = {
    textInput: "",
  };

  inputChangeHandle = (ev: React.ChangeEvent) => {
    this.setState({
      textInput: (ev.target as HTMLInputElement).value,
    });
  };

  submitHandler = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const payload = {
      amount: parseFloat(
        (ev.currentTarget.elements[1] as HTMLInputElement).value
      ),
      category: (ev.currentTarget.elements[2] as HTMLInputElement).value,
      account: (ev.currentTarget.elements[3] as HTMLInputElement).value,
      isIncome:
        (ev.currentTarget.elements[0] as HTMLInputElement).value === "income",
      isOutgo:
        (ev.currentTarget.elements[0] as HTMLInputElement).value === "outgo",
      comment: (ev.currentTarget.elements[4] as HTMLInputElement).value,
    };

    this.props.addListItem(payload);
  };

  render() {
    return (
      <FormWrapper onSubmit={this.submitHandler}>
        <Text variant="h3">Добавление транзакции</Text>
        <InputGroup label="Тип транзакции">
          <Select inputSize="md">
            <option value="outgo">расход</option>
            <option value="income">доход</option>
          </Select>
        </InputGroup>
        <InputGroup label="Сумма">
          <Input
            required
            inputSize="md"
            placeholder="Сумма"
            type="text"
            name="amount"
            value={this.state.textInput}
            onChange={this.inputChangeHandle}
          />
        </InputGroup>
        <InputGroup label="Категория">
          <Select inputSize="md">
            <option value="ЖКХ">ЖКХ</option>
            <option value="Продукты">Продукты</option>
            <option value="Кафе/рестораны">Кафе/рестораны</option>
            <option value="Развлечения">Развлечения</option>
            <option value="Freelance">Freelance</option>
          </Select>
        </InputGroup>
        <InputGroup label="Счет">
          <Select inputSize="md">
            <option value="Наличные">Наличные</option>
            <option value="Наличные Евро">Наличные Евро</option>
            <option value="Карта ВТБ">Карта ВТБ</option>
            <option value="Карта Сбербанк">Карта Сбербанк</option>
            <option value="Вклад ВТБ">Вклад ВТБ</option>
          </Select>
        </InputGroup>
        <InputGroup label="Комментарий">
          <TextArea placeholder="Добавьте комментарий к транзакции" />
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
