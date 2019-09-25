import React from 'react';
import Hula from './Hula';
import Score from './Score';
import Form from "./Form";

const Page = () => {
    const [currentPage, setCurrentPage] = React.useState("hula");
    const [user, setUser] = React.useState("jackbridger");
    const [score, setScore] = React.useState(0);
    if (currentPage === "form") {
        return <Form user={user} setUser={setUser} />;
    } else if (currentPage === 'hula') {
        return (< Hula setScore={setScore} score={score} setCurrentPage={setCurrentPage} />);
    }
    else if (currentPage === 'score') {
        return (< Score score={score} />);
    }
    return <div className="Page">...Loading...</div>;
};


export default Page;
