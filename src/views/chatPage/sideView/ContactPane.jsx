import React, { useState } from 'react';
import ContactItem from './ContactItem';
import TextField from '@material-ui/core/TextField';
import contactStyle from 'assets/jss/chatPage/sideView/contactStyle';
import withStyles from '@material-ui/core/styles/withStyles';
import { List, ListItem } from '@material-ui/core';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import contactStore from 'stores/ContactStore';
import { ReactComponent as Loading } from 'assets/img/loading.svg';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

function ContactPane(props) {
  const { classes, className, onContactClick } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const [globalSearch, setGlobalSearch] = useState(false);

  const handleChange = name => event => {
    let searchText = event.target.value;
    console.log(searchText);
  };

  const handleContactClick = (contact, index) => () => {
    setActiveIndex(index);
    onContactClick(contact);
    console.log(contact.name);
  };

  const handleGolbalSearchToggle = event => {
    setGlobalSearch(event.target.checked);
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
          InputProps={{
            classes: {
              root: classes.searchOutline
            }
          }}
        />
        <FormControlLabel
          control={
            <Switch
              checked={globalSearch}
              onChange={handleGolbalSearchToggle}
              value="Global"
            />
          }
          classes={{ label: classes.globalSearchLable }}
          className={classes.globalSearch}
          labelPlacement="top"
          label="Global"
        />
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
