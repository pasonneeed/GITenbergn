import HomeHeaderImage from '@assets/images/home.png';
import HomeCardImage from '@assets/images/home_card.png';

export const HomeBackImage = () => {
  return (
    <div className="w-full items-center justify-center">
      <img
        src={HomeHeaderImage}
        alt="홈헤더 이미지"
        className="aspect-[96/19] h-[285px]"
      />
    </div>
  );
};

export const HomeCard = () => {
  return (
    <div className="w-full items-center justify-center">
      <img
        src={HomeCardImage}
        alt="홈카드"
        className="aspect-[402/241] h-[465px] w-[789px]"
      />
    </div>
  );
};
