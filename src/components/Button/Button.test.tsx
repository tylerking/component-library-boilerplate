import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';

describe('Button Component', () => {
  it('renders correctly with the given label', () => {
    const { getByText } = render(<Button color='red' label='Click Me' />);
    expect(getByText('Click Me')).toBeInTheDocument();
  });

  it('applies the correct class based on the size', () => {
    const { container } = render(<Button color='red' label='Click Me' size='large' />);
    expect(container.firstChild).toHaveClass('button--large');
  });

  it('applies the correct color based on the color prop', () => {
    const { container } = render(<Button color='green' label='Click Me' />);
    expect(container.firstChild).toHaveClass('color--green');
  });

  it('triggers the onClick function when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button color='blue' label='Click Me' onClick={handleClick} />);
    fireEvent.click(getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
