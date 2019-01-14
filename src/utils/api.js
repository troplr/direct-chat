class Api {
  // usage:
  // fetchJSON(url).then(function(response) {
  //   response.status //=> 200
  //   response.headers //=> Headers
  //   response.json //=> {...}
  // })
  fetchJSON(url, options) {
    console.log('fetchJSON URL:' + url);

    return fetch(url, options).then(function(response) {
      return response.json().then(function(data) {
        return {
          status: response.status,
          headers: response.headers,
          json: data
        };
      });
    });
  }

  createNewUser(user) {
    fetch('/api/createNewUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
  }
}

export default new Api();
