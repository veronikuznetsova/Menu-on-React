import React from "react";
import Counter from "..";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it('should have default value as 0', () => {
    render(<Counter>0</Counter>);

    const countElement = screen.getByText(/count/i)

    // expect(countElement).toBeInTheDocument();
    expect(countElement).toHaveTextContent('count 0');
})

it('should increment value', () => {
    render(<Counter>0</Counter>);

    const countElement = screen.getByText(/count/i)
    const plusElement = screen.getByText(/plus/i)

    fireEvent.click(plusElement);

    expect(countElement).toHaveTextContent('count 1');
})

it('should deccrement value', () => {
    render(<Counter>2</Counter>);

    const countElement = screen.getByText(/count/i)
    const minusElement = screen.getByText(/minus/i)

    fireEvent.click(minusElement);

    // expect(countElement).toHaveTextContent('count -1');
    expect(countElement).toHaveTextContent('count 1');
})