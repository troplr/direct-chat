import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import chatViewStyle from 'assets/jss/material-kit-react/chatView';

function ChatView(props) {
  const { classes } = props;
  return <div className={classes.container}>chat view</div>;
}

export default withStyles(chatViewStyle)(ChatView);
