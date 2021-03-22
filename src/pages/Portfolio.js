import React from 'react';
import './style.css';
import Project from '../components/Project';
import projects from '../projects.json';

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
                        <Project 
                            image={projects[0].image}
                            title={projects[0].title}
                            description={projects[0].description}
                            deployed={projects[0].deployed}
                            repo={projects[0].repo}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;