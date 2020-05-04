import PropTypes from 'prop-types'

import React from 'react'

import './Letter.css'


const Letter = ({ letter, index, states, onClick }) => (

    <div className="letters" onClick={() => onClick(index)}>
        {letter}
    </div>
)

Letter.propTypes = {
    letters: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Letter