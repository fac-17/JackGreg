import React from "react";
import "./Score.css";

const Score = ({ score, userData, setCurrentPage }) => {
  return (
    <div className="Score">
      <h2>
        Congratulations, {userData.name}! Your score is {score.toString()}!
      </h2>
      <article id="score--container">
        <img src={userData.avatar_url} alt="Your avatar" id="avatar" />
        <img src="./finalhula.svg" alt="Stickman body" id="finalstickman" />
      </article>
      <button onClick={() => setCurrentPage("hula")}>Back</button>
    </div>
  );
};

export default Score;
