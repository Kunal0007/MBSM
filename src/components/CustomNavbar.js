import React from "react";
// import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../components/CustomNavbarStyle.css";

const CustomNavbar = () => {  

  return (
    <div>
      <Navbar collapseOnSelect
        bg="dark"
        variant="dark"
        expand="lg"
        style={{
          backgroundImage: "linear-gradient(180deg, #D8381A 3%, #BF0B5E 91%)",
          height: 60
        }}
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" style={{
              backgroundImage: "linear-gradient(180deg, #D8381A 3%, #BF0B5E 91%)",
            }}>
              <Nav.Link className="navItem" href="/">
                Home
              </Nav.Link>
              <NavDropdown                                
                title="About Us"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.2">
                  Introduction
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  History
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Vission & Mission
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="navItem" href="#events">
                Events
              </Nav.Link>
              <NavDropdown                
                title="Organiztional Structure"                
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Executive committee</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown                
                title="Publication"                
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="/publication/magzines"> Magzines </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Question papers for schools
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Books
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Research Papers
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="navItem" href="#join">
                Join MBSM
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
