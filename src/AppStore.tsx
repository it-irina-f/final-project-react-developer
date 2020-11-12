import { combineReducers } from "redux";
import { createStore } from "redux-dynamic-modules";
import { getSagaExtension } from "redux-dynamic-modules-saga";

import { authSlice, getAuthModule } from "@/modules/Auth";
import { accountsSlice } from "@/modules/Accounts";
import { categoriesSlice } from "@/modules/Categories";
import { transactionsSlice } from "@/modules/Transactions";

const reducer = combineReducers({
  login: authSlice.reducer,
  accounts: accountsSlice.reducer,
  categories: categoriesSlice.reducer,
  transactions: transactionsSlice.reducer,
});

export type AppState = ReturnType<typeof reducer>;

export const store = createStore<AppState>(
  { extensions: [getSagaExtension({})] },
  getAuthModule()
);
