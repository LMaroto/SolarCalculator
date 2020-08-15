import React from 'react';

import Routes from './routes';
import GlobalStyle from './styles/global';
import '../node_modules/react-vis/dist/style.css';

function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
