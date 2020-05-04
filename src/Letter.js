import PropTypes from 'prop-types'

import React from 'react'

import './Letter.css'


const Letter = ({ letter, isSelected, onClick }) => (
    <div className="letters" onClick={onClick} style={{
        background: isSelected ? "red" : "white"
    }}>
        {letter}
    </div>
)

Letter.propTypes = {
    letters: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Letter