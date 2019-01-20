import React, { useState, useEffect } from 'react';
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
import _ from 'lodash';

function ChatPage(props) {
  const { classes, auth } = props;
  const [isAuthed, setAuthed] = useState(undefined);
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

  const hasValidToken = async () => {
    setAuthed(await auth.hasValidToken());
  };

  useEffect(() => {
    if (isAuthed === undefined) {
      hasValidToken();
    } else if (isAuthed) {
      contactStore.setMyEmail(auth.getEmail());
      contactStore.fetchMyContact().then(contact => {
        if (_.isEmpty(contact)) {
          createNewUser();
        }
      });
      contactStore.fetchAllContact();
      contactStore.fetchRecentChatContact();
      notificationStore.fetchNotifications();
    }
  });

  if (isAuthed === undefined) {
    return null;
  } else if (isAuthed === false) {
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
