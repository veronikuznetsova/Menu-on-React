import React from "react";
import Input from '..';
import { render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it('should render correct value', () => {
    render(<Input value='123' data-testid='input'/>)

    const input = screen.getByTestId('input');

    expect(input.value).toBe('123')
})

it('should update value', () => {
    const onChange = jest.fn();

    render(<Input value={123} onChange={onChange}  data-testid='input'/>)

    const input = screen.getByTestId('input');

    fireEvent.change(input, { target: {value: 'custom'} })

    expect(onChange).toBeCalledWith('custom')
})