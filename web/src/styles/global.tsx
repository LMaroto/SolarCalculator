import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
  margin: 0;
  padding: 0;
}

*:focus{
  outline: 0;
}

html, body, #root{
  height: 100vh;
}

body{
  display: flex;
  flex-direction: column;
  -webkit-font-smoothing: antialiased;

  background: #ff7518;
  overflow-y: hidden;
}

body, input, button, textarea{
  font: 14px 'Roboto', sans-serif;
}

a{
  text-decoration: none;
}

ul{
  list-style: none;
}

button{
  cursor: pointer;
}

@media print{
  body{
    background: #fff;
  }
}




`;