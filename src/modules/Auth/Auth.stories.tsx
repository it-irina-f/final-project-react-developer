import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";

import { Button, Input, InputGroup } from "sancho";

import { Form } from "@/modules/Auth/style";

export default {
  title: "Auth Component",
  decorators: [withKnobs],
};

export const AuthComponent = () => [
  <Form key="jsx" onSubmit={action("Click for button: login")}>
    <InputGroup label="Логин">
      <Input
        placeholder="Введите имя"
        value=""
        onChange={action("Change input")}
        type="text"
        inputSize="lg"
      />
    </InputGroup>
    <Button intent="primary" type="submit" size="lg" block>
      Вход
    </Button>
  </Form>,
];
