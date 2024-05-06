import ReactPaginate from "react-paginate";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

// const PaginationButton = ({ setCurrentePage, currentPage, totalPages }) => {
//   const handlePageClick = ({ selected }) => {
//     setCurrentePage(selected);
//   };
// };

const PaginationBtn = () => {
  return (
    <div>
      <ReactPaginate
        breakLabel={<span className="mr-4">...</span>}
        nextLabel={
          <span className="w-10 h-10 flex items-center justify-center bg-ligthGrey rounded-xl ml-4">
            <FaAngleRight />
          </span>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={50}
        previousLabel={
          <span className="w-10 h-10 flex items-center justify-center bg-ligthGrey rounded-xl mr-4">
            <FaAngleLeft />
          </span>
        }
        containerClassName="flex items-center justify-center mt-8 mb-4"
        pageClassName="blcok border- border-solid border-ligthGrey  hover:bg-ligthGrey  w-10 h-10 flex items-center justify-center rounded-xl mr-4"
        activeClassName="bg-purple text-white"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default PaginationBtn;
