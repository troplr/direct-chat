import React, { useEffect } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import SidePane from './sideView/SidePane';
import ChatView from './chatView/ChatView';
import chatPageStyle from 'assets/jss/chatPage/chatPage';
import contactStore from 'stores/ContactStore';
import notificationStore from 'stores/NotificationStore';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';

function ChatPage(props) {
  const { classes, auth } = props;

  const onContactClick = contact => {
    contactStore.currentChat = contact;
    console.log(contact.name);
  };

  const isAuthenticated = auth.isAuthenticated();

  useEffect(() => {
    if (isAuthenticated) {
      contactStore.fetchMyContact(auth);
      contactStore.fetchAllContact();
      contactStore.fetchRecentChatContact();
      notificationStore.fetchNotifications();
    }
  });

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

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
        <SidePane onContactClick={onContactClick} auth={auth} />
        <ChatView />
      </div>
    </>
  );
}

export default withRouter(withStyles(chatPageStyle)(ChatPage));
