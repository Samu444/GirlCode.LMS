import React, { useState } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import SignUp from '../pages/SignUp'; // Add this import
import './Header.css';

function Header() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark" className="py-3">
        <Container>
          <Navbar.Brand onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            <img src="/GirlCode-Logo.png" alt="GirlCode Logo" className="logo-img" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              {currentUser ? (
                <>
                  <Nav.Link onClick={() => navigate('/learner-dashboard')}>
                    Dashboard
                  </Nav.Link>
                  <Button 
                    variant="outline-light" 
                    onClick={() => {
                      // Implement logout logic here
                      navigate('/');
                    }}
                    className="ms-2"
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Nav.Link 
                    onClick={() => setShowSignup(true)}
                    className="me-2"
                  >
                    Sign Up
                  </Nav.Link>
                  <Button 
                    variant="outline-light" 
                    onClick={() => navigate('/login')}
                  >
                    Login
                  </Button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Use your actual SignUp modal */}
      <SignUp 
        isOpen={showSignup} 
        onClose={() => setShowSignup(false)} 
      />
    </>
  );
}

export default Header;