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
                    <h5 id="p-portfolio">Below are some of the projects I've worked on:</h5>
                    <div className="row">
                        <Project 
                            image={projects[0].image}
                            title={projects[0].title}
                            description={projects[0].description}
                            deployed={projects[0].deployed}
                            repo={projects[0].repo}
                        />
                        <Project 
                            image={projects[1].image}
                            title={projects[1].title}
                            description={projects[1].description}
                            deployed={projects[1].deployed}
                            repo={projects[1].repo}
                        />
                    </div>
                    <div className="row">
                        <Project 
                            image={projects[2].image}
                            title={projects[2].title}
                            description={projects[2].description}
                            deployed={projects[2].deployed}
                            repo={projects[2].repo}
                        />
                        <Project 
                            image={projects[3].image}
                            title={projects[3].title}
                            description={projects[3].description}
                            deployed={projects[3].deployed}
                            repo={projects[3].repo}
                        />
                    </div>
                    <div className="row">
                        <Project 
                            image={projects[4].image}
                            title={projects[4].title}
                            description={projects[4].description}
                            deployed={projects[4].deployed}
                            repo={projects[4].repo}
                        />
                        <Project 
                            image={projects[5].image}
                            title={projects[5].title}
                            description={projects[5].description}
                            deployed={projects[5].deployed}
                            repo={projects[5].repo}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;