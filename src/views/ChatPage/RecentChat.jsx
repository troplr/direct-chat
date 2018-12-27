import React, { useState } from 'react';
import ContactItem from './ContactItem';
import { List, ListItem } from '@material-ui/core';
import recentChatStyle from 'assets/jss/material-kit-react/recentChatStyle';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';

function RecentChat(props) {
  const { contacts, classes, className, onContactClick } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const handleContactClick = (contact, index) => () => {
    onContactClick(contact);
    setActiveIndex(index);
    console.log(contact.name);
  };

  return (
    <List
      className={classNames({ [classes.container]: true, [className]: true })}
    >
      {contacts.map((contact, index) => (
        <ListItem
          key={contact.id}
          selected={activeIndex === index}
          dense
          button
          onClick={handleContactClick(contact, index)}
          className={classes.listItem}
        >
          <ContactItem
            name={contact.name}
            status={contact.status}
            image={contact.image}
            active={contact.isActive}
          />
        </ListItem>
      ))}
    </List>
  );
}

export default withStyles(recentChatStyle)(RecentChat);
