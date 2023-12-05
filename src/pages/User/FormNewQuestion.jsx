import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/FormNewQuestion.css';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

function FormNewQuestion() {
    return (
        <>
            <Header />
            <div className="form-new-question-container">
                <h1>Aporta a nuestra comunidad</h1>
                <h2>Crea tu propio juego de trivia</h2>
                <form className="new-question-form">
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" />

                    <label htmlFor="theme">Temática:</label>
                    <select id="theme">
                        <option value="informatics">Preguntas de Informática y Programación</option>
                        <option value="ucaHistory">Historia y Cultura de la UCA</option>
                        <option value="elSalvadorFacts">Datos Curiosos sobre El Salvador</option>
                    </select>

                    <label htmlFor="questions">Lista de preguntas y respuestas:</label>
                    <textarea id="questions" placeholder="Ingrese su lista de preguntas y respuestas de manera ordenada"></textarea>

                    <button type="submit">Enviar</button>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default FormNewQuestion;
