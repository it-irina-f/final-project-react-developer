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
        <Route exact path="/final-project-react-developer">
          <Auth />
        </Route>
        <Route
          path="/final-project-react-developer/transactions"
          render={() => <TransactionsScreen />}
        />
        <Route
          path="/final-project-react-developer/accounts"
          render={() => <AccountsScreen />}
        />
        <Route
          path="/final-project-react-developer/categories"
          render={() => <CategoriesScreen />}
        />
        <Route
          path="/final-project-react-developer/statistics"
          render={() => <StatisticsScreen />}
        />
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </Router>
  </Provider>
);
