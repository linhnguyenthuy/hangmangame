import React, { Component } from 'react';
import './App.css';
import shuffle from 'lodash.shuffle'

import Letters from './Letters'
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
    let result = []
    const alphabet = LETTERS
    {
      const Letters = alphabet.map()
      result.push(Letters)
    }
    return result
  }




  render() {
    return <div className="handle"><h1>{this.generateWord()}</h1></div>
  }
}



export default App
