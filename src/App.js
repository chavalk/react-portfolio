import './App.css';
import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <HashRouter basename='/'>
      <div>
        <ul className="nav justify-content-center pt-2 pb-2" id="list" style={{backgroundColor: "#06224A"}}>
          <li className="nav-item">
            <Link to='/' className="nav-link" style={{color: "#FFFFFF"}}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to='/about' className="nav-link" style={{color: "#FFFFFF"}}>About</Link>
          </li>
          <li className="nav-item">
            <Link to='/portfolio' className="nav-link" style={{color: "#FFFFFF"}}>Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link to='/contact' className="nav-link" style={{color: "#FFFFFF"}}>Contact</Link>
          </li>
        </ul>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
      </div>
    </HashRouter>
  );
}

const Home = () => <div><h2>Home</h2></div>
const About = () => <div><h2>About</h2></div>

export default App;
