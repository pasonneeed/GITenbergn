import foundIcon from '@assets/images/bag.png';
import checker from '@assets/images/checker.png';

const JobFound = () => {
  return (
    <div className="h-[450px] w-full bg-gray-100 px-[120px] pt-20">
      <div className="flex flex-col">
        <img
          src={foundIcon}
          alt="직업탐색 아이콘"
          className="aspect-ratio: 1/1; h-[69px] w-[69px]"
        />
        <div className="mt-[30px] text-gray-500 font-B01-M"> 직업탐색 </div>
        <div className="mt-[10px] text-gray-900 font-T01-B">
          {' '}
          원하는 직업을 탐색해보세요
        </div>
      </div>
      <div className="shadow-shadow2 mt-[60px] flex h-[242px] w-full flex-col items-start rounded-[30px] bg-white p-[30px]">
        자격증 보유
      </div>

      <div className="mt-[60px]">
        <div className="flex h-[403px] w-[360px] items-center gap-7">
          <img
            src={checker}
            alt="임시 이미지"
            className="h-[240px] w-[360px] rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default JobFound;
