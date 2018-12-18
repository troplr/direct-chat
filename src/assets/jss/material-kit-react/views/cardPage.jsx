const cloudPseudo = {
  background: '#fff',
  content: '""',
  position: 'absolute',
  zIndex: -1
};

const cardPageStyle = {
  body: {
    background: '#00b4ff',
    color: '#333',
    font: '100% Arial, Sans Serif',
    height: '100vh',
    margin: '0px',
    padding: '1rem',
    overflowX: 'hidden',
    position: 'relative'
  },
  cloudContainer: {
    position: 'absolute',
    paddingTop: '10vh',
    width: '100%',
    height: '90vh',
    overflow: 'hidden'
  },
  '@keyframes animateCloud': {
    '0%': {
      marginLeft: '-1000px'
    },
    '100%': {
      marginLeft: '100%'
    }
  },
  x2: {
    animation: 'animateCloud 20s linear infinite',
    transform: 'scale(0.3)'
  },
  x3: {
    animation: 'animateCloud 30s linear infinite',
    transform: 'scale(0.5)'
  },
  x4: {
    animation: 'animateCloud 18s linear infinite',
    transform: 'scale(0.4)'
  },
  x5: {
    animation: 'animateCloud 25s linear infinite',
    transform: 'scale(0.55)'
  },
  cloud: {
    background: 'linear-gradient(top,  #fff 5%,#f1f1f1 100%)',
    borderRadius: '100px',
    boxShadow: '0 8px 5px rgba(0, 0, 0, 0.1)',
    height: '120px',
    position: 'relative',
    width: '350px',
    '&:before': {
      ...cloudPseudo,
      borderRadius: '200px',
      width: '180px',
      height: '180px',
      right: '50px',
      top: '-90px'
    },
    '&:after': {
      ...cloudPseudo,
      borderRadius: '100px',
      height: '100px',
      left: '50px',
      top: '-50px',
      width: '100px'
    }
  },
  ChatRecentPaneContainer: {
    position: 'relative',
    padding: '1rem 1rem',
    background: 'hsla(0,0%,100%,.8)',
    width: '20rem',
    minHeight: '25rem',
    height: '90vh',
    boxShadow: '5px 3px 30px black',
    overflow: 'hidden',
    borderRadius: '5px'
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
  customButton: {
    padding: 'unset',
    minWidth: 'unset'
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
    marginTop: '0.3rem'
  }
};

export default cardPageStyle;
