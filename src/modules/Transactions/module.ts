import { ISagaModule } from "redux-dynamic-modules-saga";

import { reducer } from "./reducer";
import { transactionsSaga } from "./saga";

export const getTransactionsModule = (): ISagaModule<typeof reducer> => ({
  id: "transactions",
  reducerMap: {
    transactions: reducer,
  },
  sagas: [transactionsSaga],
});
