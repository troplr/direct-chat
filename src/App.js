import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import Auth from 'Auth/Auth';
import indexRoutes from 'routes/index.jsx';

const hist = createBrowserHistory();

function App(props) {
  const auth = new Auth(hist);
  return (
    <Router history={hist}>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return (
            <Route
              exact
              path={prop.path}
              key={key}
              render={props => <prop.component auth={auth} />}
            />
          );
        })}
      </Switch>
    </Router>
  );
}

export default App;
