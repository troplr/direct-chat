import React from 'react';
import ContactItem from './ContactItem';
import TextField from '@material-ui/core/TextField';
import contactStyle from 'assets/jss/material-kit-react/contactStyle.jsx';
import withStyles from '@material-ui/core/styles/withStyles';

function Contact(props) {
  const { classes } = props;
  let searchText = '';
  const handleChange = name => event => {
    searchText = event.target.value;
    console.log(searchText);
  };

  return (
    <div>
      <div>
        <TextField
          id="outlined-search"
          label="Search"
          type="search"
          className={classes.search}
          onChange={handleChange('search')}
        />
      </div>
      <div>
        <ContactItem name="Jimi Lin" status="online" />
        <ContactItem name="Susan Jiang" status="away" />
        <ContactItem name="Winifred Wang" status="online" />
      </div>
    </div>
  );
}

export default withStyles(contactStyle)(Contact);
