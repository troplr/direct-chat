import React from 'react';
import CardBody from 'components/Card/CardBody.jsx';
import TextField from '@material-ui/core/TextField';
import CardFooter from 'components/Card/CardFooter.jsx';
import Button from 'components/CustomButtons/Button.jsx';

function SignupCard(props) {
  const { classes } = props;
  const form = {};
  const handleInputChange = name => event => {
    form[name] = event.target.value;
    console.log(form);
  };

  return (
    <React.Fragment>
      <CardBody>
        <TextField
          id="first-name"
          label="First Name"
          className={classes.halfTextField}
          margin="normal"
          onChange={handleInputChange('firstName')}
        />
        <TextField
          id="last-name"
          label="Last Name"
          className={classes.halfTextField}
          margin="normal"
          onChange={handleInputChange('lastName')}
        />
        <TextField
          id="email"
          label="Email"
          className={classes.textField}
          margin="normal"
          onChange={handleInputChange('email')}
        />
        <TextField
          id="password1"
          label="Password"
          className={classes.textField}
          margin="normal"
          onChange={handleInputChange('password1')}
          inputProps={{
            type: 'password'
          }}
        />
        <TextField
          id="password2"
          label="Password"
          className={classes.textField}
          margin="normal"
          onChange={handleInputChange('password2')}
          inputProps={{
            type: 'password'
          }}
        />
      </CardBody>
      <CardFooter className={classes.cardFooter}>
        <Button
          variant="contained"
          href="#"
          target="_blank"
          color="twitter"
          onClick={e => e.preventDefault()}
          className={classes.title}
        >
          Sign Up
        </Button>
      </CardFooter>
    </React.Fragment>
  );
}

export default SignupCard;
