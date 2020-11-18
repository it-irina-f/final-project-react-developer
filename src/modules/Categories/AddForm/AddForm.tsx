import React from "react";
import { Button, Input, InputGroup, Check, Text, Select } from "sancho";
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
      name: (ev.currentTarget.elements[0] as HTMLInputElement).value,
      isOutgo: (ev.currentTarget.elements[1] as HTMLInputElement).checked,
      isIncome: (ev.currentTarget.elements[2] as HTMLInputElement).checked,
    };

    this.props.addListItem(payload);
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
            value={this.state.textInput}
            onChange={this.inputChangeHandle}
          />
        </InputGroup>
        <InputGroup label="Показывать в списке">
          <div>
            <Check label="в расходе" name="outgo" />
            <Check label="в доходе" name="income" />
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
