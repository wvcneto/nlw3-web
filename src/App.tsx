import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Landing from './pages/Landing';

function App() {
  return (
    <BrowserRouter>
      <Landing />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
