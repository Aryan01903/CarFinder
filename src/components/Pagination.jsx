import React from "react";

function Pagination({ carsPerPage, totalCars, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCars / carsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-6">
      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className="p-2 mx-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          {number}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
