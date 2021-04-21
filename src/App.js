import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
      <HashRouter basename="/">
        <Nav />
        <Route exact path='/' component={Home} />
        <Route path='/portfolio' component={Portfolio} />
        <Route exact path='/contact' component={Contact} />
      </HashRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
