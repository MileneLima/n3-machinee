import styled from "styled-components";

export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 50px;
  background: #000050;

  display: flex;
  flex-direction: column;

  .nav {
    width: 100%;
    height: 8%;

    display: flex;
    align-items: center;

    color: white;

    padding: 20px;
  }

  .container {
    width: 100%;
    height: 92%;

    display: flex;
    justify-content: space-between;

    .a {
      width: 33%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      color: white;

      padding: 20px;

      .top {
        width: 100%;
        height: 10%;

        display: flex;
        justify-content: center;
        align-items: center;

        .icon {
          width: 10%;
          height: 100%;

          display: flex;
          justify-content: center;
          align-items: center;
        }

        .center {
          width: 80%;
          height: 100%;

          display: flex;
          justify-content: center;
          align-items: center;
        }
      }

      .mid {
        width: 100%;
        height: 80%;

        display: flex;
        justify-content: center;
        align-items: center;

        .video {
          width: 100%;
          height: 80%;

          display: flex;
          justify-content: center;
          align-items: center;

          background-color: rgb(70, 70, 70);
        }
      }

      .bottom {
        width: 100%;
        height: 10%;

        button {
          width: 100%;
          height: 100%;
          background-color: rgb(94, 200, 158);
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: bold;

          font-size: 20px;

          &:hover {
            background-color: rgb(72, 155, 122);
          }
        }
      }

      .historical {
        width: 100%;
        height: 90%;

        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 15px; /* Espaço entre os cards */
        padding: 10px; /* Espaço interno */

        overflow-y: auto;

        ::-webkit-scrollbar {
          height: 8px;
          width: 8px;
        }

        ::-webkit-scrollbar-thumb {
          background-color: #888;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-track {
          background-color: #f0f0f0;
        }

        .card {
          width: 100%;
          height: 15%;
          flex-shrink: 0;

          border-radius: 15px;
          padding: 10px;

          display: flex;
          justify-content: center;
          align-items: center;

          background-color:rgb(0, 0, 50);

          .photo {
            width: 20%;
            height: 100%;

            border-radius: 15px;

            display: flex;

            background-color: rgb(65, 65, 65);
          }

          .text {
            width: 70%;
            height: 100%;

            border-radius: 15px;

            display: flex;
            align-items: center;
            padding: 10px;
          }

          .hour {
            width: 10%;
            height: 100%;

            border-radius: 15px;

            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  }
`;
