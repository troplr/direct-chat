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

  fetchMyContact(auth) {
    auth.getProfile((profile, error) => {
      if (profile) {
        this.fetchContactByEmail(profile.email).then(myContact => {
          if (_.isEmpty(myContact)) {
            this.setMyContact(profile);
            messageStore.setCurrentSender(this.myContact.email);
          }
        });
      } else {
        window.location.href = '/error';
      }
    });
  }

  fetchContactByEmail = email => {
    return api
      .fetchJSON(`/api/fetchMyContact?email=${email}`)
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

  setMyContact(profile) {
    this.myContact = {
      name: profile.nickname,
      image: profile.picture,
      email: profile.email
    };
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
    messageStore.setCurrentReciver(contact.email);
    messageStore.setRoomId(contact.email);
  }
}

const contactStore = new ContactStore();

export default contactStore;
