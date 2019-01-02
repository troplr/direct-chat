import React, { useState } from 'react';
import ContactItem from './ContactItem';
import TextField from '@material-ui/core/TextField';
import contactStyle from 'assets/jss/chatPage/sideView/contactStyle';
import withStyles from '@material-ui/core/styles/withStyles';
import { List, ListItem } from '@material-ui/core';
import classNames from 'classnames';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import { FaPlusCircle as AddIcon } from 'react-icons/fa';
import { observer } from 'mobx-react-lite';
import contactStore from 'stores/ContactStore';
import { ReactComponent as Loading } from 'assets/img/loading.svg';

function ContactPane(props) {
  const { classes, className, onContactClick } = props;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleChange = name => event => {
    let searchText = event.target.value;
    console.log(searchText);
  };

  const handleContactClick = (contact, index) => () => {
    setActiveIndex(index);
    onContactClick(contact);
    console.log(contact.name);
  };

  const handleAddContact = () => {
    console.log('add button clicked');
  };

  if (contactStore.loadingAllContacts) {
    return <Loading />;
  }

  return (
    <>
      <div className={classes.searchAndAddContact}>
        <TextField
          id="outlined-search"
          label="Search"
          type="search"
          className={classes.search}
          onChange={handleChange('search')}
        />
        <Zoom
          key="primary"
          in={true}
          timeout={{ enter: 300, exit: 300 }}
          unmountOnExit
        >
          <Fab
            size="small"
            className={classes.addContactButton}
            onClick={handleAddContact}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </div>
      <List
        dense
        className={classNames({ [classes.container]: true, [className]: true })}
      >
        {contactStore.allContacts.map((contact, index) => (
          <ListItem
            key={index}
            selected={activeIndex === index}
            button
            onClick={handleContactClick(contact, index)}
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
    </>
  );
}

export default withStyles(contactStyle)(observer(ContactPane));
