import React from 'react';
import './next-button.css';

const NextButton = ({ activeBtn, nextCategory }) => {

    return (
        <button onClick={nextCategory} type="button" className="btn btn-secondary" disabled={!activeBtn}>Next Level</button>
    )
}

export default NextButton;