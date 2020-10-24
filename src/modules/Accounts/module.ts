import { ISagaModule } from "redux-dynamic-modules-saga";

import { reducer } from "./reducer";
import { accountsSaga } from "./saga";

export const getAccountsModule = (): ISagaModule<typeof reducer> => ({
  id: "accounts",
  reducerMap: {
    accounts: reducer,
  },
  sagas: [accountsSaga],
});
