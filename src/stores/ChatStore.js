import { observable, action } from 'mobx';
import api from 'utils/api';

class ChatStore {
  @observable currentChat = null;
  @observable chatRooms = [];
  @observable chatMessages = [];
  @observable allContacts = [];
  @observable recentContacts = [];
  @observable loadingAllContacts = true;
  @observable loadingRecentContacts = true;

  fetchAllContact() {
    this.loadingAllContacts = true;
    api.fetchJSON('/api/fetchAllContact').then(response => {
      response.json.forEach(action(contact => this.allContacts.push(contact)));
      this.loadingAllContacts = false;
    });
  }

  fetchRecentChatContact() {
    this.loadingRecentContacts = true;
    api.fetchJSON('/api/fetchRecentChatContact').then(response => {
      this.currentChat = response.json[0];
      response.json.forEach(
        action(contact => this.recentContacts.push(contact))
      );
      this.loadingRecentContacts = false;
    });
  }
}

const chatStore = new ChatStore();

export default chatStore;
