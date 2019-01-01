import { observable, action } from 'mobx';
import api from 'utils/api';

class ContactStore {
  @observable myContact = null;
  @observable currentChat = null;
  @observable allContacts = [];
  @observable recentContacts = [];
  @observable loadingAllContacts = true;
  @observable loadingRecentContacts = true;

  fetchMyContact() {
    api.fetchJSON('/api/fetchMyContact').then(response => {
      this.myContact = response.json;
    });
  }

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

  setCurrentChat(contact) {
    action(() => (this.currentChat = contact));
  }
}

const contactStore = new ContactStore();

export default contactStore;
