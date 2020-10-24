import React, { FC } from "react";
import { Categories, AccessChecker, getCategoriesModule } from "@/modules";
import { DynamicModuleLoader } from "redux-dynamic-modules";

export const CategoriesScreen = () => (
  <DynamicModuleLoader modules={[getCategoriesModule()]}>
    <AccessChecker>
      <Categories />
    </AccessChecker>
  </DynamicModuleLoader>
);
