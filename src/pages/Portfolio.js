import React from 'react';
import './style.css';
import Project from '../components/Project';

const Portfolio = () => {
    return (
        <div className="container" id="container-portfolio">
            <div className="row">
                <div className="col-md-2">
                </div>
                <div className="col-md-8">
                    <h1>Portfolio</h1>
                    <p id="p-portfolio">Below are some of the projects I've worked on thus far.</p>
                    <div className="row">
                        <Project />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;