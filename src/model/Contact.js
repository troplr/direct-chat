import PropTypes from 'prop-types';

class Contact {
  constructor(email, name, status, image) {
    this.email = email;
    this.name = name;
    this.status = status;
    this.image = image;
  }
}

Contact.propTypes = {
  status: PropTypes.oneOf(['online', 'aways'])
};
export default Contact;
