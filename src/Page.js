import React from 'react';
import Score from './Score';

function Page() {
    const [currentPage, setCurrentPage] = React.useState('score');
    const [score, setScore] = React.useState(0);
    if (currentPage === 'form') {
        return (<div>I will be a Form</div>);
    }
    else if (currentPage === 'hula') {
        return (<div>I will be the gameplay page</div>);
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
