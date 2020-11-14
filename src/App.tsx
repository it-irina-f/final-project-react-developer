import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Auth, Header } from "@/modules";
import {
  Error404,
  TransactionsScreen,
  AccountsScreen,
  CategoriesScreen,
  StatisticsScreen,
} from "@/screens";
import { store } from "@/AppStore";

export const App: React.FC<{}> = () => (
  <Provider store={store}>
    <HashRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Auth />
        </Route>
        <Route exact path="/transactions">
          <TransactionsScreen />
        </Route>
        <Route exact path="/accounts">
          <AccountsScreen />
        </Route>
        <Route exact path="/categories">
          <CategoriesScreen />
        </Route>
        <Route exact path="/statistics">
          <StatisticsScreen />
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </HashRouter>
  </Provider>
);
