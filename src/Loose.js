import PropTypes from 'prop-types'

import React from "react";


const Loose = ({ countDown, Wordguessed, letterInWord }) => (
    <div>
        {countDown === 10 && Wordguessed === letterInWord}
    </div>
)


Loose.propTypes = {
    countDown: PropTypes.number.isRequired
};


export default Loose