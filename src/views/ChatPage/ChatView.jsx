import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import chatViewStyle from 'assets/jss/material-kit-react/chatViewStyle';

function ChatView(props) {
  const { classes, currentChat } = props;
  return <div className={classes.container}>{currentChat.name}</div>;
}

export default withStyles(chatViewStyle)(ChatView);
