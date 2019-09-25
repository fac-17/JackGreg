import React from 'react';
import Score from './Score';

function Page() {
    const [currentPage, setCurrentPage] = React.useState('score');
    if (currentPage === 'form') {
        return (<div>I will be a Form</div>);
    }
    else if (currentPage === 'hula') {
        return (<div>I will be the gameplay page</div>);
    }
    else if (currentPage === 'score') {
        return (< Score />);
    }
    return (
        <div className="Page">
            ...Loading...
    </div>
    );
}

export default Page;
