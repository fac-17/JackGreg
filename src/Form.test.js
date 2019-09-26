import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import { render, cleanup } from "@testing-library/react"

test('it renders the form', () => {
    const { getByText } = render(<Form />);
    getByText('Choose');
    afterEach(cleanup);
})
