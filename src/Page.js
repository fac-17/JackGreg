import React from "react";
import Form from "./Form";

const Page = () => {
  const [currentPage, setCurrentPage] = React.useState("form");
  const [user, setUser] = React.useState("jackbridger");
  if (currentPage === "form") {
    return <Form user={user} setUser={setUser} />;
  } else if (currentPage === "hula") {
    return <div>I will be the gameplay page</div>;
  } else if (currentPage === "score") {
    return <div>I will be the score summary</div>;
  }
  return <div className="Page">...Loading...</div>;
};

export default Page;
