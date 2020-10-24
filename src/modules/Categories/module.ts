import { ISagaModule } from "redux-dynamic-modules-saga";

import { reducer } from "./reducer";
import { categoriesSaga } from "./saga";

export const getCategoriesModule = (): ISagaModule<typeof reducer> => ({
  id: "categories",
  reducerMap: {
    categories: reducer,
  },
  sagas: [categoriesSaga],
});
