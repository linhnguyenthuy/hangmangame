import React, { Component } from 'react';
import './App.css';
import shuffle from 'lodash.shuffle'

import Letter from './Letter'
import WordToGuess from './WordToGuess'
import HangMan from './HangMan'
import Loose from './Loose'
import Win from './Win'


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
    return <HangMan countDown={this.getCounter()} />
  }


  tableOfLetters() {

    let letters = LETTERS.map((letter, index) =>
      <Letter key={index} letter={letter} isSelected={this.state.letters.includes(letter)} onClick={() => this.handleLetters(letter)} />
    )
    return letters
  }

  tableOfWord(isLoose, isWin) {
    let words = letterInWords.map((letterInWord, index) =>
      <WordToGuess key={index} isLoose={isLoose} isWin={isWin} countDown={this.getCounter()} letterInWord={letterInWord} feedback={this.getFeedbackForLetters(letterInWord)} />
    )
    return words
  }

  getFeedbackForLetters(letterInWord) {
    const { letters } = this.state
    const wordMatched = letters.includes(letterInWord)
    return wordMatched ? 'visible' : 'hidden';
  }
  ifIswin(letters, letterInWords) {
    const letterFound = letterInWords.filter(l => letters.includes(l))
    return letterFound.length === letterInWords.length
  }

  Restart() {
    window.location.reload(false)
  }

  render() {
    const { letters } = this.state
    const isWin = this.ifIswin(letters, letterInWords)
    const isLoose = this.getCounter() === 10

    if (isLoose === true) {
      return <div>

        <div class="guesses">{this.getCounter()}</div>
        <div class="handle"><h1>{this.tableOfWord(isLoose, isWin)}</h1></div>
        < div class="letters"><p>{this.tableOfLetters()}</p></div>
        <div className="loose"><Loose /></div>
        <div className="button"> <button
          type="button"
          onClick={() => this.Restart()}
        >Nouvelle partie?</button></div>

      </div >
    }
    if (isWin === true) {
      return <div>

        <div class="guesses">{this.getCounter()}</div>
        <div class="handle"><h1>{this.tableOfWord(isLoose, isWin)}</h1></div>
        < div class="letters"><p>{this.tableOfLetters()}</p></div>
        <div className="winner"><Win /></div>
        <div className="button"> <button type="button" onClick={() => this.Restart()}>Nouvelle partie?</button></div>

      </div >
    }
    else {
      return <div>

        <div class="guesses">{this.getCounter()}</div>
        <div class="handle"><h1>{this.tableOfWord(isLoose, isWin)}</h1></div>
        < div class="letters"><p>{this.tableOfLetters()}</p></div>
        <div>{this.CountdownOfGuess()}</div>
      </div >
    }
  }
}



export default App
