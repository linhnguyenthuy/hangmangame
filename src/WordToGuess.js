import PropTypes from 'prop-types'

import React from "react";

import './WordToGuess.css'

const HIDDEN_LETTERS = '_ '


const WordToGuess = ({ letterInWord, feedback }) => (

    <div className={`handle ${feedback}`}>
        {feedback === 'hidden' ? HIDDEN_LETTERS : letterInWord}
    </div>
)


WordToGuess.propTypes = {
    letterInWord: PropTypes.string.isRequired,
}

export default WordToGuess