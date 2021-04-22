import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Home = () => {
    return (
        <div className="container" id="container-home">
            <div className="row">
                <div className="col-md-4">
                    <img src="https://www.josesgarcia.com/images/profile-small.jpg" className="img-fluid rounded shadow-lg" alt="Profile"></img>
                </div>
                <div className="col-md-8">
                    <h1 className="ml-4 mt-4" id="h1-home">Hello, my name is Jose Garcia.</h1>
                    <h1 className="ml-4" id="h1-home">I'm a full-stack web developer.</h1>
                    <h4 className="ml-4">Some of the languages and technologies I use are:</h4>
                    <p className="p-home ml-4">React.js, MongoDB, Node.js, Express.js, Git, JavaScript, MySQL, Bootstrap, jQuery, Ajax, APIs, Object Oriented Programming, Linting and Continuous Integration, Progressive Web Apps, Web Optimization, Object Relational Mapping, Handlebars, HTML5, and CSS3.</p>
                    <p className="p-home ml-4">Please take a moment to review my <Link to="/portfolio" id="portfolio">portfolio</Link> to see the projects I've worked on.</p>
                    <p className="p-home ml-4">I can be reached by email at <a href="mailto:chavalk@hotmail.com" id="email">chavalk@hotmail.com</a> or by phone at <a href="tel:+1-210-782-7463" id="phone">210-782-7463</a>.</p>
                    <p className="p-home ml-4">Based in <a href="https://www.google.com/maps/place/San+Antonio,+TX/@29.481137,-98.7945945,10z/data=!3m1!4b1!4m5!3m4!1s0x865c58af04d00eaf:0x856e13b10a016bc!8m2!3d29.4241219!4d-98.4936282" id="location" target="_blank" rel="noreferrer">San Antonio, Texas</a>. Feel free to check my <a href="https://www.josesgarcia.com/technical-resume.pdf" id="resume" target="_blank" rel="noreferrer">resume</a>.</p>
                    <div className="icons">
                        <a href="https://www.linkedin.com/in/jose-s-garcia" target="_blank" rel="noreferrer" id="linkedin"><i className="fab fa-linkedin-in fa-3x"></i></a>
                        <a href="https://github.com/chavalk" target="_blank" rel="noreferrer" id="github"><i className="fab fa-github fa-3x"></i></a>
                        <a href="https://twitter.com/chavalk" target="_blank" rel="noreferrer" id="twitter"><i className="fab fa-twitter fa-3x"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;