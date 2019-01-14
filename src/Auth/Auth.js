import _ from 'lodash';
import fb from 'utils/fb.js';

class Auth {
  constructor() {
    this.expireIn = Number(process.env.REACT_APP_EXPIRE_IN_SECONDS);
  }

  getEmail() {
    return localStorage.getItem('email');
  }

  getName() {
    return this.name;
  }

  getPictureUrl() {
    return fb.getPictureUrl(this.id);
  }

  login = () => {};

  logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('expires_at');
    this.userProfile = null;
  };

  hasValidToken = () => {
    const expireAt = Number(localStorage.getItem('expires_at'));
    return new Date().getTime() < expireAt;
  };

  setSession = email => {
    const expireAt = JSON.stringify(
      this.expireIn * 1000 + new Date().getTime()
    );
    localStorage.setItem('expires_at', expireAt);
    localStorage.setItem('email', email);
  };

  isAuthenticatedByFb(params) {
    if (!_.isEmpty(params) && params.access_token) {
      this.accessToken = params.access_token;
      return this.getProfile();
    }

    return new Promise(resolve => {
      resolve({ authenticated: false });
    });
  }

  getProfile = () => {
    return fb.getProfile(this.accessToken).then(result => {
      this.name = result.name;
      this.email = result.email;
      this.id = result.id;
      if (result.email) {
        this.setSession(result.email);
        return { authenticated: true };
      } else {
        return { authenticated: false };
      }
    });
  };
}

export default Auth;
