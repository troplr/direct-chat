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
  }
};

export default signUpCardStyle;
