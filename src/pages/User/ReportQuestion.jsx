import React from 'react';
import '../../assets/css/ReportQuestion.css';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import warningIcon from '../../assets/images/warning-icon.png'; // Asegúrate de tener un ícono de advertencia aquí

function ReportQuestion() {
    return (
        <>
            <Header />
            <div className="report-question-container">
                <img src={warningIcon} alt="Warning" className="warning-icon"/>
                <h1>¿Cuál es el motivo de la denuncia de esta pregunta?</h1>
                <form className="report-form">
                    <label className="report-label">
                        <input type="radio" name="report-reason" value="inappropriate" /> Inapropiada
                    </label>
                    <label className="report-label">
                        <input type="radio" name="report-reason" value="incorrect" /> Incorrecta
                    </label>
                    <label className="report-label">
                        <input type="radio" name="report-reason" value="spam" /> Spam
                    </label>
                    <label className="report-label">
                        <input type="radio" name="report-reason" value="other" /> Otro
                    </label>
                    <button type="submit" className="report-button">ENVIAR DENUNCIA</button>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default ReportQuestion;
