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

  fetchMyContact(callbackWhenNoContact) {
    this.fetchContactByEmail(this.myEmail).then(myContact => {
      if (_.isEmpty(myContact)) {
        callbackWhenNoContact();
      } else {
        console.log('myContact:' + JSON.stringify(myContact));
        this.setMyContact(myContact);
      }
      messageStore.setCurrentSender(this.myEmail);
    });
  }

  fetchContactByEmail = email => {
    return api
      .fetchJSON(`/api/fetchMyContact?email=${email}`, this.fetchOptions)
      .then(response => {
        if (_.isEmpty(response.json)) {
          return {};
        } else {
          this.myContact = response.json;
          messageStore.setCurrentSender(this.myContact.email);
          return this.myContact;
        }
      });
  };

  setMyContact(contact) {
    this.myContact = contact;
  }

  fetchAllContact() {
    this.loadingAllContacts = true;
    api.fetchJSON('/api/fetchAllContact', this.fetchOptions).then(response => {
      response.json.forEach(action(contact => this.allContacts.push(contact)));
      this.loadingAllContacts = false;
    });
  }

  fetchRecentChatContact() {
    this.loadingRecentContacts = true;
    api
      .fetchJSON('/api/fetchRecentChatContact', this.fetchOptions)
      .then(response => {
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
