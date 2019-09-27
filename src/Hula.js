import React from "react";
import HulaHoop from './HulaHoop'
import "./Hula.css";

const Hula = ({
  setScore,
  score,
  setCurrentPage,
  setInPlay,
  inPlay,
  userData
}) => {
  // Handle hoop position

  const [currentPosition, setPosition] = React.useState(0);
  const [tick, setTick] = React.useState(0);
  const currentStickman = () => {
    if (Math.random() > 0.7) {
      return "./stickman.svg";
    } else if (Math.random() > 0.3) {
      return "./stickmanleft.svg";
    } else {
      return "./stickmanright.svg";
    }
  };

  React.useEffect(() => {
    if (Math.random() > 0.5) {
      setPosition(position => position + 1);
    } else {
      setPosition(position => position - 1);
    }
    if (tick < 0 || currentPosition > 5 || currentPosition < -5) {
      setCurrentPage("score");
    } else if (tick > 0) {
      setScore(score => score + 1);
      setTimeout(() => {
        setTick(oldTick => oldTick + 1);
      }, 250);
    }
  }, [tick]);

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
    if (tick > 0) {
      if (event.key === "ArrowLeft") {
        moveHoopUp();
      } else if (event.key === "ArrowRight") {
        moveHoopDown();
      }
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
      <article id="hula--container">
        <img src={userData.avatar_url} alt="Your avatar" id="avatar" />
        {/* <img src={currentStickman()} alt="Stickman body" id="stickman" /> */}
        <svg
          width="153"
          height="286"
          alt="Stickman body"
          id="stickman"
          viewBox="0 0 153 286"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="75" x2="75" y2="143" stroke="black" stroke-width="20" />
          <line
            x1="74.5"
            y1="139.122"
            x2="27.5"
            y2="282.122"
            stroke="black"
            stroke-width="20"
          />
          <line
            x1="150.903"
            y1="61.875"
            x2="1.311"
            y2="45.1382"
            stroke="black"
            stroke-width="20"
          />
          <line
            x1="76.012"
            y1="143.666"
            x2="139.012"
            y2="274.666"
            stroke="black"
            stroke-width="20"
          />
        </svg>



        <article id="safe-zone">
          <HulaHoop currentPosition={currentPosition} userData={userData} />


        </article>
      </article>
      <article id="position--buttons">
        <button id="button--left" onClick={moveHoopUp}>
          LEFT
        </button>
        <button id="button--right" onClick={moveHoopDown}>
          RIGHT
        </button>
      </article>
      <button onClick={() => setTick(1)}> start game</button>
      <div>{score}</div>
    </div>
  );
};
export default Hula;
