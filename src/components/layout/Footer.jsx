import React from 'react';
import '../../assets/css/Footer.css';

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-section">
                    <h2>INFORMATION</h2>
                    <p>Demuestra tu conocimiento sobre la UCA, la informática y las curiosidades salvadoreñas mientras te sumerges en un juego emocionante y educativo</p>
                    <div className="social-icons">
                        <a href="https://www.facebook.com" target="_blank"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://www.twitter.com" target="_blank"><i className="fab fa-twitter"></i></a>
                        <a href="https://www.instagram.com" target="_blank"><i className="fab fa-instagram"></i></a>


                    </div>
                </div>
                <div className="footer-section">
                    <h2>CONTACT US</h2>
                    <p><a href="mailto:UcaChallenge@uca.com">UCAchallenge@uca.com</a></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
