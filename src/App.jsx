import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CarFinder from "./components/CarFinder";
import CarsDetails from "./components/CarsDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CarFinder />} />
        <Route path="/car/:id" element={<CarsDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
