import React from 'react';

const Project = (props) => {
    return (
        <div className="col-md-6">
            <div className="card mb-3 text-center" style={{ width: "100%" }}>
                <img src={props.image} className="card-img-top" alt="Website"></img>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <h6>Technologies used:</h6><p>Handlebars, MySQL, HTML5, and CSS3.</p>
                    <a href={props.deployed} target="_blank" rel="noreferrer" className="btn btn-dark mr-1">See it Live</a>
                    <a href={props.repo} target="_blank" rel="noreferrer" className="btn btn-dark">View Code</a>
                </div>
            </div>
        </div>
    );
}

export default Project;