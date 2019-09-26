import React from "react";
import getUserData from "./utils/getUserData";
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
      <p>welcome to the game {userData.name}</p>
      <article id="hula--container">
        <img src={userData.avatar_url} alt="Your avatar" id="avatar" />
        <img src="./stickman.svg" alt="Stickman body" id="stickman" />
      </article>
      <button onClick={increaseScore}>Increase Hula score</button>
      <button onClick={endGame}> End game</button>
      <div>{score}</div>
    </div>
  );
};
export default Hula;
