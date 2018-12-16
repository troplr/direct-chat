import { container } from 'assets/jss/material-kit-react.jsx';

const textFieldMargin = '4px';
const textField = { margin: `8px ${textFieldMargin}` };
const signupPageStyle = {
  cardGridItem: {
    minWidth: '420px'
  },
  pageHeader: {
    height: '100vh'
  },
  container: {
    ...container,
    zIndex: '2',
    position: 'relative',
    paddingTop: '5vh',
    color: '#FFFFFF'
  },
  cardHidden: {
    opacity: '0',
    transform: 'translate3d(0, -60px, 0)'
  },
  form: {
    margin: '0'
  },
  cardHeader: {
    width: 'auto',
    textAlign: 'center',
    marginLeft: '20px',
    marginRight: '20px',
    marginTop: '-40px',
    padding: '20px 0',
    marginBottom: '15px'
  },
  socialIcons: {
    maxWidth: '24px',
    marginTop: '0',
    width: '100%',
    transform: 'none',
    left: '0',
    top: '0',
    height: '100%',
    lineHeight: '41px',
    fontSize: '20px'
  },
  divider: {
    marginTop: '30px',
    marginBottom: '0px',
    textAlign: 'center'
  },
  cardFooter: {
    paddingTop: '0rem',
    border: '0',
    borderRadius: '6px',
    justifyContent: 'center !important'
  },
  socialLine: {
    marginTop: '1rem',
    textAlign: 'center',
    padding: '0'
  },
  inputIcons: {
    color: '#495057',
    fontSize: '24px'
  },
  title: {
    fontWeight: 'bold',
    textShadow: '0 3px 0px rgba(0,0,0,0.15)'
  },
  halfTextField: {
    width: `calc(50% - 2 * ${textFieldMargin})`,
    ...textField
  },
  textField: {
    width: '100%',
    ...textField
  }
};

export default signupPageStyle;
