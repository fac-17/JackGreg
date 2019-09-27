import React from "react";
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
      if (userData.name === "Oliver") {
        setScore(score => score + 100);
      }
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
          <svg
            width="265"
            height="41"
            alt="Hula hoop"
            id="hula"
            className={`hoop hoopPosition${currentPosition}`}
            viewBox="0 0 265 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M263 20.5C263 20.9768 262.683 21.8405 261.102 23.0361C259.565 24.1979 257.173 25.404 253.9 26.6012C247.378 28.9872 237.826 31.1719 225.886 33.0192C202.037 36.709 169.019 39 132.5 39C95.9808 39 62.9628 36.709 39.1141 33.0192C27.1742 31.1719 17.6223 28.9872 11.0996 26.6012C7.82659 25.404 5.43466 24.1979 3.89813 23.0361C2.3168 21.8405 2 20.9768 2 20.5C2 20.0232 2.3168 19.1595 3.89813 17.9639C5.43466 16.8021 7.82659 15.596 11.0996 14.3988C17.6223 12.0128 27.1742 9.82811 39.1141 7.98079C62.9628 4.291 95.9808 2 132.5 2C169.019 2 202.037 4.291 225.886 7.98079C237.826 9.82811 247.378 12.0128 253.9 14.3988C257.173 15.596 259.565 16.8021 261.102 17.9639C262.683 19.1595 263 20.0232 263 20.5Z"
              stroke="#3EBD2A"
              stroke-width="4"
            />
          </svg>
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
