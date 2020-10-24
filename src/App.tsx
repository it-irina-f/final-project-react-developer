import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
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
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Auth />
        </Route>
        <Route path="/transactions" render={() => <TransactionsScreen />} />
        <Route path="/accounts" render={() => <AccountsScreen />} />
        <Route path="/categories" render={() => <CategoriesScreen />} />
        <Route path="/statistics" render={() => <StatisticsScreen />} />
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </Router>
  </Provider>
);
