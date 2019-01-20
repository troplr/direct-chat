import _ from 'lodash';
import fb from 'utils/fb';
import rsa from 'utils/rsa';

class Auth {
  constructor() {
    this.expireIn = Number(process.env.REACT_APP_EXPIRE_IN_SECONDS);
    this.token = null;
    this.rsa = rsa;
  }

  getEmail() {
    return localStorage.getItem('email');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getName() {
    console.log('getName:' + this.name);
    return this.name;
  }

  getPictureUrl() {
    return this.image;
  }

  login = () => {};

  logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('expires_at');
  };

  hasValidToken = () => {
    const expireAt = Number(localStorage.getItem('expires_at'));
    const token = localStorage.getItem('token');
    const isValid = new Date().getTime() < expireAt;
    if (isValid && !token) {
      return undefined;
    }
    return isValid;
  };

  setSession = async () => {
    const cipher = await this.rsa.encrypt(this.email);
    localStorage.setItem('token', cipher);
    const expireAt = JSON.stringify(
      this.expireIn * 1000 + new Date().getTime()
    );
    localStorage.setItem('expires_at', expireAt);
    localStorage.setItem('email', this.email);
  };

  isAuthenticatedByFb = params => {
    if (!_.isEmpty(params) && params.access_token) {
      this.accessToken = params.access_token;
      return this.getFbProfile();
    }

    return new Promise(resolve => {
      resolve({ authenticated: false });
    });
  };

  getFbProfile = () => {
    return fb.getProfile(this.accessToken).then(profile => {
      if (profile.email) {
        this.setFbProfile(profile);
        return { authenticated: true };
      } else {
        return { authenticated: false };
      }
    });
  };

  setFbProfile = profile => {
    this.name = profile.name;
    this.email = profile.email;
    this.id = profile.id;
    this.image = fb.getPictureUrl(this.id);
    this.setSession();
  };

  setGoogleProfile = profile => {
    this.name = profile.getName();
    this.email = profile.getEmail();
    this.id = profile.getId();
    this.image = profile.getImageUrl();
    this.setSession();
  };
}

export default new Auth();
