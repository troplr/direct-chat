import React, { useState } from 'react';
import defaultAvatar from 'assets/img/default-avatar.svg';
import classnames from 'classnames';
import { FaUsers, FaCog } from 'react-icons/fa';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import EditableLabel from 'components/EditableLabel';
import Button from '@material-ui/core/Button';

function ChatRecentPane(props) {
  const { classes } = props;

  const handleFocus = name => text => {
    console.log('Focused with text: ' + text);
  };

  const handleFocusOut = name => text => {
    console.log('Left editor with text: ' + text);
  };
  return (
    <main className={classes.ChatRecentPaneContainer}>
      <Button variant="contained" className={classes.customButton}>
        <img
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
      <GridContainer justify="center">
        <GridItem xs={6} className={classes.settingIconContainer}>
          <IconButton color="secondary" className={classes.settingIcon}>
            <FaUsers />
          </IconButton>
        </GridItem>

        <GridItem xs={6} className={classes.settingIconContainer}>
          <IconButton color="secondary">
            <FaCog />
          </IconButton>
        </GridItem>
      </GridContainer>
      <Divider variant="middle" />
    </main>
  );
}

export default ChatRecentPane;
