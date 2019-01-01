import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import chatViewStyle from 'assets/jss/material-kit-react/chatViewStyle';
import { observer } from 'mobx-react-lite';
import contactStore from 'stores/ContactStore';

function ChatView(props) {
  const { classes } = props;
  return (
    <div className={classes.container}>{contactStore.currentChat.name}</div>
  );
}

export default withStyles(chatViewStyle)(observer(ChatView));
