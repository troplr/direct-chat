import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';
import queryString from 'query-string';

function AuthPage(props) {
  const { auth, location } = props;
  const [isAuthenticated, setAuthenticated] = useState(undefined);
  const params = queryString.parse(location.hash);

  useEffect(() => {
    if (isAuthenticated === undefined) {
      auth.isAuthenticatedByFb(params).then(result => {
        if (result.authenticated) {
          setAuthenticated(true);
        } else {
          setAuthenticated(false);
        }
      });
    }
  });

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  if (isAuthenticated === false) {
    return <Redirect to="/login" />;
  }

  return null;
}

export default withRouter(AuthPage);
