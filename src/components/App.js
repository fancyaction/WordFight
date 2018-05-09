import React, { Component } from 'react';
import Chat from './Chat.js'

export default class App extends Component {
    state = {
        wordList: {}
    }
  render() {
    return (
      <div>
        <Chat />
      </div>
    )
  }
};
