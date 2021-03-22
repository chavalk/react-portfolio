import React from 'react';
import './style.css';

const Portfolio = () => {
    return (
        <div className="container" id="container-portfolio">
            <div className="row">
                <div className="col-md-2">
                    <div className="col-md-8">
                        <h1>Portfolio</h1>
                        <p id="p-portfolio">Below are some of the projects I've worked on thus far.</p>
                        <div className="row">
                            <div className="col-md-6">

                                <div className="card mb-3 text-center" style={{width: "100%"}}>
                                    <img src="./images/pill-box.png" className="card-img-top" alt="Website"></img>
                                        <div className="card-body">
                                            <h5 className="card-title">Pill Box</h5>
                                            <p className="card-text">Application to help caretakers efficiently manage their patients' medication.</p>
                                            <a href="https://infinite-mesa-67411.herokuapp.com/" target="_blank" rel="noreferrer" className="btn btn-dark">See it Live</a>
                                            <a href="https://github.com/chavalk/Pill-Box" target="_blank" rel="noreferrer" className="btn btn-dark">View Code</a>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;