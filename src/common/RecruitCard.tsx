// src/components/RecruitCard.tsx
import Like from '@assets/icons/like.svg?react';

export interface RecruitItem {
  id: number;
  company: string;
  title: string;
  hashtags: string[];
  endDate: string;
  isDay?: boolean;
}

const RecruitCard = ({ item }: { item: RecruitItem }) => {
  return (
    <div className="flex h-[300px] w-[380px] flex-col rounded-2xl border border-gray-300 bg-white p-6">
      {/* 좋아요 아이콘 */}
      <div className="flex items-center justify-between">
        {item.isDay && (
          <span className="rounded-md bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-500">
            D-day
          </span>
        )}
        <Like className="flex h-6 w-6 justify-end text-gray-300 hover:text-purple-500" />
      </div>

      {/* 아카데미 이름 */}
      <div className="mt-2 text-xs text-gray-500">{item.company}</div>

      {/* 강의 제목 */}
      <h3 className="mt-1 text-black font-T04-SB">{item.title}</h3>

      {/* 해시태그들 */}
      <div className="mt-4 flex flex-wrap gap-0.5">
        {item.hashtags.map((tag, index) => (
          <span key={index} className="px-2 py-1 text-gray-500 font-B03-M">
            # {tag}
          </span>
        ))}
      </div>

      {/* 가격 태그 */}
      <div className="mt-16 flex items-center justify-end gap-1 px-3 py-1">
        <span className="text-gray-500 font-B03-M">마감일</span>
        <span className="text-gray-300">|</span>
        <span className="text-purple-500 font-B03-M">{item.endDate}</span>
      </div>
    </div>
  );
};

export default RecruitCard;
