import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NaviBar = () => {
  const [path, setPath] = useState(window.location.pathname);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              onClick={() => setPath("/")}
              style={{ color: path === "/" ? "black" : "gray" }}
              className="nav-link"
              to="/"
            >
              Counter
            </Link>
            <Link
              onClick={() => setPath("/recepts")}
              style={{ color: path === "/recepts" ? "black" : "gray" }}
              className="nav-link"
              to="/recepts"
            >
              Recepts
            </Link>
            <Link
              onClick={() => setPath("/register")}
              style={{ color: path === "/register" ? "black" : "gray" }}
              className="nav-link"
              to="/register"
            >
              Register
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NaviBar;
