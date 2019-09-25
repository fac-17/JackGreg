import React from 'react';
import Hula from './Hula';

function Page() {
    const [currentPage, setCurrentPage] = React.useState('hula');
    const [score, setScore] = React.useState(0);
    if (currentPage === 'form') {
        return (<div>I will be a Form</div>);
    }
    else if (currentPage === 'hula') {
        return (< Hula setScore={setScore} score={score} setCurrentPage={setCurrentPage} />);
    }
    else if (currentPage === 'score') {
        return (<div>I will be the score summary</div>);
    }
    return (
        <div className="Page">
            ...Loading...
    </div>
    );
}

export default Page;
