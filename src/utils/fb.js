import api from 'utils/api';

class FB {
  constructor() {
    this.graphUrl =
      'https://graph.facebook.com/me?fields=email,name&access_token=';
    this.pictureUrl = 'https://graph.facebook.com/$id/picture?type=normal';
  }

  getProfile(token, callback) {
    return api.fetchJSON(this.graphUrl + token).then(response => {
      console.log(response.json);
      return response.json;
    });
  }

  getPictureUrl(id) {
    return this.pictureUrl.replace('$id', id);
  }
}

export default new FB();
