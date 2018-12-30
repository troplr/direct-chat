class Api {
  // usage:
  // fetchJSON(url).then(function(response) {
  //   response.status //=> 200
  //   response.headers //=> Headers
  //   response.json //=> {...}
  // })
  fetchJSON(url, options) {
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
}

export default new Api();
