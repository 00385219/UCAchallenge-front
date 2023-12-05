import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../assets/css/LoginUser.css';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import loginImage from '../../assets/images/login-user.png';

function LoginUser() {
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://giant-waders.cyclic.app/api/auth/login', {
                identifier: loginData.username,
                password: loginData.password,
            });

            if (response.data.token) {
                // Almacena el token JWT y la información del usuario
                localStorage.setItem('token', response.data.token);

                localStorage.setItem('user', response.data.usuario);
                console.log("Informacion guardada en localStorage", response.data);
                // Redirige al usuario a la página principal o a su perfil
                navigate('/'); // Ajusta esta ruta según sea necesario
            } else {
                // Maneja el caso en que no hay token en la respuesta
                setError('Error al iniciar sesión. Por favor, inténtelo de nuevo.');
            }
        } catch (err) {
            // Maneja los errores de la solicitud
            if (err.response) {
                setError(err.response.data.error);
            } else {
                setError('Error al iniciar sesión. Inténtelo de nuevo.');
            }
        }
    };

    /*
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4500/api/auth/login', {
                identifier: loginData.username, // Asegúrate de que esto coincida con el backend
                password: loginData.password,
            });
            if (response.data.token) {
                // Guarda el token JWT en localStorage o en un estado global (como Redux)
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('usuario', response.data.usuario); // Asegúrate de que el backend envíe el nombre del usuario
                // Redirige al usuario a su perfil o a la página principal
                navigate('/'); // Asegúrate de cambiar esto a la ruta correcta
                console.log("Informacion guardada en localStorage", response.data);
            }
        } catch (err) {
            if (err.response) {
                setError(err.response.data.error);
            } else {
                setError('Error al iniciar sesión. Inténtelo de nuevo.');
            }
        }
    };  */

    return (
        <>
            <Header />
            <div className="login-wrapper">
                <div className="login-content">
                    <div className="login-form-container">
                        <h2 className="login-title">Inicia sesión en UCAchallenge</h2>
                        <form className="login-form" onSubmit={handleSubmit}>
                            <label htmlFor="username">USUARIO:</label>
                            <input type="text" id="username" value={loginData.username} onChange={handleChange} required />
                            <label htmlFor="password">CONTRASEÑA:</label>
                            <input type="password" id="password" value={loginData.password} onChange={handleChange} required />
                            <button type="submit">Iniciar</button>
                        </form>
                        {error && <p className="error-message">{error}</p>}
                        <div className="register-prompt">
                            ¿AÚN NO TIENES CUENTA?
                            <Link to="/registro-usuario" className="register-link">REGÍSTRATE AQUÍ</Link>
                        </div>
                    </div>
                    <div className="login-image">
                        <img src={loginImage} alt="Login" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default LoginUser;
