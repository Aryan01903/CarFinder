import React from "react";
import { Link } from "react-router-dom";

function CarCard({ car, addToWishlist }) {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img
        src={car.image}
        alt={`${car.make} ${car.model}`}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-lg font-semibold mt-4">{car.make} {car.model}</h3>
      <p className="text-sm text-gray-500 mt-2">{car.description}</p>
      <p className="mt-4 text-xl font-bold">${car.price}</p>
      <div className="flex justify-between mt-4">
        <Link to={`/car/${car.id}`} className="text-blue-500">View Details</Link>
        <button
          onClick={() => addToWishlist(car)} // Calls the addToWishlist function when clicked
          className="text-green-500 hover:text-green-700"
        >
          Add to Wishlist
        </button>
      </div>
    </div>
  );
}

export default CarCard;
