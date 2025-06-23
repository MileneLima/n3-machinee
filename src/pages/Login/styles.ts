import styled from "styled-components";

export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 10px;
  background: rgb(102, 129, 84);

  display: flex;
  align-items: center;
  justify-content: center;

  .card {
    background: #fff;
    padding: 2rem;
    border-radius: 8px;
    width: 300px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .h2 {
    text-align: center;
    margin-bottom: 1.5rem;
    color: #333;
  }

  .div {
    margin-bottom: 1rem;

    label {
      display: block;
      margin-bottom: 0.5rem;
      color: #444;
    }
  }

  .input {
    width: 100%;
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  .button {
    width: 100%;
    padding: 0.75rem;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    margin-top: 1rem;

    &:hover {
      background-color: #45a049;
    }
  }
`;
