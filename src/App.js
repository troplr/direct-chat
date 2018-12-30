import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

import indexRoutes from 'routes/index.jsx';

import 'assets/scss/material-kit-react.css?v=1.3.0';

var hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return (
            <Route
              exact
              path={prop.path}
              key={key}
              component={prop.component}
            />
          );
        })}
      </Switch>
    </Router>
  );
}

export default App;
