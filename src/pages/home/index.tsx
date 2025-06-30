import React, { useState, useEffect } from "react";
import { Page } from "./styles";
import { BsCameraVideoFill } from "react-icons/bs";
import { FiClock } from "react-icons/fi";

const Home: React.FC = () => {
  return (
    <>
      <title>n1</title>

      <Page>
        <div className="nav">
          <h2>LIBRAS Reader</h2>
        </div>

        <div className="container">
          <div className="a">
            <h1>Reconhecimento de LIBRAS em tempo real</h1>
          </div>
          <div className="a">
            <div className="top">
              <div className="icon">
                <BsCameraVideoFill size={30} />
              </div>
              <div className="center">
                <h2>Reconhecendo...</h2>
              </div>
              <div className="icon">
                <FiClock size={30} />
              </div>
            </div>
            <div className="mid">
              <div className="video"></div>
            </div>
            <div className="bottom">
              <button>Parar reconhecimento</button>
            </div>
          </div>
          <div className="a">
            <div className="top">
              <h2>Histórico</h2>
            </div>
            <div className="historical">
              <div className="card">
                <div className="photo"></div>
                <div className="text"><h2>Olá!</h2></div>
                <div className="hour">11:00</div>
              </div>
              <div className="card">
                <div className="photo"></div>
                <div className="text"><h2>Olá!</h2></div>
                <div className="hour">11:00</div>
              </div>
              <div className="card">
                <div className="photo"></div>
                <div className="text"><h2>Olá!</h2></div>
                <div className="hour">11:00</div>
              </div>
              <div className="card">
                <div className="photo"></div>
                <div className="text"><h2>Olá!</h2></div>
                <div className="hour">11:00</div>
              </div>
              <div className="card">
                <div className="photo"></div>
                <div className="text"><h2>Olá!</h2></div>
                <div className="hour">11:00</div>
              </div>
              <div className="card">
                <div className="photo"></div>
                <div className="text"><h2>Olá!</h2></div>
                <div className="hour">11:00</div>
              </div>
              <div className="card">
                <div className="photo"></div>
                <div className="text"><h2>Olá!</h2></div>
                <div className="hour">11:00</div>
              </div><div className="card">
                <div className="photo"></div>
                <div className="text"><h2>Olá!</h2></div>
                <div className="hour">11:00</div>
              </div>
            </div>
          </div>
        </div>
      </Page>
    </>
  );
};

export default Home;
