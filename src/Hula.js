import React from "react";
import "./Hula.css";

const Hula = ({ setScore, score, setCurrentPage, userData }) => {
  const increaseScore = () => {
    setScore(score + 1);
  };
  const endGame = () => {
    setCurrentPage("score");
  };

  return (
    <div>
      <p id="welcome--text">Welcome to the game, {userData.name}</p>
      <article id="hula--container">
        <img src={userData.avatar_url} alt="Your avatar" id="avatar" />
        <img src="./stickman.svg" alt="Stickman body" id="stickman" />
      </article>
      <article id="safe-zone">
        <img src="./hoop.svg" alt="Hula hoop" id="hula" />
      </article>
      <button onClick={increaseScore}>Increase Hula score</button>
      <button onClick={endGame}> End game</button>
      <div>{score}</div>
    </div>
  );
};
export default Hula;
