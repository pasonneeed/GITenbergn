import { render, screen, fireEvent } from '@testing-library/react';
import Card from '../Card';

describe('Card 컴포넌트', () => {
  const defaultProps = {
    title: '요양보호사',
    description: '노인을 돌보는 직업',
    imageUrl: '/some-image.png',
    reason: '조건 설명입니다',
    nickname: '영희',
  };

  it('제목, 설명, 이미지를 올바르게 렌더링한다', () => {
    render(<Card {...defaultProps} />);
    expect(screen.getByTestId('card-title')).toHaveTextContent('요양보호사');
    expect(screen.getByTestId('card-description')).toHaveTextContent(
      '노인을 돌보는 직업'
    );
    expect(screen.getByTestId('card-image')).toHaveAttribute(
      'src',
      '/some-image.png'
    );
    expect(screen.getByTestId('card-image')).toHaveAttribute(
      'alt',
      '요양보호사'
    );
  });

  it('초기에는 hover 컨텐츠가 보이지 않는다', () => {
    render(<Card {...defaultProps} />);
    const hoverContent = screen.getByTestId('hover-content');
    expect(hoverContent).toHaveClass('opacity-0');
    expect(hoverContent).not.toHaveClass('opacity-100');
  });

  it('마우스 진입 시 hover 컨텐츠가 표시된다', () => {
    render(<Card {...defaultProps} />);
    const card = screen.getByTestId('card-container');
    fireEvent.mouseEnter(card);
    const hoverContent = screen.getByTestId('hover-content');
    expect(hoverContent).toHaveClass('opacity-100');
  });

  it('마우스 이탈 시 hover 컨텐츠가 사라진다', () => {
    render(<Card {...defaultProps} />);
    const card = screen.getByTestId('card-container');
    fireEvent.mouseEnter(card);
    fireEvent.mouseLeave(card);
    const hoverContent = screen.getByTestId('hover-content');
    expect(hoverContent).toHaveClass('opacity-0');
  });

  it('onHover 콜백 함수가 호출된다', () => {
    const onHoverMock = jest.fn();
    render(<Card {...defaultProps} onHover={onHoverMock} />);
    const card = screen.getByTestId('card-container');
    fireEvent.mouseEnter(card);
    expect(onHoverMock).toHaveBeenCalledTimes(1);
  });

  it('onLeave 콜백 함수가 호출된다', () => {
    const onLeaveMock = jest.fn();
    render(<Card {...defaultProps} onLeave={onLeaveMock} />);
    const card = screen.getByTestId('card-container');
    fireEvent.mouseEnter(card);
    fireEvent.mouseLeave(card);
    expect(onLeaveMock).toHaveBeenCalledTimes(1);
  });

  it('hover 컨텐츠에 올바른 정보가 표시된다', () => {
    render(<Card {...defaultProps} />);
    const card = screen.getByTestId('card-container');
    fireEvent.mouseEnter(card);

    const reasonTitle = screen.getByTestId('card-reason-title');
    expect(reasonTitle).toHaveTextContent('요양보호사');
    expect(reasonTitle).toHaveTextContent('추천 이유');

    const trait = screen.getByTestId('card-trait');
    expect(trait).toHaveTextContent('성향');
    expect(trait).toHaveTextContent(`‘영희’ 님과 잘 맞아요.`);

    const strength = screen.getByTestId('card-strength');
    expect(strength).toHaveTextContent('강점');
    expect(strength).toHaveTextContent(
      `‘영희’ 님은 따뜻한 소통에 강점을 지녔어요.`
    );

    const condition = screen.getByTestId('card-condition');
    expect(condition).toHaveTextContent('조건');
    expect(screen.getByTestId('hover-content')).toHaveTextContent(
      '조건 설명입니다'
    );
  });

  it('hover 컨텐츠에 버튼들이 올바르게 표시된다', () => {
    render(<Card {...defaultProps} />);
    const card = screen.getByTestId('card-container');
    fireEvent.mouseEnter(card);
    expect(screen.getByTestId('card-save-button')).toHaveTextContent('담기');
    expect(screen.getByTestId('card-detail-button')).toHaveTextContent(
      '상세정보 보기'
    );
  });

  it('nickname이 null이어도 정상 렌더링된다', () => {
    render(<Card {...defaultProps} nickname={null} />);
    const card = screen.getByTestId('card-container');
    fireEvent.mouseEnter(card);
    expect(screen.getByTestId('card-trait')).toBeInTheDocument();
    expect(screen.getByTestId('card-strength')).toBeInTheDocument();
    expect(screen.getByTestId('card-condition')).toBeInTheDocument();
  });

  it('접근성: 이미지에 alt 텍스트가 있다', () => {
    render(<Card {...defaultProps} />);
    const image = screen.getByTestId('card-image');
    expect(image).toHaveAttribute('alt', '요양보호사');
  });
});
