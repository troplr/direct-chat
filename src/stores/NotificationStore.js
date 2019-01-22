import { observable, action } from 'mobx';
import api from 'utils/api';

class NotificationStore {
  @observable notifications = [];
  @observable loading = true;

  async fetchNotifications() {
    this.loading = true;
    const response = await api.fetchNotifications();
    response.json.forEach(
      action(notification => this.notifications.push(notification))
    );
    this.loading = false;
  }
}

const notificationStore = new NotificationStore();

export default notificationStore;
