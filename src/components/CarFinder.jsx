import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import carsData from "../carsData.json";
import Pagination from "./Pagination";
import CarCard from "./CarCard";

function CarFinder() {
  const [cars, setCars] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [wishlist, setWishlist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 10;

  // Load cars data
  useEffect(() => {
    setCars(carsData);
  }, []);

  // Load wishlist from localStorage
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  // Handle Search
  const filteredCars = cars.filter(car =>
    car.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
    car.model.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination Logic
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  // Add to Wishlist
  const addToWishlist = (car) => {
    if (!wishlist.find(item => item.id === car.id)) {
      let newWishlist = [...wishlist, car];
      setWishlist(newWishlist);
      localStorage.setItem("wishlist", JSON.stringify(newWishlist));
    }
  };

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-4">
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search by make or model"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border rounded-md w-1/3"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentCars.length > 0 ? (
          currentCars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              addToWishlist={addToWishlist} // Pass addToWishlist to CarCard component
            />
          ))
        ) : (
          <p>No cars found</p>
        )}
      </div>

      <Pagination
        carsPerPage={carsPerPage}
        totalCars={filteredCars.length}
        paginate={paginate}
      />
    </div>
  );
}

export default CarFinder;
