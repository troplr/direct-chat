import React, { useState } from 'react';
import classnames from 'classnames';
import { FaUsers, FaCog, FaComments, FaBell } from 'react-icons/fa';
import EditableLabel from 'components/EditableLabel';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SettingPane from './SettingPane';
import NotificationPane from './NotificationPane';
import ContactPane from './ContactPane';
import RecentChat from './RecentChat';
import chatRecentPaneStyle from 'assets/jss/material-kit-react/chatRecentPaneStyle';
import withStyles from '@material-ui/core/styles/withStyles';
import { observer } from 'mobx-react-lite';
import contactStore from 'stores/ContactStore';

function SidePane(props) {
  const { classes, onContactClick } = props;
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
    <div className={classes.ChatRecentPaneContainer}>
      <div className={classes.myContact}>
        <Button variant="contained" className={classes.button}>
          <img
            alt="avatar"
            src={contactStore.myContact.image}
            className={classnames(classes.avatar, classes.userStatusOnline)}
          />
        </Button>
        <div className={classes.userNameSet}>
          <EditableLabel
            text={contactStore.myContact.name}
            className={classes.myName}
            onFocus={handleFocus('myName')}
            onFocusOut={handleFocusOut('myName')}
          />
          <div className={classes.status}>Online</div>
        </div>
      </div>
      <Tabs
        fullWidth
        value={tab}
        onChange={handleTabChange}
        className={classes.tabGroup}
      >
        <Tab icon={<FaComments />} className={classes.tab} />
        <Tab icon={<FaUsers />} className={classes.tab} />
        <Tab icon={<FaBell />} className={classes.tab} />
        <Tab icon={<FaCog />} className={classes.tab} />
      </Tabs>
      {tab === 0 && (
        <RecentChat
          className={classes.tabContent}
          onContactClick={onContactClick}
        />
      )}
      {tab === 1 && (
        <ContactPane
          className={classes.tabContent}
          onContactClick={onContactClick}
        />
      )}
      {tab === 2 && <NotificationPane className={classes.tabContent} />}
      {tab === 3 && <SettingPane className={classes.tabContent} />}
    </div>
  );
}

export default withStyles(chatRecentPaneStyle)(observer(SidePane));
