import React from 'react';
import pillBox from '../../images/pill-box.png';

const Project = () => {
    return (
        <div className="col-md-6">
            <div className="card mb-3 text-center" style={{ width: "100%" }}>
                <img src={pillBox} className="card-img-top" alt="Website"></img>
                <div className="card-body">
                    <h5 className="card-title">Pill Box</h5>
                    <p className="card-text">Application to help caretakers efficiently manage their patients' medication.</p>
                    <a href="https://infinite-mesa-67411.herokuapp.com/" target="_blank" rel="noreferrer" className="btn btn-dark mr-1">See it Live</a>
                    <a href="https://github.com/chavalk/Pill-Box" target="_blank" rel="noreferrer" className="btn btn-dark">View Code</a>
                </div>
            </div>
        </div>
    );
}

export default Project;