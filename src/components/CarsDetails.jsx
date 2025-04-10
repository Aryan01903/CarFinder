import React from "react";
import { useParams, Link } from "react-router-dom";
import carsData from "../carsData.json";

function CarDetails() {
  const { id } = useParams();
  const car = carsData.find(car => car.id === parseInt(id));

  if (!car) return <p>Car not found</p>;

  return (
    <div className="p-4">
      <Link to="/" className="text-blue-500">Back to Home</Link>
      <div className="mt-6">
        <img
          src={car.image}
          alt={`${car.make} ${car.model}`}
          className="w-full h-96 object-cover rounded-md"
        />
        <h1 className="text-3xl font-semibold mt-6">{car.make} {car.model}</h1>
        <p className="text-lg mt-4">{car.description}</p>
        <p className="text-2xl font-bold mt-4">${car.price}</p>
        <p className="mt-4">Fuel Type: {car.fuel}</p>
        <p className="mt-2">Seats: {car.seats}</p>
        <p className="mt-2">Year: {car.year}</p>
      </div>
    </div>
  );
}

export default CarDetails;
