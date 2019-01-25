import { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import queryString from 'query-string';
import _ from 'lodash';
import api from 'utils/api';
import auth from 'auth/auth';

function AuthPage(props) {
  const { location, history } = props;
  const [isAuthenticated, setAuthenticated] = useState(undefined);
  const params = queryString.parse(location.hash);

  const fetchUser = async () => {
    if (!_.isEmpty(params) && params.access_token) {
      const user = await api.createUserWithFbToken(params.access_token);
      console.log(`Fetch user via FB token:${JSON.stringify(user)}`);
      if (!_.isEmpty(user, true)) {
        auth.setSession(user);
        setAuthenticated(true);
        return;
      }
    }
    setAuthenticated(false);
  };

  useEffect(() => {
    if (isAuthenticated) {
      history.replace('/');
    } else if (isAuthenticated === false) {
      history.replace('/login');
    } else {
      if (auth.hasValidToken()) {
        setAuthenticated(true);
        return;
      }
      fetchUser();
    }
  });

  return null;
}

export default withRouter(AuthPage);
