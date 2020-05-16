import React, { Component } from 'react';
import './App.css';
import shuffle from 'lodash.shuffle';

import Letter from './Letter';
import WordToGuess from './WordToGuess';
import HangMan from './HangMan';
import Loose from './Loose';
import Win from './Win';

const WORDS = ['vui ve'];
const LETTERS = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

const generateWord = () => {
  let candidates = shuffle(WORDS);
  candidates = candidates.pop();
  return candidates;
};
const word = generateWord();
const letterInWords = word.split('');

class App extends Component {
  state = {
    letters: [],
  };

  handleLetters(letter) {
    if (
      !this.ifIswin(this.state.letters, letterInWords) &&
      this.getCounter() < 10
    ) {
      this.setState({
        letters: [...this.state.letters, letter],
      });
    }
  }
  getCounter() {
    const { letters } = this.state;
    const guesses = letters.filter((letter) => letterInWords.includes(letter));
    return letters.length - guesses.length;
  }

  CountdownOfGuess() {
    return <HangMan countDown={this.getCounter()} />;
  }

  tableOfLetters() {
    let letters = LETTERS.map((letter, index) => (
      <Letter
        key={index}
        letter={letter}
        isSelected={this.state.letters.includes(letter)}
        onClick={() => this.handleLetters(letter)}
      />
    ));
    return letters;
  }

  tableOfWord(isLoose, isWin) {
    let words = letterInWords.map((letterInWord, index) => (
      <WordToGuess
        key={index}
        isLoose={isLoose}
        isWin={isWin}
        isSpace={letterInWord === ' '}
        countDown={this.getCounter()}
        letterInWord={letterInWord}
        feedback={this.getFeedbackForLetters(letterInWord)}
      />
    ));
    return words;
  }

  getFeedbackForLetters(letterInWord) {
    const { letters } = this.state;
    const wordMatched = letters.includes(letterInWord);
    return wordMatched ? 'visible' : 'hidden';
  }

  ifIswin(letters, letterInWords) {
    letterInWords = letterInWords.filter((l) => l !== ' ');
    const letterFound = letterInWords.filter((l) => letters.includes(l));
    return letterFound.length === letterInWords.length;
  }

  Restart() {
    window.location.reload(false);
  }

  render() {
    const { letters } = this.state;
    const isWin = this.ifIswin(letters, letterInWords);
    const isLoose = this.getCounter() === 10;
    let resultDisplay = null;
    const buttonRestart = (
      <div className='button-wrapper'>
        <button type='button' className='button' onClick={() => this.Restart()}>
          Nouvelle partie?
        </button>
      </div>
    );

    if (isLoose === true) {
      resultDisplay = (
        <div className='media-wrapper'>
          <Loose />
          {buttonRestart}
        </div>
      );
    } else if (isWin === true) {
      resultDisplay = (
        <div className='media-wrapper'>
          <Win />
          {buttonRestart}
        </div>
      );
    } else {
      resultDisplay = (
        <div className='media-wrapper'>{this.CountdownOfGuess()}</div>
      );
    }
    return (
      <div>
        <div className='guesses'>{this.getCounter()}</div>
        <div className='result'>{this.tableOfWord(isLoose, isWin)}</div>
        <div className='container'>
          <div className='letters'>
            <p>{this.tableOfLetters()}</p>
          </div>
          {resultDisplay}
        </div>
      </div>
    );
  }
}

export default App;
