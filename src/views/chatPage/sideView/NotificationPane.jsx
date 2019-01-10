import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import notificationPaneStyle from 'assets/jss/chatPage/sideView/notificationPaneStyle';
import ContactItem from './ContactItem';
import { List, ListItem } from '@material-ui/core';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Contact from 'model/Contact';
import notificationStore from 'stores/NotificationStore';
import { observer } from 'mobx-react-lite';
import { ReactComponent as Loading } from 'assets/img/loading.svg';

function NotificationPane(props) {
  const { classes, className } = props;

  if (notificationStore.loading) {
    return <Loading />;
  }

  return (
    <List
      className={classNames({ [classes.container]: true, [className]: true })}
    >
      {notificationStore.notifications.map((notification, index) => (
        <ListItem
          key={notification.contact.email}
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

NotificationPane.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      contact: PropTypes.instanceOf(Contact),
      type: PropTypes.oneOf(['friend-request', 'friend-request-declined'])
    })
  )
};

export default withStyles(notificationPaneStyle)(observer(NotificationPane));
