import { useState } from 'react';

interface PaginationProps<T> {
  items: T[];
  itemsPerPage: number;
}
const usePagination = <T>({ items, itemsPerPage }: PaginationProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = items.slice(indexOfFirst, indexOfLast);

  return {
    currentItems,
    currentPage,
    setCurrentPage,
    totalPages,
  };
};

export default usePagination;
