import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Formulario from './componentes/Formulario';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <Router>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Formulario />} />
        </Routes>
      </RecoilRoot>
    </Router>
  );
}

export default App;
