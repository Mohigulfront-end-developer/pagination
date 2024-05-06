import { useState, useEffect } from "react";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className="bg-pink-100 w-full min-h-screen">
        <div className="container mx-auto px-4 py-8 pt-[5%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
            {currentItems.map((product, index) => (
              <div
                key={index}
                className="bg-[#bf7fd6] shadow-[5px] rounded-lg p-4"
              >
                <div className="text-[15px] text-[white]">
                  {product.description}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="fixed bottom-0 left-0 w-full bg-[white] py-3">
          <div className="container mx-auto flex justify-center">
            <button
              onClick={prevPage}
              className={`bg-[#bb5de0] hover:bg-[#af3bbeE] text-white font-bold py-2 px-4 rounded mr-2 ${
                currentPage === 1 && "opacity-50 cursor-not-allowed"
              }`}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => paginate(i + 2)}
                className={`mx-2 px-4 py-2 rounded hover:bg-[#af3bbe] hover:text-white ${
                  currentPage === i + 1
                    ? "bg-[#bb5de0] text-white font-bold"
                    : "bg-[#cd97d9] text-white"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={nextPage}
              className={`bg-[#bb5de0] hover:bg-[#af3bbe] text-white font-bold py-2 px-4 rounded ml-2 ${
                currentPage === totalPages && "opacity-50 cursor-not-allowed"
              }`}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
