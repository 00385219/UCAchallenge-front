import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/css/Header.css';
import ucaLogo from '../../assets/images/logo-uca.png'

function Header() {

    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const usuario = localStorage.getItem('user') || 'Usuario'; // Obtén el nombre del usuario o un valor por defecto
    const isUserLoggedIn = !!token; // Convierte la presencia del token en un booleano

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user'); // Asegúrate de eliminar también el nombre del usuario
        navigate('/'); // Redirige al usuario a la página de inicio después del cierre de sesión
        // Opcionalmente, podrías forzar un recargado completo de la página para limpiar completamente el estado de la aplicación
    };

    return (
        <header>
            <nav>
                <Link to="/" className="logo">
                    <img src={ucaLogo} alt="Logo UCA" />
                </Link>
                <div className="nav-links">
                    <Link to="/">Inicio</Link>
                    <Link to="/crear-juego">Solicitar pregunta</Link>
                    <Link to="/puntajes">Puntajes</Link>
                    {isUserLoggedIn ? (
                        <button className ="session-button" onClick={handleLogout}>
                            {`Cerrar Sesión (${usuario})`} {/* Reemplaza 'usuario' con el nombre real del usuario */}
                        </button>
                    ) : (
                        <Link to="/iniciar-sesion" className="session-button">Iniciar Sesión</Link>
                    )}
                </div>
            </nav>
        </header>
    );
}

export default Header;
