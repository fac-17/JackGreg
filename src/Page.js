import React from "react";
import Form from "./Form";
import Score from "./Score";

const Page = () => {
  const [currentPage, setCurrentPage] = React.useState("form");
  const [user, setUser] = React.useState("jackbridger");
  const [score, setScore] = React.useState(0);
  if (currentPage === "form") {
    return <Form user={user} setUser={setUser} />;
  } else if (currentPage === "hula") {
    return <div>I will be the gameplay page</div>;
  } else if (currentPage === "score") {
    return <Score score={score} />;
  }
  return <div className="Page">...Loading...</div>;
};

export default Page;
