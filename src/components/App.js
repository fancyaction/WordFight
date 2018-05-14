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

  // Add Function: Create room code
  // Add Function: Button copies room code to share with player 2 (outside app)

  // Enter player name and determine if player 1 or 2
  enterName = ev => {
    const name = this.nameRef.value.value;
    if (this.state.player1Name === '') {
      this.setState({
        player1Name: name
      });
    } else {
      this.setState({
        player2Name: name
      });
    }

    // Remove name input 
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
