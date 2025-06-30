import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";

const Rota: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
);

export default Rota;
