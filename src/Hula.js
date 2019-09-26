import React from "react";
import "./Hula.css";

const Hula = ({ setScore, score, setCurrentPage, userData }) => {
  // Handle hoop position

  const [currentPosition, setPosition] = React.useState(0);

  const moveHoopUp = () => {
    setPosition(currentPosition + 1);
  };

  const moveHoopDown = () => {
    setPosition(currentPosition - 1);
  };

  // Increase Score

  const increaseScore = () => {
    setScore(score + 1);
  };

  const endGame = () => {
    setCurrentPage("score");
  };

  // Add event Listener

  const handleKeyDown = event => {
    if (event.key === "ArrowLeft") {
      moveHoopUp();
    } else if (event.key === "ArrowRight") {
      moveHoopDown();
    }
  };

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);

      // Help..?!
      clearInterval(window.interval);
    };
  }, []);

  const gameProgressChecker = () => {
    if (currentPosition > 5 || currentPosition < -5) {
      endGame();
    } else {
      increaseScore();
    }
  };

  const startGame = () => {
    window.setInterval(gameProgressChecker, 5000);
  };

  return (
    <div id="hula--body">
      <p id="welcome--text">Welcome to the game, {userData.name}</p>
      <article id="hula--container">
        <img src={userData.avatar_url} alt="Your avatar" id="avatar" />
        <img src="./stickman.svg" alt="Stickman body" id="stickman" />
      </article>
      {/* <article id="safe-zone">
        <img src="./hoop.svg" alt="Hula hoop" id="hula" />
      </article> */}
      <article id="position--buttons">
        <button id="button--left" onClick={moveHoopUp}>
          LEFT
        </button>
        <button id="button--right" onClick={moveHoopDown}>
          RIGHT
        </button>
      </article>
      <button onClick={startGame}> start game</button>
      <button onClick={increaseScore}>Increase Hula score</button>
      <button onClick={endGame}> End game</button>
      <div>{score}</div>
    </div>
  );
};
export default Hula;
