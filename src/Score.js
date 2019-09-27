import React from "react";
import "./Score.css";

const Score = ({ score, userData }) => {
  return (
    <div className="Score">
      <h2>
        Congratulations, {userData.name}! Your score is {score.toString()}!
      </h2>
      <article id="score--container">
        <img src={userData.avatar_url} alt="Your avatar" id="avatar" />
        <img src="./finalhula.svg" alt="Stickman body" id="finalstickman" />
      </article>
    </div>
  );
};

export default Score;
