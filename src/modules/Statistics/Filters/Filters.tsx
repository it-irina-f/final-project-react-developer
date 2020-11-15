import React from "react";
import { InputGroup, Select } from "sancho";
import { FormWrapper } from "./style";

interface CategoriesProps {
  [key: number]: CategoriesItemProps;
}

interface CategoriesItemProps {
  name: string;
  isIncome: boolean;
  isOutgo: boolean;
}

interface FiltersProps {
  changeFilter: (text: string) => void;
  changeCategory: (text: string) => void;
  categories: CategoriesProps;
}

export class Filters extends React.Component<FiltersProps, {}> {
  onChangeHandler = (ev: React.ChangeEvent) => {
    this.props.changeFilter((ev.target as HTMLSelectElement).value);
  };

  onChangeCategoryHandler = (ev: React.ChangeEvent) => {
    this.props.changeCategory((ev.target as HTMLSelectElement).value);
  };

  render() {
    const categories = this.props.categories;
    const itemCategories = Object.keys(categories).map((key) => (
      <option key={key} value={key}>
        {categories[key].name}
      </option>
    ));

    return (
      <FormWrapper>
        <InputGroup label="Выберите тип транзакции">
          <Select inputSize="md" onChange={this.onChangeHandler}>
            <option value="outgo">расход</option>
            <option value="income">доход</option>
            <option value="income_outgo">доход + расход</option>
          </Select>
        </InputGroup>
        <InputGroup label="Выберите тип категории">
          <Select inputSize="md" onChange={this.onChangeCategoryHandler}>
            <option selected value=""></option>
            {itemCategories}
          </Select>
        </InputGroup>
      </FormWrapper>
    );
  }
}
