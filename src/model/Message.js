class Message {
  constructor(sender, receiver, content) {
    this.sender = sender;
    this.receiver = receiver;
    this.content = content;
    this.time = new Date();
  }
}

export default Message;
