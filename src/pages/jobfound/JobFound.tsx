import foundIcon from '@assets/images/bag.webp';
import FoundFilter from './components/FoundFilter';
import ListFound from './components/ListFound';
import FoundIller from '@assets/images/foundillust.webp';
import Pagination from '@common/Pagination';
import FoundJobs from '@utils/data/jobfound/JobFoundDummy';
import usePagination from '@hook/usePagination';

const JobFound = () => {
  const { currentItems, currentPage, setCurrentPage, totalPages } =
    usePagination({
      items: FoundJobs,
      itemsPerPage: 9,
    });

  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="h-[450px] w-full bg-[#D5D5FF] px-[120px] pt-20">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <img
              src={foundIcon}
              alt="직업탐색 아이콘"
              className="h-[69px] w-[69px]"
            />
            <div className="mt-[30px] text-gray-500 font-B01-M">직업탐색</div>
            <div className="mt-[10px] text-gray-900 font-T01-B">
              원하는 직업을 탐색해보세요
            </div>
          </div>

          <div className="absolute right-[82px] top-[70px]">
            <img
              src={FoundIller}
              alt="직업탐색 일러스트"
              className="h-[329px] w-[400px]"
            />
          </div>
        </div>

        <FoundFilter />

        <ListFound jobs={currentItems} />

        <div className="pb-20">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default JobFound;
