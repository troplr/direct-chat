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
    padding: '0px',
    overflowX: 'hidden',
    zIndex: -1
  },
  cloudContainer: {
    paddingTop: '10vh'
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
  }
};

export default cardPageStyle;
