import React from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <NavBar />
        <Home />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
