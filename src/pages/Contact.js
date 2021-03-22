import React from 'react';
import './style.css';

const Contact = () => {
    return (
        <div class="container" id="container-portfolio">
            <div class="row">
                <div class="col-md-2">
                </div>
                <div class="col-md-8">
                    <h1 id="h1-contact">Contact</h1>
                    <p id="p-portfolio">Feel free to reach me by email at <a href="mailto:chavalk@hotmail.com" id="email">chavalk@hotmail.com</a> or by phone at <a href="tel:+1-210-782-7463" id="phone">210-782-7463</a>.</p>
                    <div class="icons">
                        <a href="https://www.linkedin.com/in/jose-garcia-9635337a" target="_blank" rel="noreferrer" id="linkedin"><i class="fab fa-linkedin-in fa-3x"></i></a>
                        <a href="https://github.com/chavalk" target="_blank" rel="noreferrer" id="github"><i class="fab fa-github fa-3x"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;