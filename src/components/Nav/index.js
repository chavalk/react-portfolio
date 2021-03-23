import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: "rgba(0,0,0,0.8)" }}>
      <div className="container-fluid">
        <Link to='/' className='navbar-brand'>Jose</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to='/' className='nav-link'>About</Link>
            </li>
            <li className="nav-item">
              <Link to='/portfolio' className='nav-link'>Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link to='/contact' className='nav-link'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;