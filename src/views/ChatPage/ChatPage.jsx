import React, { useState } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import SidePane from './SidePane';
import ChatView from './ChatView';
import Contact from 'model/Contact';
import cardPageStyle from 'assets/jss/material-kit-react/views/cardPage';
import botAvatar from 'assets/img/bot.gif';
import chatStore from 'stores/ChatStore';
import { inject, observer } from 'mobx-react';

function ChatPage(props) {
  const { classes, chatStore } = props;
  const recentChatContacts = fetchRecentChatContact();
  const allContacts = fetchAllContact();
  const notifications = fetchNotifications();
  const [currentChat, setCurrentChat] = useState(recentChatContacts[0]);

  const onContactClick = contact => {
    setCurrentChat(contact);
    console.log(contact.name);
  };

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
          recentChatContacts={recentChatContacts}
          allContacts={allContacts}
          notifications={notifications}
        />
        <ChatView currentChat={currentChat} />
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

function fetchAllContact() {
  return fetchRecentChatContact();
}

function fetchRecentChatContact() {
  return [
    new Contact(1, 'AI-Bot', 'online', botAvatar),
    new Contact(
      2,
      'Tom Jerry',
      'away',
      'https://www.kasandbox.org/programming-images/avatars/leafers-ultimate.png'
    ),
    new Contact(
      3,
      'Jim Karry',
      'online',
      'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-11/256/thinking-face.png'
    ),
    new Contact(
      4,
      'Win Fred',
      'online',
      'https://flyingmeat.com/images/acorn_256x256.png'
    ),
    new Contact(
      5,
      'Tom Jerry',
      'away',
      'https://www.kasandbox.org/programming-images/avatars/leafers-ultimate.png'
    )
  ];
}

export default withStyles(cardPageStyle)(
  inject('chatStore')(observer(ChatPage))
);
