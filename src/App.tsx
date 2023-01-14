import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Formulario from './componentes/Formulario';
import { RecoilRoot } from 'recoil';
import Configuracao from './paginas/Configuracao';
import Sorteio from './paginas/Sorteio';

function App() {
  return (
    <Router>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Configuracao />} />
          <Route path="/sorteio" element={<Sorteio />} />
        </Routes>
      </RecoilRoot>
    </Router>
  );
}

export default App;
