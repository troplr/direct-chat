import React from 'react';
import CardBody from 'views/components/Card/CardBody.jsx';
import TextField from '@material-ui/core/TextField';
import CardFooter from 'views/components/Card/CardFooter.jsx';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import signUpCardStyle from 'assets/jss/loginPage/signupCardStyle';

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
          id="email"
          label="Email"
          fullWidth
          margin="normal"
          onChange={handleInputChange('email')}
        />
        <TextField
          id="password1"
          label="Password"
          fullWidth
          margin="normal"
          onChange={handleInputChange('password1')}
          inputProps={{
            type: 'password'
          }}
        />
        <TextField
          id="password2"
          label="Password"
          fullWidth
          margin="normal"
          onChange={handleInputChange('password2')}
          inputProps={{
            type: 'password'
          }}
        />
      </CardBody>
      <CardFooter className={classes.footer}>
        <Button
          variant="contained"
          color="primary"
          onClick={e => e.preventDefault()}
          className={classes.button}
        >
          Sign Up
        </Button>
      </CardFooter>
    </React.Fragment>
  );
}

export default withStyles(signUpCardStyle)(SignupCard);
