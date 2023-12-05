import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Importa axios para realizar solicitudes HTTP
import '../../assets/css/RegisterUser.css';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import registerImage from '../../assets/images/login-user.png';

function RegisterUser() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Esta función actualiza el estado del formulario cada vez que el usuario escribe algo
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    // Esta función se ejecuta cuando el formulario se envía
    const handleSubmit = async (e) => {
        e.preventDefault(); // Previene la recarga de la página
        try {
            // Envía una solicitud POST al backend con los datos del formulario
            const response = await axios.post('https://giant-waders.cyclic.app/api/auth/register', formData);
            if (response.data) {
                // Si el registro es exitoso, redirige al usuario al inicio de sesión
                navigate('/iniciar-sesion');
            }
        } catch (err) {
            // Maneja errores de la solicitud
            if (err.response) {
                // Si el servidor responde con un error, lo muestra en el formulario
                setError(err.response.data.error);
            } else {
                // Si hay un error al hacer la solicitud, muestra un mensaje genérico
                setError('Ocurrió un error al registrarse. Por favor, intente de nuevo.');
            }
        }
    };

    return (
        <>
            <Header />
            <div className="register-wrapper">
                <div className="register-content">
                    <div className="register-form-container">
                        <h2 className="register-title">Regístrate en UCAchallenge</h2>
                        <form className="register-form" onSubmit={handleSubmit}>
                            {/* Campo de texto para el nombre de usuario */}
                            <label htmlFor="username">USUARIO:</label>
                            <input type="text" id="username" value={formData.username} onChange={handleChange} required />
                            {/* Campo de texto para el correo electrónico */}
                            <label htmlFor="email">CORREO:</label>
                            <input type="email" id="email" value={formData.email} onChange={handleChange} required />
                            {/* Campo de contraseña para la contraseña */}
                            <label htmlFor="password">CONTRASEÑA:</label>
                            <input type="password" id="password" value={formData.password} onChange={handleChange} required />
                            {/* Botón de envío */}
                            <button type="submit">Registrarse</button>
                        </form>
                        {error && <p className="error-message">{error}</p>}
                        <div className="admin-prompt">
                            ¿Eres administrador? <Link to="/admin-login" className="admin-link">INICIAR CON ADMINISTRADOR</Link>
                        </div>
                    </div>
                    <div className="register-image">
                        <img src={registerImage} alt="Registro" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default RegisterUser;
