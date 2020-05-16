import PropTypes from 'prop-types';
import classnames from 'classnames';

import React from 'react';

import './WordToGuess.css';

const WordToGuess = ({ isLoose, letterInWord, feedback, isWin, isSpace }) => {
  const classes = classnames(`result__character ${feedback}`, {
    'no-border': isSpace || isLoose,
    win: isWin,
    loose: isLoose,
  });
  return (
    <div className={classes}>
      {feedback === 'hidden' && !isLoose ? '' : letterInWord}
    </div>
  );
};

WordToGuess.propTypes = {
  letterInWord: PropTypes.string.isRequired,
};

export default WordToGuess;
