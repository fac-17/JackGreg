import React from 'react';

const Score = ({ score }) => {
    return (
        <div className="Score">
            Your score is {score.toString()}
        </div>
    );
}

export default Score;
