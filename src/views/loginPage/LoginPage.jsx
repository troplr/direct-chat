import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// icons
import { IoLogoFacebook, IoLogoTwitter, IoLogoGoogle } from 'react-icons/io';
// core components
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

  render() {
    const { classes } = this.props;
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
                      <Button
                        href="#pablo"
                        target="_blank"
                        onClick={e => e.preventDefault()}
                      >
                        <IoLogoTwitter
                          className={classes.inputIcons}
                          color="white"
                        />
                      </Button>
                      <Button
                        href="#pablo"
                        target="_blank"
                        onClick={e => e.preventDefault()}
                      >
                        <IoLogoFacebook
                          className={classes.inputIcons}
                          color="white"
                        />
                      </Button>
                      <Button
                        href="#pablo"
                        target="_blank"
                        onClick={e => e.preventDefault()}
                      >
                        <IoLogoGoogle
                          className={classes.inputIcons}
                          color="white"
                        />{' '}
                      </Button>
                    </div>
                  </CardHeader>
                  <Tabs value={tab} onChange={this.handleTabChange}>
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
}

export default withStyles(loginPageStyle)(LoginPage);
