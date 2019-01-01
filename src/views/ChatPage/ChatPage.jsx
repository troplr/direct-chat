import React, { useEffect } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import SidePane from './SidePane';
import ChatView from './ChatView';
import chatPageStyle from 'assets/jss/material-kit-react/views/chatPage';
import contactStore from 'stores/ContactStore';
import notificationStore from 'stores/NotificationStore';

function ChatPage(props) {
  const { classes } = props;

  const onContactClick = contact => {
    contactStore.currentChat = contact;
    console.log(contact.name);
  };

  useEffect(() => {
    contactStore.fetchMyContact();
    contactStore.fetchAllContact();
    contactStore.fetchRecentChatContact();
    notificationStore.fetchNotifications();
  });

  return (
    <>
      <div className={classes.cloudContainer}>
        <div className={classes.x2}>
          <div className={classes.cloud} />
        </div>
        <div className={classes.x3}>
          <div className={classes.cloud} />
        </div>
        <div className={classes.x4}>
          <div className={classes.cloud} />
        </div>
        <div className={classes.x5}>
          <div className={classes.cloud} />
        </div>
      </div>
      <div className={classes.body}>
        <SidePane onContactClick={onContactClick} />
        <ChatView />
      </div>
    </>
  );
}

export default withStyles(chatPageStyle)(ChatPage);
