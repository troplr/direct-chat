import React, { useState } from 'react';
import CardBody from 'views/components/Card/CardBody.jsx';
import TextField from '@material-ui/core/TextField';
import CardFooter from 'views/components/Card/CardFooter.jsx';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import signUpCardStyle from 'assets/jss/loginPage/signupCardStyle';
import tool from 'utils/tool';
import Tooltip from '@material-ui/core/Tooltip';
import api from 'utils/api';
import auth from 'auth/auth';
import { withRouter } from 'react-router';
import Modal from '@material-ui/core/Modal';

function SignupCard(props) {
  const { classes, history } = props;
  const [openEmailError, setOpenEmailError] = useState(false);
  const [openPasswordError, setOpenPasswordError] = useState(false);
  const [errorHintOpen, setErrorHintOpen] = useState(false);
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
    let hasError = false;
    if (!tool.validateEmail(emailInput)) {
      hasError = true;
      setOpenEmailError(true);
    }

    if (pw1Input !== pw2Input) {
      hasError = true;
      setOpenPasswordError(true);
    }

    if (!hasError) {
      console.log('valid register');
      signup(emailInput, pw1Input);
    }
  };

  const signup = async (email, pw) => {
    const response = await api.signup(email, pw);
    if (response.status === 403) {
      console.log('user already exists');
      setErrorHintOpen(true);
    } else {
      auth.setSession(response.json);
      history.replace('/');
    }
  };

  const handleErrorHintClose = () => {
    setErrorHintOpen(false);
  };

  return (
    <React.Fragment>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={errorHintOpen}
        onClose={handleErrorHintClose}
      >
        <div
          style={{ transform: 'translate(-50%, -50%)' }}
          className={classes.errorHint}
        >
          User already registered.
        </div>
      </Modal>
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

export default withRouter(withStyles(signUpCardStyle)(SignupCard));
