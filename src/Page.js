import React from 'react';

function Page() {
    const [currentPage, setCurrentPage] = React.useState('form');
    if (currentPage === 'form') {
        return (<div>I will be a Form</div>);
    }
    else if (currentPage === 'hula') {
        return (<div>I will be the gameplay page</div>);
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
