import PropTypes from 'prop-types'

import React from "react";

import './WordToGuess.css'

const HIDDEN_LETTERS = '_ '


const WordToGuess = ({ isLoose, letterInWord, feedback, isWin }) => (

    <div className={`handle ${feedback}`} style={{ color: isLoose ? "red" : "black" }} style={{ color: isWin ? "blue" : "black" }} >
        {(feedback === 'hidden' && !isLoose) ? HIDDEN_LETTERS : letterInWord}
    </div>
)

WordToGuess.propTypes = {
    letterInWord: PropTypes.string.isRequired,
}

export default WordToGuess