import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import Page from './Page'
import { render, cleanup, fireEvent } from "@testing-library/react"

test('it renders the form', () => {
    const { getByText } = render(<Form />);
    getByText('Choose');
    afterEach(cleanup);
})

test('a string can be input', () => {
    const { getByLabelText } = render(
        <Form>
        </Form>
    );
    const inputNode = getByLabelText('Username');
    fireEvent.change(inputNode, { target: { username: 'albadylic' } });
    expect(inputNode.username).toBe('albadylic');
    afterEach(cleanup);
})