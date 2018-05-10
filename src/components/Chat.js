import React, { Component } from "react";
import base, { firebaseApp } from "../base.js";

export default class Chat extends Component {
  state = {
    message: "",
    messages: []
  };

  // Check and update Firebase with chat
  componentDidMount() {
    const messagesRef = firebaseApp
      .database()
      .ref()
      .child("messages");

    messagesRef.on("value", snap => {
      const currentMessages = snap.val();

      if (currentMessages != null) {
        this.setState({
          messages: currentMessages
        });
      }
    });
  }

  // Output messages as list items in chat
  renderChat = (message, i) => {

    return (
      <li key={message.id}>
        {message.name}: {message.comment}
      </li>
    );
  };

  // When user presses enter, submit message to Firebase
  handleMessage = ev => {
    if (ev.keyCode === 13) {
      // NOTE: Add if statement to determine player later.
      const player1Name = this.props.player1Name;
      const player2Name = this.props.player2Name;
      const message = {
        id: this.state.messages.length,
        name: player1Name,
        comment: ev.target.value
      };

      firebaseApp
        .database()
        .ref("messages/" + message.id)
        .set(message);
    }
  };

  render() {
    // Create chatlog from messages in state
    const chatLog = this.state.messages.map(this.renderChat);

    return (
      <div>
        <ul id='chatWindow'>{chatLog}</ul>
        <div id="nameRow">
          <p>Name: <strong>{this.props.player1Name}</strong></p>
        </div>
        <div id="chatWindow" ref={this.chatWindowRef}>
          <ul id="messageList" ref={this.messageListRef} />
        </div>
        <div>
          <input
            type="text"
            id="message"
            placeholder="Enter your comment here"
            onKeyDown={this.handleMessage}
          />
        </div>
      </div>
    );
  }
}
