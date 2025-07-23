import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './Header.css';

function Header() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="py-3">
      <Container>
        <img src="/GirlCode-Logo.png" alt="GirlCode Logo" className="logo-img" />

        <Nav className="ms-auto align-items-center">
          <Nav.Link href="#signup">Sign Up</Nav.Link>
          <Nav.Link href="#login">Login</Nav.Link>
          
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
