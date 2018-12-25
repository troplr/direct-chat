import React from 'react';
import ContactItem from './ContactItem';
import TextField from '@material-ui/core/TextField';
import contactStyle from 'assets/jss/material-kit-react/contactStyle';
import withStyles from '@material-ui/core/styles/withStyles';
import { List, ListItem } from '@material-ui/core';
import classNames from 'classnames';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

function ContactPane(props) {
  const { contacts, classes, className } = props;

  const handleChange = name => event => {
    let searchText = event.target.value;
    console.log(searchText);
  };

  const handleContactClick = contact => () => {
    console.log(contact.name);
  };

  const handleAddContact = () => {
    console.log('add button clicked');
  };

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
        {contacts.map((contact, index) => (
          <ListItem
            key={index}
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
    </>
  );
}

export default withStyles(contactStyle)(ContactPane);
