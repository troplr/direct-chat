import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';
import queryString from 'query-string';
import contactStore from 'stores/ContactStore';

function AuthPage(props) {
  const { auth, location } = props;
  const [isAuthenticated, setAuthenticated] = useState(undefined);
  const params = queryString.parse(location.hash);

  useEffect(() => {
    if (isAuthenticated === undefined) {
      auth.isAuthenticatedByFb(params).then(result => {
        if (result.authenticated) {
          contactStore.setMyEmail(auth.getEmail());
          contactStore.setMyName(auth.getName());
          setAuthenticated(true);
        } else {
          setAuthenticated(false);
        }
      });
    }
  });

  if (isAuthenticated) {
    console.log('/');
    return <Redirect to="/" />;
  }

  if (isAuthenticated === false) {
    console.log('/login');

    return <Redirect to="/login" />;
  }

  return null;
}

export default withRouter(AuthPage);
