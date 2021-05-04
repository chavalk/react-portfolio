import React from 'react';
import './style.css';

const Contact = () => {
    return (
        <div className="container" id="container-contact">
            <div className="row">
                <div className="col-md-3">
                </div>
                <div className="col-md-6">
                    <h1 id="contact">Contact</h1>
                    <p id="p-contact">I'm always open to new projects to collaborate on, so if you're in need of a full-stack JavaScript developer, please get in touch!</p>
                    <h3 id="h3-contact">Email:</h3>
                    <a href="mailto:chavalk@hotmail.com" id="email-contact">chavalk@hotmail.com</a>
                    <h3 id="h3-contact">Phone:</h3>
                    <a href="tel:+1-210-782-7463" id="phone-contact">210-782-7463</a>
                </div>
                <div className="col-md-3">
                </div>
            </div>
        </div>
    );
}

export default Contact;