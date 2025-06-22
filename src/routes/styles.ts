import { shade } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #00579d;

  h1 {
    color: #fff;
    font-size: 5vh;
    text-transform: uppercase;
  }

  button {
    width: 100px;
    height: 30px;

    border-radius: 5px;
    border: 0;

    transition: background-color 0.2s;
    cursor: pointer;

    &:hover {
      background-color: ${shade(0.2, "#fff")};
    }
  }
`;
