import React, { FC } from "react";
import { Statistics, AccessChecker, getStatisticsModule } from "@/modules";
import { DynamicModuleLoader } from "redux-dynamic-modules";

export const StatisticsScreen = () => (
  <DynamicModuleLoader modules={[getStatisticsModule()]}>
    <AccessChecker>
      <Statistics />
    </AccessChecker>
  </DynamicModuleLoader>
);
