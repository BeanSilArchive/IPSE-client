import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import { Home, Signin } from "pages";

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/Auth" component={Signin} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
