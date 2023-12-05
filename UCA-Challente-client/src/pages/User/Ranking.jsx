import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Importa axios para realizar peticiones HTTP
import { Link } from 'react-router-dom';
import '../../assets/css/Ranking.css';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { useNavigate } from 'react-router-dom'; // Importar si aún no lo has hecho

const Ranking = () => {
    const [puntajes, setPuntajes] = useState([]);
    const [mostrarDetalles, setMostrarDetalles] = useState(false);

    useEffect(() => {
        const ultimoQuiz = JSON.parse(localStorage.getItem('ultimoQuiz'));
        if (ultimoQuiz) {
            setPuntajes([ultimoQuiz]);
        }
    }, []);

    

    const navigate = useNavigate();



    return (

        <div>
            <>
                <Header />
                <div className="ranking-container">
                    {puntajes.length > 0 ? (
                        puntajes.map((puntaje, index) => (
                            <div className="ranking-category" key={index}>
                                <h2>Resultado del Quiz</h2>
                                <ul>
                                    <li>Puntaje: {puntaje.puntaje} / {puntaje.respuestas.length}</li>
                                    
                                </ul>
                            </div>
                        ))
                    ) : (
                        <p>No hay puntajes disponibles.</p>
                    )}
                </div>
            
            <Footer />
        </>
        </div>
    );
}
export default Ranking;
