import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../Button';

describe('Button 컴포넌트', () => {
  it('주어진 텍스트를 렌더링해야 한다', () => {
    render(<Button text="클릭하세요" />);
    expect(screen.getByText('클릭하세요')).toBeInTheDocument();
  });

  it('클릭 시 onClick 콜백이 호출되어야 한다', () => {
    const handleClick = jest.fn();
    render(<Button text="눌러주세요" onClick={handleClick} />);
    fireEvent.click(screen.getByText('눌러주세요'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('기본 색상(primary)일 때 bg-purple-500 클래스를 갖는다', () => {
    render(<Button text="기본" color="primary" />);
    const btn = screen.getByRole('button', { name: '기본' });
    expect(btn).toHaveClass('bg-purple-500');
    expect(btn).toHaveClass('hover:bg-purple-600');
  });

  it('보조 색상(secondary)일 때 bg-purple-50 클래스를 갖는다', () => {
    render(<Button text="보조" color="secondary" />);
    const btn = screen.getByRole('button', { name: '보조' });
    expect(btn).toHaveClass('bg-purple-50');
    expect(btn).toHaveClass('hover:bg-purple-100');
  });

  it('disabled일 때 버튼이 비활성화되고 cursor-not-allowed 클래스를 갖는다', () => {
    render(<Button text="비활성" disabled />);
    const btn = screen.getByRole('button', { name: '비활성' });
    expect(btn).toBeDisabled();
    // primary disabled의 cursor-not-allowed
    expect(btn).toHaveClass('cursor-not-allowed');
    expect(btn).toHaveClass('bg-purple-200');
  });

  it('type 기본값은 "button"이어야 한다', () => {
    render(<Button text="테스트" />);
    const btn = screen.getByRole('button', { name: '테스트' });
    expect(btn).toHaveAttribute('type', 'button');
  });

  it('type을 "submit"으로 변경할 수 있어야 한다', () => {
    render(<Button text="전송" type="submit" />);
    const btn = screen.getByRole('button', { name: '전송' });
    expect(btn).toHaveAttribute('type', 'submit');
  });

  it('추가된 className이 함께 적용되어야 한다', () => {
    render(<Button text="커스텀" className="my-custom-class" />);
    const btn = screen.getByRole('button', { name: '커스텀' });
    expect(btn).toHaveClass('my-custom-class');
    // 기본 라운드 스타일도 남아 있어야 한다
    expect(btn).toHaveClass('rounded-2xl');
  });
});
