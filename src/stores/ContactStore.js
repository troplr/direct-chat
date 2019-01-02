import { observable, action } from 'mobx';
import api from 'utils/api';
import messageStore from 'stores/MessageStore';

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
      messageStore.setCurrentSender(this.myContact.id);
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
      this.setCurrentChat(response.json[0]);
      response.json.forEach(
        action(contact => this.recentContacts.push(contact))
      );
      this.loadingRecentContacts = false;
    });
  }

  setCurrentChat(contact) {
    this.currentChat = contact;
    messageStore.setCurrentReciver(contact.id);
    messageStore.setRoomId(contact.id);
  }
}

const contactStore = new ContactStore();

export default contactStore;
