import React from 'react';
import ContactItem from './ContactItem';
import TextField from '@material-ui/core/TextField';
import contactStyle from 'assets/jss/material-kit-react/contactStyle';
import withStyles from '@material-ui/core/styles/withStyles';
import { List, ListItem } from '@material-ui/core';
import classNames from 'classnames';

function ContactPane(props) {
  const { contacts, classes, className } = props;

  const handleChange = name => event => {
    let searchText = event.target.value;
    console.log(searchText);
  };

  const handleContactClick = contact => () => {
    console.log(contact.name);
  };

  return (
    <React.Fragment>
      <TextField
        id="outlined-search"
        label="Search"
        type="search"
        className={classes.search}
        onChange={handleChange('search')}
      />
      <List
        className={classNames({ [classes.container]: true, [className]: true })}
      >
        {contacts.map((contact, index) => (
          <ListItem
            key={index}
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
    </React.Fragment>
  );
}

export default withStyles(contactStyle)(ContactPane);
