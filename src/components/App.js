import React, { Component } from "react";
import Chat from "./Chat.js";
import base from "../base.js";

export default class App extends Component {
  state = {
    wordList: {}
  };
  render() {
    return (
      <div>
        <Chat />
      </div>
    );
  }
}
