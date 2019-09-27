import React from "react";
import Hula from "./Hula";
import Score from "./Score";
import Form from "./Form";

const Page = () => {
  const [currentPage, setCurrentPage] = React.useState("form");
  const [userData, setUserData] = React.useState({
    name: "Jack",
    avatar_url: ""
  });
  const [username, setUsername] = React.useState("jackbridger");
  const [score, setScore] = React.useState(0);
  const [inPlay, setInPlay] = React.useState(false);
  if (currentPage === "form") {
    return (
      <Form
        username={username}
        setUsername={setUsername}
        userData={userData}
        setUserData={setUserData}
        setCurrentPage={setCurrentPage}
      />
    );
  } else if (currentPage === "hula") {
    return (
      <Hula
        setScore={setScore}
        score={score}
        inPlay={inPlay}
        setInPlay={setInPlay}
        setCurrentPage={setCurrentPage}
        userData={userData}
      />
    );
  } else if (currentPage === "score") {
    return (
      <Score
        userData={userData}
        score={score}
        setCurrentPage={setCurrentPage}
      />
    );
  }
  return <div className="Page">...Loading...</div>;
};

export default Page;
