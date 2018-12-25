import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import ChatRecentPane from './ChatRecentPane';
import ChatView from './ChatView';

import cardPageStyle from 'assets/jss/material-kit-react/views/cardPage';

class ChatPage extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <>
        <div className={classes.cloudContainer}>
          <div className={classes.x2}>
            <div className={classes.cloud} />
          </div>
          <div className={classes.x3}>
            <div className={classes.cloud} />
          </div>
          <div className={classes.x4}>
            <div className={classes.cloud} />
          </div>
          <div className={classes.x5}>
            <div className={classes.cloud} />
          </div>
        </div>
        <div className={classes.body}>
          <ChatRecentPane />
          <ChatView />
        </div>
      </>
    );
  }
}

export default withStyles(cardPageStyle)(ChatPage);
