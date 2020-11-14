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
        <Route exact path="/final-project-react-developer/">
          <Auth />
        </Route>
        <Route exact path="/final-project-react-developer/transactions">
          <TransactionsScreen />
        </Route>
        <Route exact path="/final-project-react-developer/accounts">
          <AccountsScreen />
        </Route>
        <Route exact path="/final-project-react-developer/categories">
          <CategoriesScreen />
        </Route>
        <Route exact path="/final-project-react-developer/statistics">
          <StatisticsScreen />
        </Route>
        <Redirect exact from="/" to="/final-project-react-developer" />
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </Router>
  </Provider>
);
