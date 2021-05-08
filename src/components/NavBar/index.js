import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="" variant="dark" fixed="top" style={{ backgroundColor: "rgba(0,0,0,0.8" }}>
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features"></Nav.Link>
          <Nav.Link href="#pricing"></Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#top">Home</Nav.Link>
          <Nav.Link href="#projects">Portfolio</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;