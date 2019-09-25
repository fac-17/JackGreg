import React from 'react';

function Hula({ setScore, score, setCurrentPage }) {
    const increaseScore = () => {
        setScore(score + 1)
    }
    const endGame = () => {
        setCurrentPage('score')
    }

    return (<div>
        <p>I am the hulaa</p>
        <button onClick={increaseScore}>Increase Hula score</button>
        <button onClick={endGame}> End game</button>
        <div>{score}</div>
    </div>
    )

}
export default Hula;