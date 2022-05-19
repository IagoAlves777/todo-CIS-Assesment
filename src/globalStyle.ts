import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=League+Gothic&display=swap');
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    vertical-align:baseline;
    list-style:none;
  }

  h1, h2, h3, h4, h5, h6, p, div{
    font-family: 'Press Start 2P', cursive;
  }

  body{
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #172b4d;
  }

  button {
    cursor: pointer;
  }
`;
