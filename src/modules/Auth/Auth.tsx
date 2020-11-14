import React, { useCallback, useState } from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import { isEmpty } from "ramda";

import { AppState } from "@/AppStore";
import { authSlice } from "./reducer";

import { Button, Input, InputGroup } from "sancho";
import { Form } from "./style";

Input.displayName = "Input";
Form.displayName = "Form";

const mapStateToProps = ({ login }: AppState) => ({
  ...login,
});

const mapDispatchToProps = {
  login: authSlice.actions.login,
};

export type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

export const AuthComponent: React.FC<Props> = ({ username, login }) => {
  const [name, setName] = useState(username);
  const onSubmit = useCallback(
    async (ev) => {
      ev.preventDefault();
      if (!isEmpty(name)) {
        login(name);
      }
    },
    [name, login]
  );
  return isEmpty(username) ? (
    <Form onSubmit={onSubmit}>
      <InputGroup label="Логин">
        <Input
          placeholder="Введите имя"
          value={name}
          onChange={(ev) => setName((ev.target as HTMLInputElement).value)}
          type="text"
          inputSize="lg"
        />
      </InputGroup>
      <Button intent="primary" type="submit" size="lg" block>
        Вход
      </Button>
    </Form>
  ) : (
    <Redirect to="/statistics" />
  );
};

export const Auth = connect(mapStateToProps, mapDispatchToProps)(AuthComponent);
