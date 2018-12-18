import React, { useState } from 'react';
import defaultAvatar from 'assets/img/default-avatar.svg';
import classnames from 'classnames';
import { FaUsers, FaCog, FaListUl } from 'react-icons/fa';
import EditableLabel from 'components/EditableLabel';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Setting from './Setting';
import Contact from './Contact';
import RecentChat from './RecentChat';

function ChatRecentPane(props) {
  const { classes } = props;
  const [tab, setTab] = useState(0);

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
    <main className={classes.ChatRecentPaneContainer}>
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
      {tab === 0 && <RecentChat />}
      {tab === 1 && <Contact />}
      {tab === 2 && <Setting />}
    </main>
  );
}

export default ChatRecentPane;
