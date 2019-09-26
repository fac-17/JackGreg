import React from "react";
import "./Hula.css";

const Hula = ({ setScore, score, setCurrentPage, userData }) => {
  const [currentPosition, setPosition] = React.useState(0);

  const moveHoopUp = () => {
    setPosition(currentPosition + 1);
  };

  const moveHoopDown = () => {
    setPosition(currentPosition - 1);
  };

  const increaseScore = () => {
    setScore(score + 1);
  };

  const endGame = () => {
    setCurrentPage("score");
  };

  const handleKeyDown = event => {
    if (event.key === "ArrowLeft") {
      moveHoopUp();
    } else if (event.key === "ArrowRight") {
      moveHoopDown();
    }
  };

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
      <article id="position--buttons">
        <button id="button--left" onClick={moveHoopUp}>
          LEFT
        </button>
        <button id="button--right" onClick={moveHoopDown}>
          RIGHT
        </button>
      </article>
      <button onClick={increaseScore}>Increase Hula score</button>
      <button onClick={endGame}> End game</button>
      <div>{score}</div>
    </div>
  );
};
export default Hula;
