import React, { useState, useEffect } from "react";
import { Page } from "./styles";
import { FiDelete } from "react-icons/fi";
import { useParams } from "react-router-dom";

const VirtualKeyboard: React.FC = () => {
  const [password, setPassword] = useState("");
  const [buttons, setButtons] = useState<number[][]>([]); // Guarda a sequência
  const [hash, setHash] = useState<string>("");
  const [message, setMessage] = useState<string>(""); // Mensagem para sucesso ou erro
  const [messageType, setMessageType] = useState<"success" | "error" | "">(""); // Tipo de mensagem: sucesso ou erro
  const { userId } = useParams();

  // Busca a sequência na API ao carregar a tela
  useEffect(() => {
    const fetchSequence = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/sequence/${userId}`
        );
        const data = await response.json();
        setHash(data.hash);
        setButtons(data.sequence);
      } catch (error) {
        console.error("Erro ao buscar a sequência:", error);
        setMessage("Erro ao buscar a sequência");
        setMessageType("error");
      }
    };

    fetchSequence();
  }, [userId]);

  const handleButtonClick = (value: number) => {
    setPassword((prev) => prev + value.toString());
  };

  const handleDelete = () => {
    setPassword((prev) => prev.slice(0, -1));
  };

  const handleAccess = async () => {
    if (!password) {
      setMessage("Digite sua senha!");
      setMessageType("error");
      return;
    }

    // Monta a sequência de acordo com a senha digitada
    const sequence = password.split("").map((char) => {
      const num = parseInt(char);
      return buttons.find((button) => button.includes(num)) || [];
    });

    try {
      const response = await fetch("http://localhost:3001/sequence/validate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ hash, sequence, id: Number(userId) }),
      });

      const result = await response.text();

      if (response.ok) {
        setMessage(`✅ Acesso liberado: ${result}`);
        setMessageType("success");
      } else {
        setMessage(`❌ ${result}`);
        setMessageType("error");
      }
    } catch (error) {
      console.error("Erro ao validar senha:", error);
      setMessage("Erro ao conectar com o servidor.");
      setMessageType("error");
    }
  };

  return (
    <>
      <title>n1</title>

      <Page>
        <div className="container">
          <div className="title">
            <p>Teclado virtual</p>
          </div>

          <div className="subtitle">
            Digite sua senha eletrônica no teclado virtual:
          </div>

          <div className="input">
            <input type="password" value={password} readOnly />
          </div>

          <div className="buttons">
            {buttons.map((pair, index) => (
              <div className="contentButton" key={index}>
                <button
                  onClick={() =>
                    handleButtonClick(pair[Math.floor(Math.random() * 2)])
                  }
                >
                  {pair[0]} ou {pair[1]}
                </button>
              </div>
            ))}
            <div className="contentButton">
              <button onClick={handleDelete}>
                <FiDelete size={30} />
              </button>
            </div>
          </div>

          <div className="buttonConfirm">
            <button onClick={handleAccess}>Acessar</button>
          </div>

          <div className="return">
            <p
              style={{
                color:
                  messageType === "success"
                    ? "green"
                    : messageType === "error"
                    ? "red"
                    : "black",
              }}
            >
              {message}
            </p>
          </div>
        </div>
      </Page>
    </>
  );
};

export default VirtualKeyboard;
