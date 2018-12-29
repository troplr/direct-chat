import { observable } from 'mobx';

class ChatStore {
  @observable chatRooms = [];
  @observable chatMessages = [];
}

const chatStore = new ChatStore();

export default chatStore;
