import Arrow from '@assets/icons/arrow.svg?react';
import DreamerCard from './DreamerCard';
import Dreamer from '@utils/data/home/DreamerDummy';

const HomeDreamer = () => {
  return (
    <div>
      <div className="mb-[50px] flex items-center justify-between">
        <div className="text-gray-900 font-T02-B">
          나와 같은 꿈을 꾸는 드리머예요!
        </div>
        <div
          className="flex cursor-pointer flex-row items-center text-gray-500 font-B02-SB"
          onClick={() => '/'}
        >
          더 보러가기
          <Arrow />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {Dreamer.map((dream, index) => (
          <DreamerCard
            key={index}
            regionName={dream.regionName}
            job={dream.job}
            nickname={dream.nickname}
            day={dream.day}
            todo={dream.todo}
            profile={dream.profile}
            todotext={dream.todotext}
            doneList={dream.doneList}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeDreamer;
