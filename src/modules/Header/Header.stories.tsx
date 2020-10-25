import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";

import { Button, IconUser, Link } from "sancho";

import {
  HeaderLogin,
  HeaderLoginWrap,
  HeaderWrap,
  Nav,
} from "@/modules/Header/style";

export default {
  title: "Header Component",
  decorators: [withKnobs],
};

const username = "Irina";

export const HeaderComponent = () => [
  <HeaderWrap key="jsx">
    <Nav>
      <Link href="/transactions">Транзакции</Link>
      <Link href="/accounts">Счета</Link>
      <Link href="/categories">Категории</Link>
      <Link href="/statistics">Статистика</Link>
    </Nav>
    <HeaderLoginWrap>
      <IconUser />
      <HeaderLogin>{username}</HeaderLogin>
    </HeaderLoginWrap>
    <Button
      onClick={action("Click for button: logout")}
      type="submit"
      intent="primary"
      size="sm"
    >
      Выход
    </Button>
  </HeaderWrap>,
];
