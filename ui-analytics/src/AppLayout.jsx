import React, { Component } from "react";
import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLinker } from "./NavLinker";
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
                <NavLinker path="/" text="Dashboard 1" />
                <NavLinker path="/dashboard2" text="Dashboard 2" />
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