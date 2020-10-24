import React, { FC } from "react";
import { Transactions, AccessChecker, getTransactionsModule } from "@/modules";
import { DynamicModuleLoader } from "redux-dynamic-modules";

export const TransactionsScreen = () => (
  <DynamicModuleLoader modules={[getTransactionsModule()]}>
    <AccessChecker>
      <Transactions />
    </AccessChecker>
  </DynamicModuleLoader>
);
