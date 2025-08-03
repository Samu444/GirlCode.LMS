import React from 'react';
import './FacilitatorDashboard.css';
import { Button, Card, Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

const FacilitatorDashboard = () => {
  return (
    <div className="facilitator-dashboard d-flex">
      {/* Sidebar */}
      <div className="sidebar bg-dark text-white p-3">
        <h4 className="mb-4">Facilitator</h4>
        <Nav className="flex-column">
          <Nav.Link href="#" className="text-white">Dashboard</Nav.Link>
          <Nav.Link href="#" className="text-white">Courses</Nav.Link>
          <Nav.Link href="#" className="text-white">Create Quiz</Nav.Link>
          <Nav.Link href="#" className="text-white">Grade Tests</Nav.Link>
          <Nav.Link href="#" className="text-white">Messages</Nav.Link>
          <Nav.Link href="#" className="text-white mt-auto">Logout</Nav.Link>
        </Nav>
      </div>

      {/* Main Content */}
      <div className="main-content flex-grow-1">
        <Navbar bg="light" expand="lg" className="mb-4 shadow-sm">
          <Container fluid>
            <Navbar.Brand>Welcome, Facilitator</Navbar.Brand>
          </Container>
        </Navbar>

        <Container fluid>
          <Row className="g-3">
            <Col md={4}>
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Title>Assigned Courses</Card.Title>
                  <Card.Text className="display-6">3</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Title>Quizzes Created</Card.Title>
                  <Card.Text className="display-6">12</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Title>Messages</Card.Title>
                  <Card.Text className="display-6">5</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <section className="mt-5">
            <h5>Quick Actions</h5>
            <Row className="g-3">
              <Col md={6}>
                <Button className="w-100" variant="primary">Create New Assignment</Button>
              </Col>
              <Col md={6}>
                <Button className="w-100" variant="secondary">Grade Pending Tests</Button>
              </Col>
            </Row>
          </section>
        </Container>
      </div>
    </div>
  );
};

export default FacilitatorDashboard;
