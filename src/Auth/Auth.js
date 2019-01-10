import auth0 from 'auth0-js';

class Auth {
  constructor(history) {
    this.userProfile = null;
    this.history = history;
    this.auth0 = new auth0.WebAuth({
      domain: process.env.REACT_APP_AUTH0_DOMAIN,
      clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
      redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
      responseType: 'token id_token',
      scope: 'openid profile email'
    });
  }

  login = () => {
    this.auth0.authorize();
  };

  logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.userProfile = null;
  };

  handleAuthentication = callback => {
    this.auth0.parseHash((error, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        callback();
      } else if (error) {
        callback(`User authentication failed.\n${error}`);
      }
    });
  };

  setSession = authResult => {
    const expireAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );

    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expireAt);
  };

  isAuthenticated() {
    const expireAt = Number(localStorage.getItem('expires_at'));
    return new Date().getTime() < expireAt;
  }

  getAccessToken = () => {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('No access token found');
    }
    return accessToken;
  };

  getProfile = callback => {
    if (this.userProfile) {
      callback(this.userProfile);
      return;
    }
    this.auth0.client.userInfo(this.getAccessToken(), (error, profile) => {
      if (profile) {
        this.userProfile = profile;
        callback(profile);
      }
    });
  };
}

export default Auth;
