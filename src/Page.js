import React from "react";
import Form from "./Form";

const Page = () => {
  const [currentPage, setCurrentPage] = React.useState("form");
  if (currentPage === "form") {
    return <Form />;
  } else if (currentPage === "hula") {
    return <div>I will be the gameplay page</div>;
  } else if (currentPage === "score") {
    return <div>I will be the score summary</div>;
  }
  return <div className="Page">...Loading...</div>;
};

export default Page;
