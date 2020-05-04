import PropTypes from 'prop-types'

import React from 'react'

import './Letters.css'


const Letters = (letters) => (
    <div className={letters}>
        <span className="symbol"></span>
    </div>
)

Letters.propTypes = {
    letters: PropTypes.string.isRequired,
}

export default Letters