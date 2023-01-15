import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import HospitalSearch from "./Hospital Search";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HospitalSearch />} />
    </Routes>
  );
}

export default App;
