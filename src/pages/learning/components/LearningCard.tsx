import Like from '@assets/icons/like.svg?react';
import { LearningItem } from '@utils/data/learn/learnDummy.ts';

const LearningCard = ({ item }: { item: LearningItem }) => {
  return (
    <div className="flex w-full flex-col justify-between rounded-[30px] border-2 border-gray-300 bg-white p-6">
      <div>
        <div className="flex items-center justify-between">
          {item.isDay && (
            <span className="rounded-[10px] bg-purple-100 px-3 py-1 text-purple-500 font-B01-B">
              D-day
            </span>
          )}
          <Like className="ml-auto flex h-6 w-6 justify-end text-gray-300 hover:text-purple-500" />
        </div>

        <div className="mt-2 text-gray-500 font-B03-M">{item.company}</div>

        <h3 className="mt-1 text-black font-T04-SB">{item.title}</h3>

        <div className="mt-4 flex flex-wrap gap-0.5">
          {item.hashtags.map((tag, index) => (
            <span key={index} className="px-2 py-1 text-gray-500 font-B03-M">
              # {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <div className="rounded-[10px] bg-purple-50 px-4 py-2">
          <span className="text-purple-500 font-B01-B">{item.price}원</span>
        </div>
      </div>
    </div>
  );
};

export default LearningCard;
