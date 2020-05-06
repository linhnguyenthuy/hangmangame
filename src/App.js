import React, { Component } from 'react';
import './App.css';
import shuffle from 'lodash.shuffle'

import Letter from './Letter'
import WordToGuess from './WordToGuess'
import HangMan from './HangMan'

const WORDS = ['ski', 'cri', 'lune', 'rock', 'bruit', 'radar', 'coquelicot', 'labyrinthe']
const LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];



const generateWord = () => {
  {
    let candidates = shuffle(WORDS)
    candidates = candidates.pop()
    return candidates
  }
}
const word = (generateWord())
const letterInWords = word.split('')


class App extends React.Component {


  state = {
    letters: []
  }


  handleLetters(letter) {
    this.setState({
      letters: [...this.state.letters, letter]
    })
  }
  getCounter() {
    const { letters } = this.state
    const guesses = letters.filter(letter => letterInWords.includes(letter))
    return letters.length - guesses.length
  }

  CountdownOfGuess() {

  }

  tableOfLetters() {

    let letters = LETTERS.map((letter, index) =>
      <Letter key={index} letter={letter} isSelected={this.state.letters.includes(letter)} onClick={() => this.handleLetters(letter)} />
    )
    return letters
  }

  tableOfWord() {
    let words = letterInWords.map((letterInWord, index) =>
      <WordToGuess key={index} letterInWord={letterInWord} feedback={this.getFeedbackForLetters(letterInWord)} />
    )
    return words
  }

  getFeedbackForLetters(letterInWord) {
    const { letters } = this.state
    const wordMatched = letters.includes(letterInWord)
    return wordMatched ? 'visible' : 'hidden';
  }


  render() {

    console.log("render")
    return <div>
      <div class="guesses">{this.getCounter()}</div>
      <div class="handle"><h1>{this.tableOfWord()}</h1></div>
      < div class="letters"><p>{this.tableOfLetters()}</p></div>
    </div >

  }
}



export default App
