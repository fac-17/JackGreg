import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import { render, cleanup, getByTitle } from "@testing-library/react"

test('it renders the footer', () => {
    const { getByText, getByTitle } = render(<Footer />);
    getByTitle('Flat Icons');
    // We can't use getByText here because... no match? Need to find why.
})
