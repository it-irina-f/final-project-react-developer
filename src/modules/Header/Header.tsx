import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { isEmpty } from "ramda";
import { AppState } from "@/AppStore";
import { actions } from "@/modules/Auth/reducer";
import { Button, IconUser, Link } from "sancho";
import { HeaderWrap, HeaderLoginWrap, HeaderLogin, Nav } from "./style";

Button.displayName = "Button";

const mapStateToProps = ({ login }: AppState) => ({
  ...login,
});

const mapDispatchToProps = {
  logout: actions.logout,
};

export type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

class HeaderComponent extends PureComponent<Props> {
  logout = () => {
    const { logout } = this.props;
    logout();
  };
  render() {
    const { username } = this.props;
    return (
      !isEmpty(username) && (
        <HeaderWrap>
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
            onClick={this.logout}
            type="submit"
            intent="primary"
            size="sm"
          >
            Выход
          </Button>
        </HeaderWrap>
      )
    );
  }
}

export const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComponent);
