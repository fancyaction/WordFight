import React, { Component } from "react";
import { firebaseApp } from "../base.js";

export default class Chat extends Component {
  state = {
    messages: {}
  };

  nameRef = React.createRef();
  chatWindowRef = React.createRef();
  messageListRef = React.createRef();
  messageRef = React.createRef();

  renderChat = key => {
    const message = this.state.messages[key];
    // const comment = this.state.messages.comment[key];
    console.log(message.comment);
    
    return (
      <li key={key}>
        {message.name}: {message.comment}
      </li>
    );
  };

  handleMessage = ev => {
    if (ev.keyCode === 13) {

      const message = {
        name: this.nameRef.value.value,
        comment: this.messageRef.value.value
      };

      // 1. Make copy of existing state
      const messages = { ...this.state.messages };
      // 2. Add new fish to fishes variable
      messages[`message${Date.now()}`] = message;
      // 3. Set new fishes object to state
      this.setState({ messages });

      // ev.currentTarget.reset();
    }
  };

  render() {
    const chatLog = Object.keys(this.state.messages);
    console.log(chatLog);
    
    return (
      <div>
        <h1>{chatLog.map(this.renderChat)}</h1>
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
            onKeyDown={this.handleMessage}
          />
        </div>
      </div>
    );
  }
}
