import React from 'react';

import Hula from './Hula';


import Score from './Score';


function Page() {
    const [score, setScore] = React.useState(0);
    const [currentPage, setCurrentPage] = React.useState('form');
    if (currentPage === 'form') {
        return (<div>I will be a Form</div>);
    }
    else if (currentPage === 'hula') {
        return (< Hula setScore={setScore} score={score} setCurrentPage={setCurrentPage} />);
    }
    else if (currentPage === 'score') {
        return (< Score score={score} />);
    }
    return (
        <div className="Page">
            ...Loading...
    </div>
    );
}

export default Page;
