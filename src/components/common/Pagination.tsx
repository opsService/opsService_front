import { ChevronsLeft, ChevronsRight } from 'lucide-react';

interface PaginationProps {
  totalPage: number;
  page: number;
  handleChangePage: (newPage: number) => void;
  size?: string;
}

function Pagination({
  totalPage,
  page,
  handleChangePage,
  size = '1rem',
}: PaginationProps) {
  const generatePageNumbers = () => {
    const pageNumbers = [];

    let startPage = Math.max(1, page - 2);
    let endPage = Math.min(totalPage, page + 2);

    if (totalPage <= 5) {
      startPage = 1;
      endPage = totalPage;
    } else {
      if (page <= 3) {
        endPage = 5;
      } else if (page >= totalPage - 2) {
        startPage = totalPage - 4;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-center text-center gap-4">
      <ChevronsLeft
        size={size}
        className={`cursor-pointer ${page !== 1 ? 'text-gray-600' : 'text-gray-400'}`}
        onClick={() => handleChangePage(1)}
      />
      {generatePageNumbers().map((pageNumber) => (
        <button
          key={pageNumber}
          className={`rounded cursor-pointer p-2 ${pageNumber === page ? 'text-gray-600 font-semibold' : 'text-gray-400'}`}
          onClick={() => handleChangePage(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      <ChevronsRight
        size={size}
        className={`cursor-pointer ${page !== totalPage ? 'text-gray-600' : 'text-gray-400'}`}
        onClick={() => handleChangePage(totalPage)}
      />
    </div>
  );
}

export default Pagination;
