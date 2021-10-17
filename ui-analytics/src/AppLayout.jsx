import React, { Component } from "react";
import { Container, Navbar, Nav } from 'react-bootstrap';
class AppLayout extends Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" >
          <Container>
            <Navbar.Brand href="/">Analytics</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#page1">Page 1</Nav.Link>
                <Nav.Link href="#pricing">Page 1</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {children}
      </>
    )
  }
}

export default AppLayout;