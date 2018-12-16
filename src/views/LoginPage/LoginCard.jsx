import React, { useState } from 'react';
import Button from 'components/CustomButtons/Button.jsx';
import CardFooter from 'components/Card/CardFooter.jsx';
import { FaLock, FaEnvelope } from 'react-icons/fa';
import InputAdornment from '@material-ui/core/InputAdornment';
import CardBody from 'components/Card/CardBody.jsx';
import CustomInput from 'components/CustomInput/CustomInput.jsx';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';

function LoginCard(props) {
  const { classes } = props;
  const form = {};
  const handleInputChange = name => event => {
    form[name] = event.target.value;
    console.log(form);
  };

  const [rememberMeChecked, setRememberMe] = useState(true);

  return (
    <React.Fragment>
      <CardBody>
        <CustomInput
          labelText="Email..."
          id="email"
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            type: 'email',
            endAdornment: (
              <InputAdornment position="end">
                <FaEnvelope className={classes.inputIcons} />
              </InputAdornment>
            ),
            onChange: handleInputChange('email')
          }}
        />
        <CustomInput
          labelText="Password"
          id="pass"
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            type: 'password',
            endAdornment: (
              <InputAdornment position="end">
                <FaLock className={classes.inputIcons} />
              </InputAdornment>
            ),
            onChange: handleInputChange('password')
          }}
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
          <Button simple color="primary">
            Forget password?
          </Button>
        </Grid>
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
          Log In
        </Button>
      </CardFooter>
    </React.Fragment>
  );
}

export default LoginCard;
