import React from 'react';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "rgba(0,0,0,0.8)"}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">Jose Garcia</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="index.html">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="portfolio.html">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
    </nav>
    );
}

export default Nav;