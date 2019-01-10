import glassBox from 'assets/jss/components/glassbox';
import buttonStyle from 'assets/jss/components/buttonStyle';

const chatRecentPaneStyle = {
  ChatRecentPaneContainer: {
    ...glassBox,
    display: 'flex',
    flexBasis: '22%',
    marginRight: '1%',
    minWidth: '19rem',
    minHeight: '25rem',
    flexDirection: 'column',
    position: 'relative'
  },
  logout: {
    ...buttonStyle.button,
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    color: 'palevioletred',
    position: 'absolute',
    top: '2.2rem',
    right: '0.5rem',
    padding: '0.2rem 0.5rem',
    borderRadius: '3px',
    '& span': {
      fontSize: 'small'
    }
  },
  button: {
    ...buttonStyle.button
  },
  avatar: {
    width: '3rem',
    height: '3rem',
    borderRadius: '5px',
    backgroundColor: 'ivory'
  },
  userStatusOnline: {
    outline: 'none',
    borderColor: 'green',
    boxShadow: '0 0 5px 3px #27b56a'
  },
  userNameSet: {
    display: 'inline-block',
    margin: '0 0.5rem',
    verticalAlign: 'top'
  },
  myName: {
    height: '1.5rem',
    fontWeight: 'bold',
    color: 'black',
    padding: '1px'
  },
  status: {
    fontSize: '0.8rem',
    color: '#676767',
    userSelect: 'none'
  },
  settingIconContainer: {
    textAlign: 'center'
  },

  tab: {
    minWidth: 'unset',
    '& svg': {
      width: '1rem',
      height: '1rem',
      color: '#1d4769'
    }
  },
  tabGroup: {
    marginTop: '0.3rem',
    flexGrow: 0
  },
  myContact: {
    flexGrow: 0
  },
  tabContent: {
    flexGrow: 1
  }
};

export default chatRecentPaneStyle;
