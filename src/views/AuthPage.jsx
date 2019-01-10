import React, { useEffect, useState } from 'react';
import ErrorPage from 'views/ErrorPage';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';

function AuthPage(props) {
  const { auth, location } = props;
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const authCallBack = error => {
    if (error) {
      setError(error);
    } else {
      setUrl('/');
    }
  };

  useEffect(() => {
    if (/access_token|id_token|error/.test(location.hash)) {
      console.log(`hash:${location.hash}`);
      auth.handleAuthentication(authCallBack);
    } else {
      setError('User authentication failed.');
      setUrl('/error');
    }
  });

  if (url === '/') {
    return <Redirect to="/" />;
  }

  if (url === '/error') {
    return <ErrorPage error={error} />;
  }

  return null;
}

export default withRouter(AuthPage);
