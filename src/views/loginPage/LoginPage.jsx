import React, { useState, useEffect } from 'react';
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
import backGroundImage from 'assets/img/pattern.svg';
import snowEffect from 'assets/js/snow-effect';
import { withRouter } from 'react-router-dom';
import { ReactComponent as Loading } from 'assets/img/loading.svg';
import api from 'utils/api';
import auth from 'auth/auth';

function LoginPage(props) {
  const { history, classes } = props;
  const form = {};
  const [tab, setTab] = useState(0);
  const [loading, setLoading] = useState(false);

  const clientId = process.env.REACT_APP_FB_CLIENT_ID;
  const redirectUrl = process.env.REACT_APP_FB_REDIRECT;
  const fbLogin = `https://www.facebook.com/v3.2/dialog/oauth?
      client_id=${clientId}&
      redirect_uri=${redirectUrl}&
      response_type=code token granted_scopes&
      auth_type=rerequest&
      scope=public_profile,email`;

  useEffect(() => {
    snowEffect();
    window.gapi.signin2.render('g-signin2', {
      scope: 'profile email',
      width: 25,
      height: 25,
      onsuccess: onSignIn
    });
  }, []);

  const handleTabChange = (event, tab) => {
    setTab(tab);
  };

  const onSignIn = async googleUser => {
    const token = googleUser.getAuthResponse().id_token;
    if (token) {
      setLoading(true);
      try {
        const user = await api.createUserWithGoogleToken(token);
        if (user) {
          auth.setSession(user);
          history.replace('/');
        }
      } catch (error) {
        setLoading(false);
        history.replace('/login');
      }
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div
      className={classes.pageHeader}
      style={{
        backgroundImage: 'url(' + backGroundImage + ')',
        backgroundSize: '100% 100%',
        backgroundPosition: 'top center'
      }}
    >
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} md={5} className={classes.cardGridItem}>
            <Card>
              <form className={classes.form}>
                <CardHeader color="primary" className={classes.cardHeader}>
                  <h4 className={classes.title}>Direct Chat</h4>
                  <div className={classes.socialLine}>
                    <Button href={fbLogin} target="_self">
                      <IoLogoFacebook
                        className={classes.inputIcons}
                        color="#3b5998"
                      />
                    </Button>
                    <Button target="_self">
                      <div className={classes.inputIcons} id="g-signin2" />
                    </Button>
                  </div>
                </CardHeader>
                <Tabs
                  variant="fullWidth"
                  value={tab}
                  onChange={handleTabChange}
                >
                  <Tab label="Log In" />
                  <Tab label="Sign Up" />
                </Tabs>
                {tab === 0 && <LoginCard />}
                {tab === 1 && <SignupCard />}
              </form>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

export default withRouter(withStyles(loginPageStyle)(LoginPage));
