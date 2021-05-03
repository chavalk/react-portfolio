import React from 'react';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: "rgba(0,0,0,0.8)" }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/"></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href='#top' className='nav-link' style={{ color: "white" }}>Home</a>
            </li>
            <li className="nav-item">
              <a href='#projects' className='nav-link' style={{ color: "white" }}>Portfolio</a>
            </li>
            <li className="nav-item">
              <a href='#contact' className='nav-link' style={{ color: "white" }}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;