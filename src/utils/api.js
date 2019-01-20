import auth from 'auth/auth';

class Api {
  constructor() {
    this.prefix = '/api/';
  }

  async fetchJSON(url, options) {
    try {
      const response = await fetch(url, options);
      const text = await response.text();
      let data = {};
      if (text) {
        data = JSON.parse(text);
      }
      return {
        status: response.status,
        headers: response.headers,
        json: data
      };
    } catch (err) {
      console.log(err);
    }
  }

  api(url, body) {
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

    return this.fetchJSON(this.prefix + url, options);
  }

  fetchMyContact() {
    return this.api(`fetchMyContact`);
  }

  fetchAllContact() {
    return this.api('fetchAllContact');
  }

  fetchNotifications() {
    return this.api('fetchNotifications');
  }

  fetchRecentChatContact() {
    return this.api('fetchRecentChatContact');
  }

  createNewUser(user) {
    this.api('createNewUser', user);
  }
}

export default new Api();
