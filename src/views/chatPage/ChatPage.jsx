import React, { useEffect } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import SidePane from './sideView/SidePane';
import ChatView from './chatView/ChatView';
import chatPageStyle from 'assets/jss/chatPage/chatPage';
import contactStore from 'stores/ContactStore';
import notificationStore from 'stores/NotificationStore';
import { withRouter } from 'react-router';
import auth from 'auth/auth';

function ChatPage(props) {
  const { classes, history } = props;
  const isAuthed = auth.hasValidToken();

  const onContactClick = contact => {
    contactStore.currentChat = contact;
    console.log(contact.name);
  };

  const removeSnow = () => {
    const element = document.getElementById('snow-canvas');
    if (element) {
      element.parentNode.removeChild(element);
    }
  };

  useEffect(() => {
    if (isAuthed) {
      removeSnow();
      contactStore.setMyContact(auth.getUser());
      contactStore.fetchAllContact();
      contactStore.fetchRecentChatContact();
      notificationStore.fetchNotifications();
    } else {
      history.replace('/login');
    }
  });

  if (!isAuthed) {
    return null;
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
