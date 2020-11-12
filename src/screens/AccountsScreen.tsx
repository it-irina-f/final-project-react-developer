import React, { FC } from "react";
import { Accounts, AccessChecker, getAccountsModule } from "@/modules";
import { DynamicModuleLoader } from "redux-dynamic-modules";

export const AccountsScreen = () => (
  <DynamicModuleLoader modules={[getAccountsModule()]}>
    <AccessChecker>
      <Accounts />
    </AccessChecker>
  </DynamicModuleLoader>
);
