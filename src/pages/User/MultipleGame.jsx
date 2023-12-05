import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/MultipleGame.css'; // Asegúrate de tener el CSS adecuado
import { useLocation } from 'react-router-dom';

function MultipleChoiceGame() {
    const [selectedOption, setSelectedOption] = useState('');
    const [preguntas, setPreguntas] = useState([]);
    const [preguntaActual, setPreguntaActual] = useState(null);
    const [contadorPreguntas, setContadorPreguntas] = useState(0);
    const [respuestas, setRespuestas] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const { categoria } = location.state || {};
    const seccion = categoria.toString();

    useEffect(() => {
        const fetchPreguntas = async () => {
            try {
                const response = await axios.get('https://giant-waders.cyclic.app/api/post');
                const preguntasOpcionMultiple = response.data.quizzes.filter((quiz) =>
                    quiz.section === seccion && quiz.questions.some(question => question.type === "multiple-choice")
                );
                setPreguntas(preguntasOpcionMultiple);
                setPreguntaActual(elegirPreguntaAleatoria(preguntasOpcionMultiple));
            } catch (error) {
                console.error("Error al obtener preguntas:", error);
            }
        };

        fetchPreguntas();
    }, [seccion]);

    const elegirPreguntaAleatoria = (preguntas) => {
        if (preguntas.length === 0) return null;
        const preguntasDeTipo = preguntas.flatMap(quiz => quiz.questions.filter(question => question.type === "multiple-choice"));
        return preguntasDeTipo[Math.floor(Math.random() * preguntasDeTipo.length)];
    };

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleNextQuestion = () => {
        if (!selectedOption) {
            alert('Por favor, selecciona una opción antes de continuar.');
            return; // No avanzar si no se ha seleccionado una opción
        }
        if (contadorPreguntas < 9) {
            guardarRespuesta();
            setPreguntaActual(elegirPreguntaAleatoria(preguntas));
            setContadorPreguntas(contadorPreguntas + 1);
            setSelectedOption('');
        } else {
            guardarRespuesta();
            finalizarQuiz();
        }
    };

    const guardarRespuesta = () => {
        const esCorrecta = preguntaActual.options.find(option => option.optionText === selectedOption)?.isCorrect;
        const nuevaRespuesta = { preguntaId: preguntaActual._id, esCorrecta: esCorrecta };
        setRespuestas([...respuestas, nuevaRespuesta]);
        localStorage.setItem('respuestasQuiz', JSON.stringify([...respuestas, nuevaRespuesta]));
    };

    const finalizarQuiz = async () => {
        // Calcular la puntuación
        const puntaje = respuestas.reduce((acumulado, respuesta) => {
            return acumulado + (respuesta.esCorrecta ? 1 : 0);
        }, 0);
    
        // Crear un objeto con los resultados del quiz y la puntuación
        const quizResultados = {
            respuestas: respuestas,
            puntaje: puntaje
        };
    
        // Guardar resultados en localStorage
        localStorage.setItem('ultimoQuiz', JSON.stringify(quizResultados));
    
        // Navegar a la página de puntuaciones
        navigate('/puntajes');
    };
    
    const handleExit = () => {
        if (window.confirm('¿Estás seguro de que quieres salir?')) {
            window.location.href = '/';
        }
    };


    return (
        
        
             <div className="game-container">
            <div className="game-header">
                <button className="ucachallenge-button">UCACHALLENGE</button>
                <button className="exit-button" onClick={handleExit}>Salir</button>
            </div>
            <div className="question-box">
                <p>{preguntaActual ? preguntaActual.questionText : 'Cargando pregunta...'}</p>
            </div>
            <div className="options-container">
                {preguntaActual && preguntaActual.options.map((option, index) => (
                    <label key={index} className="option-label">
                        <input
                            type="radio"
                            name="multipleChoice"
                            value={option.optionText}
                            checked={selectedOption === option.optionText}
                            onChange={handleOptionChange}
                            className="option-input"
                        />
                        {option.optionText}
                    </label>
                ))}
            </div>
            <button className="next-question-button" onClick={handleNextQuestion}>
                {contadorPreguntas < 9 ? 'SIGUIENTE PREGUNTA' : 'FINALIZAR QUIZ'}
            </button>
            {/* <button className="report-button" onClick={() => window.open('/reportar-pregunta', '_blank')}>denunciar pregunta</button> */}
        </div>
    );
}

export default MultipleChoiceGame;
