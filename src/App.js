import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
