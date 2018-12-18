import React from 'react';
import defaultAvatar from 'assets/img/default-avatar.svg';
import contactItemStyle from 'assets/jss/material-kit-react/contactItemStyle.jsx';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from '@material-ui/core/Button';

function ContactItem(props) {
  const { classes, name, status } = props;
  const online = status === 'online';
  const offline = status === 'away';

  return (
    <div className={classes.container}>
      <Button variant="contained" className={classes.button}>
        <img
          alt="avatar"
          src={defaultAvatar}
          className={classnames({
            [classes.avatar]: true,
            [classes.online]: online,
            [classes.offline]: offline
          })}
        />
        <div className={classes.userNameSet}>
          <div className={classes.name}>{name}</div>
          <div className={classes.status}>{status}</div>
        </div>
      </Button>
    </div>
  );
}

ContactItem.propTypes = {
  status: PropTypes.oneOf(['online', 'away'])
};

export default withStyles(contactItemStyle)(ContactItem);
