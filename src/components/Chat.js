import React, { Component } from "react";
import base, { firebaseApp } from "../base.js";

export default class Chat extends Component {
  commentRef = React.createRef();
  
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
      <li className="msg" key={message.id}>
        <span id="username">
          <b>{message.name}</b>
        </span>: <span id="comment" />
        {message.comment}
      </li>
    );
  };

  // When user presses enter, submit message to Firebase
  handleMessage = ev => {
      // NOTE: Add if statement to determine player later.
      const player1Name = this.props.player1Name;
      const player2Name = this.props.player2Name;
      // console.log(player1Name, player2Name);
      
      const message = {
        id: this.state.messages.length,
        name: player1Name,
        comment: this.commentRef.value.value
      };

      firebaseApp
        .database()
        .ref("messages/" + message.id)
        .set(message);
    };

  pressEnter = ev => {
    if (ev.keyCode === 13) {
      this.handleMessage();
    }
  };

  render() {
    // Create chatlog from messages in state
    const chatLog = this.state.messages.map(this.renderChat);

    return (
      <div>
        <ul id="chatWindow">{chatLog}</ul>
        <div id="nameRow">
          <p>
            Name: <strong>{this.props.player1Name}</strong>
          </p>
        </div>
        <div id="chatWindow" ref={this.chatWindowRef}>
          <ul id="messageList" ref={this.messageListRef} />
        </div>
        <div>
          <input
            type="text"
            id="comment"
            placeholder="Enter your comment here"
            onKeyDown={this.pressEnter}
            ref={this.commentRef}
          />
          <button onClick={this.handleMessage} id="submit">
            Submit
          </button>
        </div>
      </div>
    );
  }
}
