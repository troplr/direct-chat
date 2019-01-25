import auth from 'auth/auth';

class Api {
  constructor() {
    this.prefix = '/api/';
  }

  async fetchJSON(url, options) {
    let data = {};

    const response = await fetch(url, options);
    if (response.status >= 400) {
      const error = {
        message: `Error on ${url} with status ${response.status}`
      };
      throw error;
    }
    const text = await response.text();
    if (text) {
      data = JSON.parse(text);
    }

    return {
      status: response.status,
      headers: response.headers,
      json: data
    };
  }

  async api(method, body, withToken = true) {
    console.log('API Method:' + method);
    body = body ? body : {};
    if (withToken) {
      body = Object.assign(body, {
        token: auth.getToken(),
        email: auth.getEmail()
      });
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    };

    const response = await this.fetchJSON(this.prefix + method, options);
    return response.json;
  }

  async fetchMyContact() {
    return await this.api(`fetchMyContact`);
  }

  async fetchAllContact() {
    return await this.api('fetchAllContact');
  }

  async fetchNotifications() {
    return await this.api('fetchNotifications');
  }

  async fetchRecentChatContact() {
    return await this.api('fetchRecentChatContact');
  }

  async createNewUser(user) {
    await this.api('createNewUser', user);
  }

  async createUserWithFbToken(token) {
    return await this.api('fb/createUser', token, false);
  }

  async createUserWithGoogleToken(token) {
    return await this.api('google/createUser', token, false);
  }
}

export default new Api();
