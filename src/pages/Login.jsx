import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login form submitted:', formData);
    // Add your login logic here
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
    // Add Google authentication logic here
  };

  return (
    <Container className="login-page py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <div className="p-4 shadow-sm rounded bg-white">
            <h2 className="text-center mb-4">Login</h2>
            
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <div className="d-flex justify-content-between mb-3">
                <Form.Group>
                  <Form.Check
                    type="checkbox"
                    label="Remember me"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Link to="/forgot-password" className="text-decoration-none">
                  Forgot password?
                </Link>
              </div>

              <Button variant="primary" type="submit" className="w-100 mb-3">
                Login
              </Button>

              <div className="text-center mb-3">OR</div>

              <Button 
                variant="outline-danger" 
                className="w-100 d-flex align-items-center justify-content-center mb-3"
                onClick={handleGoogleLogin}
              >
                <FaGoogle className="me-2" />
                Login with Google
              </Button>

              <div className="text-center">
                Don't have an account?{' '}
                <Link to="/signup" className="text-decoration-none">
                  Sign up
                </Link>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;