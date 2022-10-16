import React from "react";
// import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "../components/CustomNavbarStyle.css";

const CustomNavbar = () => {
  // const [show, setShow] = useState(false);
  // const [show1, setShow1] = useState(false);
  // const [show2, setShow2] = useState(false);
  // const [show3, setShow3] = useState(false);
  // const [show4, setShow4] = useState(false);

  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        style={{
          backgroundImage: "linear-gradient(180deg, #D8381A 3%, #BF0B5E 91%)",
          height: 60
        }}
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navcus">
              <Nav.Link className="navItem" href="/">
                Home
              </Nav.Link>
              <NavDropdown
                renderMenuOnMount={true}
                className="navItem"
                title="About Us"
                id="basic-nav-dropdown"
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
              <NavDropdown
                className="navItem"
                title="Organiztional Structure"
                renderMenuOnMount={true}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Executive committee</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className="navItem"
                title="Publication"
                renderMenuOnMount={true}
                id="basic-nav-dropdown"
              >

                <NavDropdown.Item><Link to="/publication/magzines"> Magzines </Link></NavDropdown.Item>

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
                Join BSM
              </Nav.Link>
              {/* <Nav.Link className="navItem" href="#login">
                Login
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
