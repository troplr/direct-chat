class Auth {
  getToken() {
    return localStorage.getItem('token');
  }

  getEmail() {
    return this.getUser().email;
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user'));
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
    if (isValid && token) {
      return true;
    }
    return false;
  };

  setSession = user => {
    console.log(`setSession:${JSON.stringify(user)}`);
    localStorage.setItem('token', user.token);
    localStorage.setItem('csrf_token', user.csrf_token);
    localStorage.setItem('expires_at', user.expires_at);
    localStorage.setItem('user', JSON.stringify(user));
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
