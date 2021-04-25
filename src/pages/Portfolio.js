import React from 'react';
import './style.css';
import Project from '../components/Project';
import projects from '../projects.json';
import aLists from "../images/a-lists-small.png";
import pillBox from "../images/pill-box.png";
import googleBooks from "../images/google-books-search.png";
import workoutTracker from "../images/workout-tracker.png";
import budgetTracker from "../images/budget-tracker.png";
import weatherDashboard from "../images/weather-dashboard.png";

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
                            image={aLists}
                            title={projects[0].title}
                            description={projects[0].description}
                            technologies={projects[0].technologies}
                            deployed={projects[0].deployed}
                            repo={projects[0].repo}
                        />
                        <Project 
                            image={pillBox}
                            title={projects[1].title}
                            description={projects[1].description}
                            technologies={projects[1].technologies}
                            deployed={projects[1].deployed}
                            repo={projects[1].repo}
                        />
                    </div>
                    <div className="row">
                        <Project 
                            image={googleBooks}
                            title={projects[2].title}
                            description={projects[2].description}
                            technologies={projects[2].technologies}
                            deployed={projects[2].deployed}
                            repo={projects[2].repo}
                        />
                        <Project 
                            image={workoutTracker}
                            title={projects[3].title}
                            description={projects[3].description}
                            technologies={projects[3].technologies}
                            deployed={projects[3].deployed}
                            repo={projects[3].repo}
                        />
                    </div>
                    <div className="row">
                        <Project 
                            image={budgetTracker}
                            title={projects[4].title}
                            description={projects[4].description}
                            technologies={projects[4].technologies}
                            deployed={projects[4].deployed}
                            repo={projects[4].repo}
                        />
                        <Project 
                            image={weatherDashboard}
                            title={projects[5].title}
                            description={projects[5].description}
                            technologies={projects[5].technologies}
                            deployed={projects[5].deployed}
                            repo={projects[5].repo}
                        />
                    </div>
                </div>
                <div className="col-md-2">
                </div>
            </div>
        </div>
    );
}

export default Portfolio;