import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CardFooter from 'views/components/Card/CardFooter.jsx';
import CardBody from 'views/components/Card/CardBody.jsx';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import loginCardStyle from 'assets/jss/loginPage/loginCardStyle';
import auth from 'auth/auth';
import api from 'utils/api';
import { withRouter } from 'react-router';

function LoginCard(props) {
  const { classes, history } = props;
  const [rememberMeChecked, setRememberMe] = useState(true);
  const form = {};

  const handleInputChange = name => event => {
    form[name] = event.target.value;
    console.log(form);
  };

  const signin = async event => {
    const user = await api.signin(form.email, form.pw);
    auth.setSession(user);
    history.replace('/');
  };

  return (
    <React.Fragment>
      <CardBody>
        <TextField
          id="email"
          label="Email"
          margin="normal"
          fullWidth
          onChange={handleInputChange('email')}
        />
        <TextField
          id="pass"
          label="Password"
          type="password"
          autoComplete="current-password"
          margin="normal"
          fullWidth
          onChange={handleInputChange('pw')}
        />
        <Grid container direction="row" justify="center" alignItems="center">
          <FormControlLabel
            control={
              <Checkbox
                checked={rememberMeChecked}
                onChange={() => setRememberMe(!rememberMeChecked)}
              />
            }
            label="Remember me"
          />
          <Button color="primary">Forget password?</Button>
        </Grid>
      </CardBody>
      <CardFooter className={classes.footer}>
        <Button
          variant="contained"
          color="primary"
          onClick={signin}
          className={classes.button}
        >
          Log In
        </Button>
      </CardFooter>
    </React.Fragment>
  );
}

export default withRouter(withStyles(loginCardStyle)(LoginCard));
