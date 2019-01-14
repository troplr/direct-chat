import React, { useEffect } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import SidePane from './sideView/SidePane';
import ChatView from './chatView/ChatView';
import chatPageStyle from 'assets/jss/chatPage/chatPage';
import contactStore from 'stores/ContactStore';
import notificationStore from 'stores/NotificationStore';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';
import Contact from '../../model/Contact';
import api from 'utils/api';

function ChatPage(props) {
  const { classes, auth } = props;
  const isAuthenticated = auth.hasValidToken();
  const onContactClick = contact => {
    contactStore.currentChat = contact;
    console.log(contact.name);
  };

  const createNewUser = () => {
    const user = new Contact(
      auth.getEmail(),
      auth.getName(),
      'online',
      auth.getPictureUrl()
    );
    api.createNewUser(user);
    contactStore.setMyContact(user);
  };

  useEffect(() => {
    if (isAuthenticated) {
      contactStore.setMyEmail(auth.getEmail());
      contactStore.fetchMyContact(createNewUser);
      contactStore.fetchAllContact();
      contactStore.fetchRecentChatContact();
      notificationStore.fetchNotifications();
    }
  });

  if (isAuthenticated === false) {
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
