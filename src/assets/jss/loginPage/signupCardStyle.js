import { footer } from './loginCardStyle';

const textFieldMargin = '4px';
const textField = { margin: `8px ${textFieldMargin}` };

const signUpCardStyle = {
  footer,
  halfTextField: {
    width: `calc(50% - 2 * ${textFieldMargin})`,
    ...textField
  },
  textField: {
    width: '100%',
    ...textField
  },
  tooltip: {
    backgroundColor: 'black'
  },
  errorHint: {
    top: '50%',
    left: '50%',
    position: 'absolute',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.87)',
    boxShadow: '4px 6px 29px 5px rgba(255,255,255,0.75)',
    padding: '2rem',
    outline: 'none'
  }
};

export default signUpCardStyle;
