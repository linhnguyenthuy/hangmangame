import React, { Component } from 'react';
import './App.css';
import shuffle from 'lodash.shuffle'

import Letter from './Letter'

const WORDS = ['ski', 'cri', 'lune', 'rock', 'bruit', 'radar', 'coquelicot', 'labyrinthe']
const LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const HIDDEN_LETTERS = '_'

const generateWord = () => {
  const candidates = shuffle(WORDS)
  return candidates.pop()
}

const word = generateWord();

class App extends React.Component {
  state = {
    letters: [],
  }

  handleLetterClicked(letter) {
    this.setState({
      letters: [...this.state.letters, letter]
    })
  }

  render() {
    return <div>
      <div class="handle"><h1>{word}</h1></div>
      <div class="letters"><p>{LETTERS.map((letter, index) =>
        <Letter key={index} isSelected={this.state.letters.includes(letter)} letter={letter} onClick={() => this.handleLetterClicked(letter)} />
      )}</p></div>
    </div>
  }
}



export default App
