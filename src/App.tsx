import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Formulario from './componentes/Formulario';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Formulario />} />
      </Routes>
    </Router>
  );
}

export default App;
