import React, { Component } from "react";
import Chat from "./Chat.js";
import base from "../base.js";

export default class App extends Component {
  state = {
    wordList: {},
    player1Name: 'TestPlayer1',
    player2Name: 'TestPlayer2',
    player1Score: 0,
    player2Score: 0
  };

  render() {
    return (
      <div>
        {/* <Score />
        <Game /> */}
        <Chat player1Name={this.state.player1Name} player2Name={this.state.player2Name} />
      </div>
    );
  }
}
