import React, { Component } from 'react';
import './App.css';
import shuffle from 'lodash.shuffle'

import Letter from './Letter'

const WORDS = ['ski', 'cri', 'lune', 'rock', 'bruit', 'radar', 'coquelicot', 'labyrinthe']
const LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const HIDDEN_LETTERS = '_'


class App extends React.Component {
  generateWord() {
    {
      let candidates = shuffle(WORDS)
      candidates = candidates.pop()
      return candidates
    }


  }

  tableOfLetters() {

    let letters = LETTERS.map((letter, index) =>
      <Letter key={index}> {letter} </Letter>
    )

    return letters

  }

  render() {

    return <div>
      <div class="handle"><h1>{this.generateWord()}</h1></div>
      <div class="letters"><p>{this.tableOfLetters()}</p></div>
    </div>

  }
}



export default App
