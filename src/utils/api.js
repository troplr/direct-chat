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

  async api(url, body) {
    console.log('fetchJSON URL:' + url);
    body = body ? body : {};
    body = Object.assign(body, { token: auth.getToken() });
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    };

    return await this.fetchJSON(this.prefix + url, options);
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
}

export default new Api();
