import React from "react";
import { Button, Input, InputGroup, Select, Text, TextArea } from "sancho";
import { FormWrapper, BtnWrap } from "./style";

export class AddForm extends React.Component<{}, {}> {
  render() {
    return (
      <FormWrapper>
        <Text variant="h3">Добавление транзакции</Text>
        <InputGroup label="Тип транзакции">
          <Select inputSize="md">
            <option value="income">расход</option>
            <option value="outgo">доход</option>
          </Select>
        </InputGroup>
        <InputGroup label="Сумма">
          <Input
            required
            inputSize="md"
            placeholder="Сумма"
            type="text"
            name="amount"
            value=""
          />
        </InputGroup>
        <InputGroup label="Категория">
          <Select inputSize="md">
            <option value="cash">ЖКХ</option>
            <option value="cards">Продукты</option>
            <option value="cards">Кафе/рестораны</option>
            <option value="cards">Развлечения</option>
            <option value="cards">Freelance</option>
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
