import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from '../Input';

describe('Input Component', () => {
  it('renders input with title and undertext', () => {
    render(
      <Input
        inputtitle="이름"
        undertext="입력하세요"
        value=""
        onChange={() => {}}
      />
    );

    expect(screen.getByText('이름')).toBeInTheDocument();
    expect(screen.getByText('입력하세요')).toBeInTheDocument();
  });

  it('shows password toggle button if isPassword is true', () => {
    render(<Input value="secret" onChange={() => {}} isPassword />);

    const buttons = screen.getAllByRole('button');

    expect(buttons.length).toBe(2);
  });

  it('clears input when cancel icon is clicked', () => {
    const handleChange = jest.fn();
    render(<Input value="hello" onChange={handleChange} />);

    const clearButton = screen.getAllByRole('button')[0];
    fireEvent.click(clearButton);
    expect(handleChange).toHaveBeenCalledWith({ target: { value: '' } });
  });

  it('toggles password visibility when icon is clicked', () => {
    render(<Input value="mypassword" onChange={() => {}} isPassword />);
    const toggleButton = screen.getAllByRole('button')[0]; // 첫 번째 버튼이 토글로 가정
    fireEvent.click(toggleButton);

    const input = screen.getByDisplayValue('mypassword') as HTMLInputElement;
    expect(input.type).toBe('text');
  });
});
