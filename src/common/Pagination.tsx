import Arrow from '@assets/icons/arrow.svg?react';
import clsx from 'clsx';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const Pagination = ({
  totalPages,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  const handleClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1;
        return (
          <button
            key={page}
            onClick={() => handleClick(page)}
            className={clsx(
              'flex h-9 w-9 cursor-pointer flex-row items-center justify-center p-[10px] font-B02-SB',
              page === currentPage ? 'text-purple-500' : 'text-gray-500'
            )}
          >
            {page}
          </button>
        );
      })}

      <button
        onClick={() => handleClick(currentPage + 1)}
        className="h-9 w-9 cursor-pointer"
      >
        <Arrow className="h-9 w-9 rounded-[10px] border border-gray-300" />
      </button>
    </div>
  );
};

export default Pagination;
