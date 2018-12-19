import React from 'react';
import contactItemStyle from 'assets/jss/material-kit-react/contactItemStyle';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function ContactItem(props) {
  const { classes, name, status, image } = props;
  const online = status === 'online';
  const offline = status === 'away';

  return (
    <div className={classes.container}>
      <img
        alt="avatar"
        src={image}
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
    </div>
  );
}

ContactItem.propTypes = {
  status: PropTypes.oneOf(['online', 'away'])
};

export default withStyles(contactItemStyle)(ContactItem);
