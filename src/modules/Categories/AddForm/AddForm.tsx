import React from "react";
import { Button, Input, InputGroup, Check, Text } from "sancho";
import { FormWrapper, BtnWrap } from "./style";

interface CategoriesItemProps {
  name: string;
  isIncome: boolean;
  isOutgo: boolean;
}
interface AddFormProps {
  addListItem: (CategoriesItemProps) => void;
}
export class AddForm extends React.Component<AddFormProps, {}> {
  submitHandler = (ev: React.FormEvent) => {
    ev.preventDefault();
    this.props.addListItem("");
  };
  render() {
    return (
      <FormWrapper onSubmit={this.submitHandler}>
        <Text variant="h3">Добавление категории</Text>
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
        <InputGroup label="Показывать в списке">
          <div>
            <Check label="в расходе" />
            <Check label="в доходе" />
          </div>
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
