import React, { ReactNode, FC } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { AppState } from "@/AppStore";
import { CheckState } from "@/modules/Auth/reducer";
import { ContentWrapper } from "./style";
import { Spinner } from "sancho";
const mapStateToProps = ({ login }: AppState) => ({
  ...login,
});

export interface Props extends ReturnType<typeof mapStateToProps> {
  children: ReactNode;
  redirectPath?: string;
}

export const AccessCheckerComponent: FC<Props> = ({
  children,
  status,
  redirectPath = "/",
}) => {
  if (status === CheckState.initiated) {
    return (
      <ContentWrapper>
        <Spinner label="Загрузка данных..." center />
      </ContentWrapper>
    );
  }
  if (status === CheckState.failed) {
    return <Redirect to={redirectPath} />;
  }

  return <ContentWrapper>{children}</ContentWrapper>;
};

export const AccessChecker = connect(mapStateToProps)(AccessCheckerComponent);
