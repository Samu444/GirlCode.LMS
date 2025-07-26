import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigate = useNavigate(); // This defines the navigate function

  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="py-3">
      <Container>
        <img src="/GirlCode-Logo.png" alt="GirlCode Logo" className="logo-img" />

        <Nav className="ms-auto align-items-center">
          <Nav.Link href="#signup" onClick={() => navigate('/signup')}>Sign Up</Nav.Link>
          <Nav.Link href="#login" onClick={() => navigate('/login')}>Login</Nav.Link>
          
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
