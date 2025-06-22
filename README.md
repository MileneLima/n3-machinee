# Introdução

Este projeto consiste em um **teclado seguro e dinâmico** para entrada de senhas, aumentando a proteção contra tentativas de espionagem visual (“shoulder surfing”). O usuário pode selecionar botões que alternam entre duas opções de dígitos, tornando a combinação menos previsível.  

Desenvolvido com **React** no frontend, **Node.js** no backend e **SQLite** como banco de dados, o sistema garante uma experiência interativa, processamento eficiente e armazenamento leve. Com essa abordagem, reforçamos a segurança ao dificultar tentativas de adivinhação e melhorar a usabilidade do teclado.

# Tecnologias

As tecnologias **React, Node.js e SQLite** foram escolhidas para este projeto de teclado devido às suas características que favorecem desempenho, segurança e escalabilidade.  

- **React** foi utilizado para criar uma interface dinâmica e responsiva, garantindo uma experiência fluida para o usuário na escolha dos botões e na interação com o teclado.  
- **Node.js** foi adotado no backend para gerenciar as regras de negócio, processar as tentativas de senha e fornecer respostas rápidas, além de possibilitar a integração segura entre o frontend e o banco de dados.  
- **SQLite** foi escolhido como banco de dados por sua leveza e facilidade de implementação, armazenando de forma eficiente as configurações do teclado e registros de tentativas, sem a necessidade de um servidor robusto.  

Essa combinação tecnológica permite um sistema seguro e eficiente, garantindo que as variações na digitação da senha dificultem tentativas de adivinhação.

# Guia de Instalação e Uso

## Configuração do Back-end

1. Instale as dependências:
   ```sh
   npm install
   ```
2. Inicie o servidor:
   ```sh
   node index.js
   ```
3. O back-end estará rodando e pronto para uso.

### Regras do Back-end
- O token do usuário expira a cada **1 minuto** para reforçar a segurança.

---

## Configuração do Front-end

1. Instale as dependências:
   ```sh
   npm install
   ```
2. Inicie o projeto:
   ```sh
   npm start
   ```
3. O projeto será aberto no navegador na seguinte rota:
   ```
   http://localhost:3000
   ```
4. O sistema já possui dois usuários cadastrados. Para acessar a página do teclado, utilize o ID do usuário na URL:

   - **Usuário 1:**  
     - Email: `brendon3007gabriel@gmail.com`  
     - Senha: `1234`  
     - ID: `11`
   
   - **Usuário 2:**  
     - Email: `milene@gmail.com`  
     - Senha: `9876`  
     - ID: `12`

   Exemplo de acesso com o usuário Brendon:
   ```
   http://localhost:3000/11
   ```

5. Digite a senha no teclado virtual e clique em **"Acessar"** para efetuar o login.




