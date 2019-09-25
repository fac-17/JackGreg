import React from 'react';
import Hula from './Hula';

function Page() {
    const [currentPage, setCurrentPage] = React.useState('form');
    if (currentPage === 'form') {
        return (<div>I will be a Form</div>);
    }
    else if (currentPage === 'hula') {
        return (< Hula />);
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
