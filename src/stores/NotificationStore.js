import { observable, action } from 'mobx';
import api from 'utils/api';

class NotificationStore {
  @observable notifications = [];
  @observable loading = true;

  fetchNotifications() {
    this.loading = true;
    api
      .fetchJSON('/api/fetchNotifications', this.fetchOptions)
      .then(response => {
        response.json.forEach(
          action(notification => this.notifications.push(notification))
        );
        this.loading = false;
      });
  }
}

const notificationStore = new NotificationStore();

export default notificationStore;
