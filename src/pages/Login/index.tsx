import React, { useState } from 'react';
import { Page } from "./styles";

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <>
      <title>Login</title>
        <Page>
          <div className='card'>
            <h2 className='title'>Login</h2>
            <form>
              <div className='formGroup'>
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Digite seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='input'
                  required
                />
              </div>
              <div className='formGroup'>
                <label htmlFor="senha">Senha</label>
                <input
                  type="password"
                  id="senha"
                  placeholder="Digite sua senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className='input'
                  required
                />
              </div>
              <button type="submit" className='button'>Confirmar</button>
            </form>
          </div>
        </Page>
    </>
  );
};

export default Login;
