import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { IoLogoFacebook } from 'react-icons/io';
import GridContainer from 'views/components/Grid/GridContainer.jsx';
import GridItem from 'views/components/Grid/GridItem.jsx';
import Button from '@material-ui/core/Button';
import Card from 'views/components/Card/Card.jsx';
import CardHeader from 'views/components/Card/CardHeader.jsx';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LoginCard from './LoginCard';
import SignupCard from './SignupCard';
import loginPageStyle from 'assets/jss/loginPage/loginPage';
import image from 'assets/img/pattern.svg';
import snowEffect from 'assets/js/snow-effect';
import { withRouter } from 'react-router-dom';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardAnimaton: 'cardHidden',
      tab: 0
    };
    this.history = props.history;
    this.auth = props.auth;
    this.form = {};
    this.clientId = process.env.REACT_APP_FB_CLIENT_ID;
    this.redirectUrl = process.env.REACT_APP_FB_REDIRECT;
    this.appUrl = process.env.REACT_APP_URL;
    this.fbLogin = `https://www.facebook.com/v3.2/dialog/oauth?
      client_id=${this.clientId}&
      redirect_uri=${this.redirectUrl}&
      response_type=code token granted_scopes&
      auth_type=rerequest&
      scope=public_profile,email`;
  }
  componentDidMount() {
    setTimeout(
      function() {
        this.setState({ cardAnimaton: '' });
      }.bind(this),
      700
    );
    snowEffect();
    window.gapi.signin2.render('g-signin2', {
      scope: 'https://www.googleapis.com/auth/plus.login',
      width: 25,
      height: 25,
      onsuccess: this.onSignIn
    });
  }

  handleTabChange = (event, tab) => {
    this.setState({ tab });
  };

  removeSnow = () => {
    var element = document.getElementById('snow-canvas');
    element.parentNode.removeChild(element);
  };

  onSignIn = googleUser => {
    const profile = googleUser.getBasicProfile();
    if (profile.getEmail()) {
      this.auth.setGoogleProfile(profile);
      this.removeSnow();
      this.history.push('/');
    }
  };

  render() {
    const { classes, ...props } = this.props;
    const { tab } = this.state;

    return (
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
            <GridItem xs={12} md={5} className={classes.cardGridItem}>
              <Card className={classes[this.state.cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4 className={classes.title}>Direct Chat</h4>
                    <div className={classes.socialLine}>
                      <Button href={this.fbLogin} target="_self">
                        <IoLogoFacebook
                          className={classes.inputIcons}
                          color="#3b5998"
                        />
                      </Button>
                      <Button href={this.googleLogin} target="_self">
                        <div className={classes.inputIcons} id="g-signin2" />
                      </Button>
                    </div>
                  </CardHeader>
                  <Tabs
                    variant="fullWidth"
                    value={tab}
                    onChange={this.handleTabChange}
                  >
                    <Tab label="Log In" />
                    <Tab label="Sign Up" />
                  </Tabs>
                  {tab === 0 && <LoginCard {...props} />}
                  {tab === 1 && <SignupCard {...props} />}
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withRouter(withStyles(loginPageStyle)(LoginPage));
