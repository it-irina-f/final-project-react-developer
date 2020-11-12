import React from "react";
import { InputGroup, Select } from "sancho";
import { FormWrapper } from "./style";

interface FiltersProps {
  changeFilter: (text: string) => void;
}

export class Filters extends React.Component<FiltersProps, {}> {
  onChangeHandler = (ev: React.ChangeEvent) => {
    this.props.changeFilter((ev.target as HTMLSelectElement).value);
  };

  render() {
    return (
      <FormWrapper>
        <InputGroup label="Выберите тип транзакции">
          <Select inputSize="md" onChange={this.onChangeHandler}>
            <option value="outgo">расход</option>
            <option value="income">доход</option>
            <option value="income_outgo">доход + расход</option>
          </Select>
        </InputGroup>
      </FormWrapper>
    );
  }
}
