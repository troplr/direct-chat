import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import notificationPaneStyle from 'assets/jss/material-kit-react/notificationPaneStyle';
import ContactItem from './ContactItem';
import { List, ListItem } from '@material-ui/core';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';

function NotificationPane(props) {
  const { notifications, classes, className } = props;

  return (
    <List
      className={classNames({ [classes.container]: true, [className]: true })}
    >
      {notifications.map((notification, index) => (
        <ListItem
          key={notification.contact.id}
          dense
          className={classes.listItem}
        >
          <ContactItem
            name={notification.contact.name}
            status={notification.contact.status}
            image={notification.contact.image}
          />
          {notification.type === 'friend-request' && getFriedRequestView(props)}
          {notification.type === 'friend-request-declined' &&
            getFriedRequestDeniedView(props)}
        </ListItem>
      ))}
    </List>
  );
}

function getFriedRequestDeniedView(props) {
  const { classes } = props;

  return (
    <div>
      <div className={classes.typeText}>declined your friend request</div>
    </div>
  );
}

function getFriedRequestView(props) {
  const { classes } = props;

  return (
    <div>
      <div className={classes.typeText}>sent friend request</div>
      <div>
        <Button variant="contained" color="primary" className={classes.button}>
          Accept
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Decline
        </Button>
      </div>
    </div>
  );
}
export default withStyles(notificationPaneStyle)(NotificationPane);
