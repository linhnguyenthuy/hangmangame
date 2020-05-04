import PropTypes from 'prop-types'

import React from 'react'

import './Letter.css'


const Letter = (props) => (
    <div className="letters">
        {props.children}
    </div>
)

Letter.propTypes = {
    letters: PropTypes.string.isRequired,
}

export default Letter