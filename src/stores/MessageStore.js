import { observable, action } from 'mobx';
import Message from 'model/Message';

class MessageStore {
  //Key is room id, value is messages
  @observable messages = {};

  constructor() {
    this.messages[1] = [];

    this.messages[1].push(new Message(1, 0, 'content text from bot to me'));
    this.messages[2] = [];
    this.messages[1].push(new Message(0, 1, 'content text from me to bot'));
    this.messages[2].push(new Message(0, 1, 'content text from me to bot'));
  }

  addMessage(roomId, sender, receiver, content) {
    action(() => {
      if (!this.messages[roomId]) {
        this.messages[roomId] = [];
      }
      this.messages[roomId].push(new Message(sender, receiver, content));
    });
  }
}

const messageStore = new MessageStore();

export default messageStore;
