import CancelIcon from '@assets/icons/cross.svg?react';
import HeartIcon from '@assets/icons/like.svg?react';
import { LearningItem } from '@utils/data/learn/learnDummy.ts';

interface CardDetailProps {
  item: LearningItem;
  onClose: () => void;
}

const CardDetail = ({ item, onClose }: CardDetailProps) => {
  const details = [
    { label: '마감일', value: '05.22 (수)', color: 'text-purple-500' },
    { label: '지역', value: '경기 고양시 덕양구', color: 'text-gray-900' },
    { label: '학력', value: '학력무관', color: 'text-gray-900' },
    { label: '고용형태', value: '경력무관 · 정규직', color: 'text-gray-900' },
  ];

  return (
    <div
      className="relative w-full max-w-2xl rounded-2xl bg-white px-6 py-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <button
        className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        aria-label="닫기"
        onClick={onClose}
      >
        <CancelIcon className="h-8 w-8" />
      </button>

      <div className="mt-2">
        <span className="rounded-md bg-purple-100 px-3 py-2.5 text-purple-500 font-T04-SB">
          D-day
        </span>
      </div>

      <p className="mt-8 text-gray-500 font-B01-SB">{item.company}</p>
      <h2 className="mt-2 text-gray-900 font-T02-B" id="modal-title">
        {item.title}
      </h2>

      <div className="mt-8 space-y-3 rounded-xl bg-gray-50 px-6 py-5 text-gray-600 font-B01-M">
        {details.map((detail, idx) => (
          <div key={idx} className="grid grid-cols-[80px_1fr] gap-x-4">
            <span className="text-gray-400">{detail.label}</span>
            <span className={`${detail.color} font-B01-SB`}>
              {detail.value}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-end gap-4">
        <button className="flex items-center gap-2 rounded-xl border border-purple-500 bg-white px-4 py-3 text-purple-500 font-T05-SB hover:bg-purple-50">
          <HeartIcon className="h-5 w-5" />
          담기
        </button>
        <button className="flex items-center justify-center rounded-xl bg-purple-500 px-5 py-3 text-white font-T05-SB hover:bg-purple-600">
          사람인에서 자세히 보기
        </button>
      </div>
    </div>
  );
};

export default CardDetail;
