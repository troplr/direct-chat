import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import InputAdornment from '@material-ui/core/InputAdornment';
// icons
import { FaLock, FaEnvelope } from 'react-icons/fa';
import { IoLogoFacebook, IoLogoTwitter, IoLogoGoogle } from 'react-icons/io';
// core components
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Button from 'components/CustomButtons/Button.jsx';
import Card from 'components/Card/Card.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardFooter from 'components/Card/CardFooter.jsx';
import CustomInput from 'components/CustomInput/CustomInput.jsx';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';

import loginPageStyle from 'assets/jss/material-kit-react/views/loginPage.jsx';

import image from 'assets/img/pattern.svg';
import snowEffect from 'assets/js/snow-effect';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: 'cardHidden',
      tab: 0
    };
    this.form = {};
  }

  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: '' });
      }.bind(this),
      700
    );
    snowEffect();
  }

  handleTabChange = (event, tab) => {
    this.setState({ tab });
  };

  handleInputChange = name => event => {
    this.form[name] = event.target.value;
    console.log(this.form);
  };

  render() {
    const { classes } = this.props;
    const { tab } = this.state;

    return (
      <div className={classes.root}>
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: 'url(' + image + ')',
            backgroundSize: '100% 100%',
            backgroundPosition: 'top center'
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4 className={classes.title}>Direct Chat</h4>
                      <div className={classes.socialLine}>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="twitter"
                          round
                          onClick={e => e.preventDefault()}
                        >
                          <IoLogoTwitter
                            className={classes.inputIcons}
                            color="white"
                          />
                        </Button>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="facebook"
                          round
                          onClick={e => e.preventDefault()}
                        >
                          <IoLogoFacebook
                            className={classes.inputIcons}
                            color="white"
                          />
                        </Button>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="google"
                          round
                          onClick={e => e.preventDefault()}
                        >
                          <IoLogoGoogle
                            className={classes.inputIcons}
                            color="white"
                          />{' '}
                        </Button>
                      </div>
                    </CardHeader>
                    <Tabs fullWidth value={tab} onChange={this.handleTabChange}>
                      <Tab label="Log In" />
                      <Tab label="Sign Up" />
                    </Tabs>
                    {tab === 0 && (
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
                              )
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
                              )
                            }}
                          />
                        </CardBody>
                        <CardFooter className={classes.cardFooter}>
                          <Button
                            simple
                            color="primary"
                            size="lg"
                            className={classes.title}
                          >
                            Log In
                          </Button>
                        </CardFooter>
                      </React.Fragment>
                    )}
                    {tab === 1 && (
                      <React.Fragment>
                        <CardBody>
                          <TextField
                            id="first-name"
                            label="First Name"
                            className={classes.halfTextField}
                            margin="normal"
                            onChange={this.handleInputChange('firstName')}
                          />
                          <TextField
                            id="last-name"
                            label="Last Name"
                            className={classes.halfTextField}
                            margin="normal"
                            onChange={this.handleInputChange('lastName')}
                          />
                          <TextField
                            id="email"
                            label="Email"
                            className={classes.textField}
                            margin="normal"
                            onChange={this.handleInputChange('email')}
                          />
                          <TextField
                            id="password1"
                            label="Password"
                            className={classes.textField}
                            margin="normal"
                            onChange={this.handleInputChange('password1')}
                            inputProps={{
                              type: 'password'
                            }}
                          />
                          <TextField
                            id="password2"
                            label="Password"
                            className={classes.textField}
                            margin="normal"
                            onChange={this.handleInputChange('password2')}
                            inputProps={{
                              type: 'password'
                            }}
                          />
                        </CardBody>
                        <CardFooter className={classes.cardFooter}>
                          <Button
                            simple
                            color="primary"
                            size="lg"
                            className={classes.title}
                          >
                            Sign Up{' '}
                          </Button>
                        </CardFooter>
                      </React.Fragment>
                    )}
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(LoginPage);
