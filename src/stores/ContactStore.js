import { observable, action } from 'mobx';
import api from 'utils/api';
import messageStore from 'stores/MessageStore';
import _ from 'lodash';

class ContactStore {
  @observable myContact = null;
  @observable currentChat = null;
  @observable allContacts = [];
  @observable recentContacts = [];
  @observable loadingAllContacts = true;
  @observable loadingRecentContacts = true;

  setMyEmail(email) {
    this.myEmail = email;
  }

  getMyEmail(email) {
    return this.myEmail;
  }

  setMyName(name) {
    this.myName = name;
  }

  getMyName(name) {
    return this.myName;
  }

  fetchMyContact() {
    return this.fetchContact().then(myContact => {
      if (_.isEmpty(myContact)) {
        console.log('empty contact');
        return {};
      } else {
        console.log('myContact:' + JSON.stringify(myContact));
        this.setMyContact(myContact);
        return myContact;
      }
    });
  }

  fetchContact = () => {
    return api.fetchMyContact().then(response => {
      if (_.isEmpty(response.json)) {
        return {};
      } else {
        this.setMyContact(response.json);
        return this.myContact;
      }
    });
  };

  setMyContact(contact) {
    this.myContact = contact;
    messageStore.setCurrentSender(this.myContact.email);
  }

  fetchAllContact() {
    this.loadingAllContacts = true;
    api.fetchAllContact().then(response => {
      response.json.forEach(action(contact => this.allContacts.push(contact)));
      this.loadingAllContacts = false;
    });
  }

  fetchRecentChatContact() {
    this.loadingRecentContacts = true;
    api.fetchRecentChatContact().then(response => {
      this.setCurrentChat(response.json[0]);
      response.json.forEach(
        action(contact => this.recentContacts.push(contact))
      );
      this.loadingRecentContacts = false;
    });
  }

  setCurrentChat(contact) {
    this.currentChat = contact;
    messageStore.setCurrentReciver(contact.email);
    messageStore.setRoomId(contact.email);
  }
}

const contactStore = new ContactStore();

export default contactStore;
