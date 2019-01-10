import React, { useState } from 'react';
import ContactItem from './ContactItem';
import { List, ListItem } from '@material-ui/core';
import recentChatStyle from 'assets/jss/chatPage/sideView/recentChatStyle';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import contactStore from 'stores/ContactStore';
import { observer } from 'mobx-react-lite';
import { ReactComponent as Loading } from 'assets/img/loading.svg';

function RecentChat(props) {
  const { classes, className, onContactClick } = props;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleContactClick = (contact, index) => () => {
    onContactClick(contact);
    setActiveIndex(index);
    contactStore.setCurrentChat(contact);
    console.log(contact.name);
  };

  if (contactStore.loadingRecentContacts) {
    return <Loading />;
  }

  return (
    <List
      className={classNames({ [classes.container]: true, [className]: true })}
    >
      {contactStore.recentContacts.map((contact, index) => (
        <ListItem
          key={contact.email}
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

export default withStyles(recentChatStyle)(observer(RecentChat));
