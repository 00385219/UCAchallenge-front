import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/SelectGameMode.css';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import multipleChoiceImage from '../../assets/images/multiplechoice.png';
import imageBasedImage from '../../assets/images/imagemodo.png';
import { useLocation } from 'react-router-dom';
import truefalse from '../../assets/images/truefalse.png';

function SelectGameMode() {
    const [respuestas, setRespuestas] = useState([]);
    const [puntaje, setPuntaje] = useState(0);
    const location = useLocation();
    const { categoria } = location.state || {};
    const iniciarNuevoQuiz = () => {
        setRespuestas([]);
        setPuntaje(0);
    
        // Aquí puedes agregar cualquier otra lógica para comenzar un nuevo quiz
    };
    
    return (
        <>
            <Header />
            <div className="game-mode-wrapper">
                <h1>UCAchallenge</h1>
                <div className="search-game-mode">
                    <input type="search" placeholder="Buscar otro modo de juego" />
                </div>
                <div className="game-modes">
                    <Link to="/modo-verdadero-falso" state={{ categoria, modoJuego: 'true-false' }} className="game-mode-link" onClick={iniciarNuevoQuiz}>
                        <img src={truefalse} alt="Verdadero y Falso" />
                    </Link>
                    <Link to="/modo-opcion-multiple"state={{ categoria, modoJuego: 'multiple-choice' }} className="game-mode-link" onClick={iniciarNuevoQuiz}>
                        <img src={multipleChoiceImage} alt="Opción Múltiple" />
                    </Link>
                    <Link to="/modo-imagenes" state={{ categoria, modoJuego: 'imagenes' }} className="game-mode-link"onClick={iniciarNuevoQuiz}>
                        <img src={imageBasedImage} alt="Respuesta con Imágenes" />
                    </Link>
                </div>
                
            </div>
            <Footer />
        </>
    );
}

export default SelectGameMode;

