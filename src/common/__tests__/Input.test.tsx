// src/common/__tests__/Input.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from '../Input';

describe('Input 컴포넌트', () => {
  it('inputtitle과 undertext가 정상적으로 렌더링된다', () => {
    render(
      <Input
        inputtitle="이름"
        undertext="이름을 입력해주세요"
        value=""
        onChange={() => {}}
      />
    );
    expect(screen.getByText('이름')).toBeInTheDocument();
    expect(screen.getByText('이름을 입력해주세요')).toBeInTheDocument();
  });

  it('undertextClassName이 적용된다', () => {
    render(
      <Input
        undertext="테스트"
        undertextClassName="text-red-500"
        value=""
        onChange={() => {}}
      />
    );
    const undertext = screen.getByText('테스트');
    expect(undertext).toHaveClass('text-red-500');
  });

  it('값이 없으면 우측 아이콘이 렌더링되지 않는다', () => {
    render(<Input value="" onChange={() => {}} />);
    // value가 빈 문자열이므로 버튼(role="button") 자체가 없어야 합니다.
    expect(screen.queryByRole('button')).toBeNull();
  });

  it('값이 있으면 클리어 아이콘만 렌더링된다', () => {
    render(<Input value="abc" onChange={() => {}} />);
    const buttons = screen.getAllByRole('button');
    // isPassword=false 이므로 클리어 버튼 하나만 존재
    expect(buttons).toHaveLength(1);
  });

  it('clear 버튼 클릭 시 onChange가 빈 문자열로 호출된다', () => {
    const handleChange = jest.fn();
    render(<Input value="hello" onChange={handleChange} />);
    const clearButton = screen.getByRole('button');
    fireEvent.click(clearButton);
    expect(handleChange).toHaveBeenCalledWith({ target: { value: '' } });
  });

  it('isPassword일 때 토글 아이콘과 클리어 아이콘이 함께 렌더링된다', () => {
    render(<Input value="123" onChange={() => {}} isPassword />);
    const buttons = screen.getAllByRole('button');
    // 토글(show/hide) + 클리어 = 2개
    expect(buttons).toHaveLength(2);
  });

  it('토글 아이콘 클릭 시 패스워드 보임/숨김이 토글된다', () => {
    render(<Input value="secret" onChange={() => {}} isPassword />);
    const [toggleButton] = screen.getAllByRole('button');
    const inputEl = screen.getByDisplayValue('secret') as HTMLInputElement;

    // 처음엔 type="password"
    expect(inputEl.type).toBe('password');

    // 클릭하면 보여줌
    fireEvent.click(toggleButton);
    expect(inputEl.type).toBe('text');

    // 다시 클릭하면 숨김
    fireEvent.click(toggleButton);
    expect(inputEl.type).toBe('password');
  });

  it('포커스 시에도 테두리가 보라색으로 변한다', () => {
    render(<Input value="" onChange={() => {}} />);
    const inputEl = screen.getByRole('textbox');
    // 초기에는 gray 테두리
    expect(inputEl).toHaveClass('border-gray-300');

    fireEvent.focus(inputEl);
    expect(inputEl).toHaveClass('border-purple-500');

    fireEvent.blur(inputEl);
    expect(inputEl).toHaveClass('border-gray-300');
  });

  it('state="writing" prop 전달 시 기본 상태에서도 보라색 테두리이다', () => {
    render(<Input value="" onChange={() => {}} state="writing" />);
    const inputEl = screen.getByRole('textbox');
    expect(inputEl).toHaveClass('border-purple-500');
  });
});
