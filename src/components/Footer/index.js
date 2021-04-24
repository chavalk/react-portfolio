import React from 'react';
import './style.css';

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="icons">
                    <a href="https://www.linkedin.com/in/jose-s-garcia" target="_blank" rel="noreferrer" id="linkedin"><i className="fab fa-linkedin-in fa-3x"></i></a>
                    <a href="https://github.com/chavalk" target="_blank" rel="noreferrer" id="github"><i className="fab fa-github fa-3x"></i></a>
                    <a href="https://twitter.com/chavalk" target="_blank" rel="noreferrer" id="twitter"><i className="fab fa-twitter fa-3x"></i></a>
                </div>
                <p id="p-footer">Jose Garcia &copy; 2021</p>
            </div>
        </footer>
    );
}

export default Footer;