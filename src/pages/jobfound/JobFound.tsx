import foundIcon from '@assets/images/bag.png';
import FoundFilter from './components/FoundFilter';
import ListFound from './components/ListFound';

const JobFound = () => {
  return (
    <div className="h-[450px] w-full bg-[#D5D5FF] px-[120px] pt-20">
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
        <FoundFilter />
      </div>

      <ListFound />
    </div>
  );
};

export default JobFound;
