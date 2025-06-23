import React from "react";
import Login from "../pages/Login";
import { Route, Routes } from "react-router-dom";
import { Container } from "./styles";
import { useNavigate } from "react-router";
import Home from "../pages/home";

const Rota: React.FC = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="/" element={<NotFound />} />
  </Routes>
);

function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <div>
          <h1 className="neonText">PÁGINA NÃO ENCONTRADA!</h1>
          <button onClick={() => navigate(``)}>Voltar</button>
        </div>
      </Container>
    </>
  );
}

export default Rota;
