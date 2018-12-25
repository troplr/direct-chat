import React, { useState } from 'react';
import defaultAvatar from 'assets/img/default-avatar.svg';
import classnames from 'classnames';
import { FaUsers, FaCog, FaListUl } from 'react-icons/fa';
import EditableLabel from 'components/EditableLabel';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SettingPane from './SettingPane';
import ContactPane from './ContactPane';
import RecentChat from './RecentChat';
import Contact from 'model/Contact';
import chatRecentPaneStyle from 'assets/jss/material-kit-react/chatRecentPaneStyle';
import withStyles from '@material-ui/core/styles/withStyles';
import botAvatar from 'assets/img/bot.gif';

function ChatRecentPane(props) {
  const { classes } = props;
  const [tab, setTab] = useState(0);
  const recentChatContacts = fetchRecentChatContact();
  const allContacts = fetchAllContact();

  const handleFocus = name => text => {
    console.log('Focused with text: ' + text);
  };

  const handleFocusOut = name => text => {
    console.log('Left editor with text: ' + text);
  };

  const handleTabChange = (event, tab) => {
    setTab(tab);
  };

  return (
    <div className={classes.ChatRecentPaneContainer}>
      <div className={classes.myContact}>
        <Button variant="contained" className={classes.customButton}>
          <img
            alt="avatar"
            src={defaultAvatar}
            className={classnames(classes.avatar, classes.userStatusOnline)}
          />
        </Button>
        <div className={classes.userNameSet}>
          <EditableLabel
            text="Linden Quan"
            className={classes.myName}
            onFocus={handleFocus('myName')}
            onFocusOut={handleFocusOut('myName')}
          />
          <div className={classes.online}>Online</div>
        </div>
      </div>
      <Tabs
        fullWidth
        value={tab}
        onChange={handleTabChange}
        className={classes.tabGroup}
      >
        <Tab icon={<FaListUl />} className={classes.tab} />
        <Tab icon={<FaUsers />} className={classes.tab} />
        <Tab icon={<FaCog />} className={classes.tab} />
      </Tabs>
      {tab === 0 && (
        <RecentChat
          contacts={recentChatContacts}
          className={classes.tabContent}
        />
      )}
      {tab === 1 && (
        <ContactPane contacts={allContacts} className={classes.tabContent} />
      )}
      {tab === 2 && <SettingPane className={classes.tabContent} />}
    </div>
  );
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

export default withStyles(chatRecentPaneStyle)(ChatRecentPane);
