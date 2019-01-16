import React, { useState } from 'react';
import CardBody from 'views/components/Card/CardBody.jsx';
import TextField from '@material-ui/core/TextField';
import CardFooter from 'views/components/Card/CardFooter.jsx';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import signUpCardStyle from 'assets/jss/loginPage/signupCardStyle';
import tool from 'utils/tool';
import Tooltip from '@material-ui/core/Tooltip';

function SignupCard(props) {
  const { classes } = props;
  const [openEmailError, setOpenEmailError] = useState(false);
  const [openPasswordError, setOpenPasswordError] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [pw1Input, setPw1] = useState('');
  const [pw2Input, setPw2] = useState('');

  const handleInputChange = name => event => {
    const value = event.target.value;
    if (name === 'email') {
      setEmailInput(value);
      if (openEmailError) {
        setOpenEmailError(false);
      }
    } else {
      if (openPasswordError) {
        setOpenPasswordError(false);
      }
      if (name === 'pw1') {
        setPw1(value);
      } else if (name === 'pw2') {
        setPw2(value);
      }
    }
  };

  const handleSignUp = event => {
    event.preventDefault();
    if (!tool.validateEmail(emailInput)) {
      setOpenEmailError(true);
    }

    if (pw1Input !== pw2Input) {
      setOpenPasswordError(true);
    }

    if (!openEmailError && !openPasswordError) {
      console.log('valid register');
    }
  };

  return (
    <React.Fragment>
      <CardBody>
        <ErrorHint
          classes={classes}
          open={openEmailError}
          errorMessage="Invalid Email"
        >
          <TextField
            id="email"
            label="Email"
            fullWidth
            margin="normal"
            onChange={handleInputChange('email')}
          />
        </ErrorHint>
        <ErrorHint
          classes={classes}
          open={openPasswordError}
          errorMessage="Passwords are different"
        >
          <TextField
            id="password1"
            label="Password"
            fullWidth
            margin="normal"
            onChange={handleInputChange('pw1')}
            inputProps={{
              type: 'password'
            }}
          />
        </ErrorHint>

        <TextField
          id="password2"
          label="Password"
          fullWidth
          margin="normal"
          onChange={handleInputChange('pw2')}
          inputProps={{
            type: 'password'
          }}
        />
      </CardBody>
      <CardFooter className={classes.footer}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSignUp}
          className={classes.button}
        >
          Sign Up
        </Button>
      </CardFooter>
    </React.Fragment>
  );
}

function ErrorHint(props) {
  const { children, classes, errorMessage, open } = props;
  return (
    <Tooltip
      open={open}
      title={
        <React.Fragment>
          {errorMessage}
          <span className={classes.arrow} />
        </React.Fragment>
      }
      classes={{
        tooltip: classes.tooltip
      }}
    >
      {children}
    </Tooltip>
  );
}

export default withStyles(signUpCardStyle)(SignupCard);
