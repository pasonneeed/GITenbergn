import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../Button';

describe('Button', () => {
  it('renders the button with given text', () => {
    render(<Button text="Click me" />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button text="Click me" onClick={handleClick} />);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies the correct primary style when not disabled', () => {
    render(<Button text="Primary" color="primary" />);
    const button = screen.getByRole('button', { name: 'Primary' });
    expect(button).toHaveClass('bg-purple-500');
  });

  it('applies the correct secondary style when not disabled', () => {
    render(<Button text="Secondary" color="secondary" />);
    const button = screen.getByRole('button', { name: 'Secondary' });
    expect(button).toHaveClass('bg-purple-50');
  });

  it('renders disabled button correctly', () => {
    render(<Button text="Disabled" disabled />);
    const button = screen.getByRole('button', { name: 'Disabled' });
    expect(button).toBeDisabled();
    expect(button).toHaveClass('cursor-not-allowed');
  });
});
