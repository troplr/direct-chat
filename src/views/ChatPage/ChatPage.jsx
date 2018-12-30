import React, { useEffect } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import SidePane from './SidePane';
import ChatView from './ChatView';
import Contact from 'model/Contact';
import chatPageStyle from 'assets/jss/material-kit-react/views/chatPage';
import chatStore from 'stores/ChatStore';

function ChatPage(props) {
  const { classes } = props;
  const notifications = fetchNotifications();

  const onContactClick = contact => {
    chatStore.currentChat = contact;
    console.log(contact.name);
  };

  useEffect(() => {
    chatStore.fetchAllContact();
    chatStore.fetchRecentChatContact();
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
        <SidePane
          onContactClick={onContactClick}
          notifications={notifications}
        />
        <ChatView />
      </div>
    </>
  );
}

function fetchNotifications() {
  return [
    {
      contact: new Contact(
        2,
        'Tom Jerry',
        'away',
        'https://www.kasandbox.org/programming-images/avatars/leafers-ultimate.png'
      ),
      type: 'friend-request'
    },

    {
      contact: new Contact(
        4,
        'Win Fred',
        'online',
        'https://flyingmeat.com/images/acorn_256x256.png'
      ),
      type: 'friend-request-declined'
    }
  ];
}

export default withStyles(chatPageStyle)(ChatPage);
