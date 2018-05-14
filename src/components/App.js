import React, { Component } from "react";
import Chat from "./Chat.js";
import Score from "./Score.js";
import Game from "./Game.js";
import base from "../base.js";

export default class App extends Component {
  nameRef = React.createRef()
  
  state = {
    roomId: '',
    wordList: {},
    player1Name: "",
    player2Name: "",
    player1Score: 0,
    player2Score: 0
  };

  enterName = ev => {
    const name = this.nameRef.value.value;
    this.setState({
      player1Name: name
    });

    document.getElementById('playerNameField').remove();
    document.getElementById('nameBut').remove();
    }

  render() {
    return (
      <div>
        <div>
          <input type="text" id="playerNameField" ref={this.nameRef} placeholder='Enter username'/>
          <button id='nameBut' onClick={this.enterName}>Enter Name</button>
          
        </div>
        <Score />
        <Game />
        <Chat
          player1Name={this.state.player1Name}
          player2Name={this.state.player2Name}
        />
      </div>
    );
  }
}
