import React from "react";
import HomeWork from "..";
import { render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it('should update value LeftSide', () => {
    render(<HomeWork />)

    const inputLeft = screen.getByTestId('inputLeft');
    const inputRight = screen.getByTestId('inputRight');

    fireEvent.change(inputRight, { target: {value: 'custom'} })

    expect(inputLeft.value).toBe('custom')
})

it('should update value RightSide', () => {
    render(<HomeWork />)

    const inputRight = screen.getByTestId('inputRight');
    const inputLeft = screen.getByTestId('inputLeft');

    fireEvent.change(inputLeft, { target: {value: 'custom'} })

    expect(inputRight.value).toBe('custom')
})