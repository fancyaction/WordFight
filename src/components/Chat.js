import React, { Component } from "react";

export default class Chat extends Component {
  nameRef = React.createRef();
  chatWindowRef = React.createRef();
  messageListRef = React.createRef();
  messageRef = React.createRef();

  render() {
    return (
      <div>
        <div id="nameRow">
          <label for="name">Name:</label>
          <input type="text" ref={this.nameRef} id="name" />
        </div>
        <div id="chatWindow" ref={this.chatWindowRef}>
          <ul id="messageList" ref={this.messageListRef} />
        </div>
        <div>
          <input
            type="text"
            ref={this.messageRef}
            id="message"
            placeholder="Something witty here..."
          />
        </div>
      </div>
    );
  }
}
