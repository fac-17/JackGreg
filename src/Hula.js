import React from "react";
import "./Hula.css";

const Hula = ({ setScore, score, setCurrentPage, setInPlay, inPlay, userData }) => {
  // Handle hoop position

  const [currentPosition, setPosition] = React.useState(0);
  const [tick, setTick] = React.useState(0);

  React.useEffect(() => {
    console.log(tick);
    console.log('currpos is,', currentPosition);
    if (tick < 0 || currentPosition > 5 || currentPosition < -5) {
      setCurrentPage('score');
    }
    else if (tick > 0) {
      setScore(score => score + 1)
      setTimeout(() => {
        setTick(oldTick => oldTick + 1);
      }, 1000)
    }
  }, [tick])


  const moveHoopUp = () => {
    setPosition(oldPosition => oldPosition + 1);
  };

  const moveHoopDown = () => {
    setPosition(oldPosition => oldPosition - 1);
  };

  // Increase Score

  const increaseScore = () => {
    setScore(oldScore => oldScore + 1);

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

    };
  }, []);

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
      <button onClick={() => setTick(1)}> start game</button>
      <button onClick={increaseScore}>Increase Hula score</button>
      <button onClick={() => setTick(-1)}> End game</button>
      <div>{score}</div>
    </div>
  );
};
export default Hula;
