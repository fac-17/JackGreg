import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { render, cleanup } from "@testing-library/react"

test('it renders the header', () => {
    const { getByText } = render(<Header />);
    getByText('Hula Heaven');
    afterEach(cleanup);
})
