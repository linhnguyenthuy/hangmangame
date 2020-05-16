import PropTypes from 'prop-types';

import React from 'react';

import './Letter.css';

const Letter = ({ letter, isSelected, onClick }) => (
  <span
    className='letter'
    onClick={onClick}
    style={{
      background: isSelected ? 'grey' : 'white',
    }}
  >
    {letter}
  </span>
);

Letter.propTypes = {
  letter: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Letter;
