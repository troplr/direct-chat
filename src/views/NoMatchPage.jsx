import React from 'react';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';

function NoMatchPage(props) {
  return <Redirect to="/" />;
}

export default withRouter(NoMatchPage);
