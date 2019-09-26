import React from 'react';
import getUserData from './utils/getUserData';

const Hula = ({ setScore, score, setCurrentPage, userData }) => {
    const increaseScore = () => {
        setScore(score + 1)
    }
    const endGame = () => {
        setCurrentPage('score');
    }

    return (<div>
        <p>welcome to the game {userData.name}</p>
        <button onClick={increaseScore}>Increase Hula score</button>
        <button onClick={endGame}> End game</button>
        <div>{score}</div>
    </div>
    )

}
export default Hula;