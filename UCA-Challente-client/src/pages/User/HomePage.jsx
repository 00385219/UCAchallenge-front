import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/HomePage.css';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import informatica from '../../assets/images/informatica.jpg';
import cultura from '../../assets/images/cultura.jpg';
import salvador from '../../assets/images/salvador.jpg';

function HomePage() {
  return (
    <>
      <Header />
      <div className="main-content">
        <h1>UCAchallenge</h1>
        <div className="categories">
          <Link to="/modo-juego" state={{ categoria: 'Informática' }} className="category-link">
            <div className="category">
              <img src={informatica} alt="Preguntas de Informática y Programación" />
              <div className="category-info informatica">
                <p>Preguntas de Informática y Programación</p>
              </div>
            </div>
          </Link>
          <Link to="/modo-juego" state={{ categoria: 'UCA' }} className="category-link">
            <div className="category">
              <img src={cultura} alt="Historia y Cultura de la UCA" />
              <div className="category-info cultura">
                <p>Historia y Cultura de la UCA</p>
              </div>
            </div>
          </Link>
          <Link to="/modo-juego" state={{ categoria: 'Cultura' }} className="category-link">
            <div className="category">
              <img src={salvador} alt="Datos Curiosos sobre El Salvador" />
              <div className="category-info salvador">
                <p>Datos Curiosos sobre El Salvador</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="search-box">
          <input type="search" placeholder="Buscar otro modo de juego" />
          <button type="submit"><i className="fas fa-search"></i></button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
