import React from 'react';
import { withRouter } from 'react-router';

function ErrorPage(props) {
  let { error } = props;
  if (!error) {
    error = 'Unknown Error';
  }
  return <div> {error} </div>;
}

export default withRouter(ErrorPage);
