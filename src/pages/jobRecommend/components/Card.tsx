import { useState } from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  reason: string;
  onClick?: () => void;
  onHover?: () => void;
  onLeave?: () => void;
  nickname?: string | null;
}

const Card = ({
  title,
  description,
  imageUrl,
  reason,
  onHover,
  onLeave,
  nickname,
}: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative h-[480px] w-[372px] overflow-hidden rounded-[30px] border border-gray-200 transition-transform duration-300 ease-in-out hover:-translate-y-6 hover:scale-105 hover:drop-shadow-2xl"
      onMouseEnter={() => {
        setIsHovered(true);
        onHover?.();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        onLeave?.();
      }}
    >
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt={title}
          className="h-[300px] w-full rounded-t-[30px] object-cover"
        />
        <div className="flex h-[180px] flex-col px-6 py-5">
          <h3 className="mb-1 text-xl text-gray-900 font-T02-B">{title}</h3>
          <p className="mb-6 text-gray-500 font-B02-M">{description}</p>
          <div className="mt-auto cursor-pointer self-end text-gray-400 font-B03-M">
            상세정보 보기 →
          </div>
        </div>
      </div>

      <div
        className={`absolute inset-0 z-10 bg-white px-6 py-12 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h4 className="mb-6 text-2xl text-gray-900 font-T01-B">
          <span>{title}</span>
          <div className="block">추천 이유</div>
        </h4>
        <div className="space-y-4 text-sm text-gray-700 font-B02-M">
          <div>
            <strong className="font-semibold text-black">성향</strong>
            <p>
              사람을 직접 돕고 함께 일하는 걸 선호하는 ‘{nickname}’ 님과 잘
              맞아요.
            </p>
          </div>
          <div>
            <strong className="font-semibold text-black">강점</strong>
            <p>
              주변에서 말을 잘한다는 칭찬을 자주 듣는 ‘{nickname}’ 님은 따뜻한
              소통에 강점을 지녔어요.
            </p>
          </div>
          <div>
            <strong className="font-semibold text-black">조건</strong>
            <p>{reason}</p>
          </div>
        </div>
        <div className="mt-6 flex justify-center gap-6">
          <button className="rounded-[10px] bg-purple-100 px-10 py-4 text-sm font-semibold text-purple-500">
            담기
          </button>
          <button className="rounded-[10px] bg-purple-500 px-14 py-4 text-sm font-semibold text-white">
            상세정보 보기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
