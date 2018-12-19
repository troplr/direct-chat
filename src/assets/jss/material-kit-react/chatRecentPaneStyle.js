const chatRecentPaneStyle = {
  ChatRecentPaneContainer: {
    position: 'relative',
    padding: '1rem 1rem',
    background: 'hsla(0,0%,100%,.8)',
    width: '20rem',
    minHeight: '25rem',
    height: '90vh',
    boxShadow: '5px 3px 30px black',
    overflow: 'hidden',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column'
  },
  customButton: {
    padding: 'unset',
    minWidth: 'unset'
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
  online: {
    fontSize: '0.8rem',
    color: '#676767'
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
