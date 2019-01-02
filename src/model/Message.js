class Message {
  constructor(sender, receiver, message) {
    this.sender = sender;
    this.receiver = receiver;
    this.message = message;
    this.time = new Date();
  }
}

export default Message;
