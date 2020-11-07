import React, { ReactNode, FC } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { AppState } from "@/AppStore";
import { CheckState } from "@/modules/Auth/reducer";
import { ContentWrapper } from "./style";
import { Spinner } from "sancho";

const mapStateToProps = ({ login }: AppState) => ({
  status: login.status,
});

export interface Props extends ReturnType<typeof mapStateToProps> {
  children: ReactNode;
  redirectPath?: string;
}

export const ChekingUserMsgComponent = () => (
  <ContentWrapper>
    <Spinner label="Загрузка данных..." center />
  </ContentWrapper>
);

export const RedirectUserComponent: FC<{ to: string }> = ({ to }) => (
  <Redirect to={to} />
);

export const AccessCheckerComponent: FC<Props> = ({
  children,
  status,
  redirectPath = "/",
}) => {
  if (status === CheckState.initiated) {
    return <ChekingUserMsgComponent />;
  }

  if (status === CheckState.failed) {
    return <Redirect to={redirectPath} />;
  }

  return <ContentWrapper>{children}</ContentWrapper>;
};

export const AccessChecker = connect(mapStateToProps)(AccessCheckerComponent);
