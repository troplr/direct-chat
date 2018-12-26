import buttonStyle from 'assets/jss/material-kit-react/components/buttonStyle';

const contactItemStyle = {
  container: {
    marginTop: '0.5rem',
    minWidth: '9rem'
  },
  avatar: {
    width: '2.5rem',
    height: '2.5rem',
    verticalAlign: 'unset'
  },
  userNameSet: {
    display: 'inline-block',
    verticalAlign: 'top',
    padding: '0.5rem'
  },
  name: {
    fontSize: '0.8rem',
    fontWeight: '500',
    userSelect: 'none'
  },
  status: {
    fontSize: '0.7rem',
    color: 'grey',
    userSelect: 'none'
  },
  online: {
    boxShadow: '0 0 4px 2px #27b56a'
  },
  offline: {
    boxShadow: '0 0 4px 2px #ceac0a'
  },
  button: {
    ...buttonStyle.button
  }
};

export default contactItemStyle;
