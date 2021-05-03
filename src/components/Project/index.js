import React from 'react';

const Project = (props) => {
    return (
        <div className="col-md-4 mb-3">
            <div className="card text-center shadow-lg p-1 mb-2 bg-body rounded h-100" style={{ width: "100%" }}>
                <img src={props.image} className="card-img-top" alt="Website"></img>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <h6>Technologies used:</h6><p>{props.technologies}</p>
                    <a href={props.deployed} target="_blank" rel="noreferrer" className="btn btn-dark mr-1">See it Live</a>
                    <a href={props.repo} target="_blank" rel="noreferrer" className="btn btn-dark">View Code</a>
                </div>
            </div>
        </div>
    );
}

export default Project;