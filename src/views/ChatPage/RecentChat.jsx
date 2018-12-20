import React from 'react';
import ContactItem from './ContactItem';
import { List, ListItem } from '@material-ui/core';
import recentChatStyle from 'assets/jss/material-kit-react/recentChatStyle';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';

function RecentChat(props) {
  const { contacts, classes, className } = props;

  const handleContactClick = contact => () => {
    console.log(contact.name);
  };

  return (
    <List
      className={classNames({ [classes.container]: true, [className]: true })}
    >
      {contacts.map((contact, index) => (
        <ListItem
          key={contact.id}
          dense
          button
          onClick={handleContactClick(contact)}
          className={classes.listItem}
        >
          <ContactItem
            name={contact.name}
            status={contact.status}
            image={contact.image}
          />
        </ListItem>
      ))}
    </List>
  );
}

export default withStyles(recentChatStyle)(RecentChat);
