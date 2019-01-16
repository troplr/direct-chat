const inputPane = {
  container: {},
  inputPane: {
    flexGrow: 0
  },
  textArea: {
    height: '5rem'
  },
  input: {
    padding: '10px'
  },
  toolPane: {
    margin: '0.5rem 0',
    background: 'transparent',
    '& svg': {
      width: '1.5rem',
      height: '1.5rem',
      color: 'rgba(0, 0, 0, 0.7)'
    },
    '& button': {
      minWidth: 'unset',
      minHeight: 'unset',
      padding: '0 0.5rem'
    },
    '& button svg:hover': {
      color: '#5555d6'
    }
  }
};

export default inputPane;
