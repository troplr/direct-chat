import { observable } from 'mobx';
import Message from 'model/Message';

class MessageStore {
  //Key is room id, value is messages
  @observable messages = {};

  constructor() {
    this.sender = null;
    this.currentReceiver = null;
    this.currentRoomId = null;
  }

  addMessage(roomId, sender, receiver, message) {
    console.log(`roomId:${roomId}`);
    console.log(`sender:${sender}`);
    console.log(`receiver:${receiver}`);
    console.log(`message:${message}`);
    if (!this.messages[roomId]) {
      this.messages[roomId] = [];
    }
    this.messages[roomId].push(new Message(sender, receiver, message));
  }

  sendMessage(message) {
    this.addMessage(
      this.currentRoomId,
      this.sender,
      this.currentReceiver,
      message
    );
  }

  setCurrentReciver(receiver) {
    this.currentReceiver = receiver;
  }

  setCurrentSender(sender) {
    this.sender = sender;
  }

  setRoomId(roomId) {
    this.currentRoomId = roomId;
  }
}

const messageStore = new MessageStore();

export default messageStore;
