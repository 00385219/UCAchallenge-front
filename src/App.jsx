import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/User/HomePage';
import FormNewQuestion from './pages/User/FormNewQuestion';
import Ranking from './pages/User/Ranking';
import LoginUser from './pages/User/LoginUser';
import RegisterUser from './pages/User/RegisterUser'; 
import LoginAdmin from './pages/Admin/LoginAdmin';
import ReportQuestion from './pages/User/ReportQuestion';
import SelectGameMode from './pages/User/SelectGameMode';
import TrueFalseGame from './pages/User/TrueFalseGame';
import MultipleGame from './pages/User/MultipleGame';
import ImagesGame from './pages/User/ImagesGame';

function App() {
  return (
    <Router>

      <Routes>
        {/* <Route path="/otra-ruta" element={<OtroComponente />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/crear-juego" element={<FormNewQuestion />} />
        <Route path="/puntajes" element={<Ranking />} />
        <Route path="/iniciar-sesion" element={<LoginUser />} />
        <Route path="/registro-usuario" element={<RegisterUser />} />
        <Route path="/admin-login" element={<LoginAdmin />} />
        <Route path="/reportar-pregunta" element={<ReportQuestion />} />
        <Route path="/modo-juego" element={<SelectGameMode />} />
        <Route path="/modo-verdadero-falso" element={<TrueFalseGame />} />
        <Route path="/modo-opcion-multiple" element={<MultipleGame />} />
        <Route path="/modo-imagenes" element={<ImagesGame />} />
        

      </Routes>
    </Router>
  );
}

export default App;
