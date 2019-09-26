import React from 'react';
import "./Score.css";

const Score = ({ score, userData }) => {
    return (
        <div className="Score">
            <h1>Your score is {score.toString()}</h1>
            <img id="avatar" src={userData.avatar_url} />
            <img src="./finalhula.png" />
        </div>
    );
}

export default Score;
