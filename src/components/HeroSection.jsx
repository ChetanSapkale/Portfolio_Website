import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Row, Col, Image, Button,} from "react-bootstrap";
import "../styles/HeroSection.css";
import profile from "../assets/profile.jpg";

function HeroSection() {
  const [darkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("light-theme", !darkTheme);
    document.body.classList.toggle("dark-theme", darkTheme); // optional
  }, [darkTheme]);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant={darkTheme ? "dark" : "light"} bg={darkTheme ? "dark" : "light"} fixed="top" className="shadow-sm px-3">
        <Container>
          <Navbar.Brand href="#home"><b>CHETAN</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav className="gap-3">
              <Nav.Link href="#skills" className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }>
                Skills Acquired
              </Nav.Link>
              <Nav.Link href="#projects" className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }>
                Projects
              </Nav.Link>
              <Nav.Link href="#contact" className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }>
                Contact
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/chetan-sapkale-20b7362b1/" className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
              <i className="bi bi-linkedin"></i>
              </Nav.Link>
              <Nav.Link href="https://github.com/ChetanSapkale" className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
              <i className="bi bi-github"></i>
              </Nav.Link>
              <Button variant={darkTheme ? "outline-light" : "outline-dark"} onClick={() => setDarkTheme(!darkTheme)}>
                {darkTheme ? <i className="bi bi-sun-fill" /> : <i className="bi bi-moon-fill" />}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid className="hero-section d-flex justify-content-center align-items-center" id="home">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-light text-md-start text-center">
              <h5 className="text">Hi👋🏻, my name is</h5>
              <h1 className="display-4 fw-bold text-primary">Chetan Sapkale</h1>
              <p className="lead">
                I'm a passionate and skilled Frontend Developer with a strong
                foundation in HTML, CSS, and JavaScript. I've worked on several
                projects, including a responsive portfolio website, and I'm
                eager to learn new technologies and add new skills to my
                arsenal. Let's collaborate and bring my skills to new
                challenges.
              </p>
              {/* <div className="d-flex flex-wrap gap-4 mt-4 justify-content-center justify-content-md-start social-links">
                <a href="https://www.instagram.com/ft.chetannn_/?next=%2F&hl=en" target="_blank" rel="noopener noreferrer" className="icon-box text-center text-decoration-none">
                  <i className="bi bi-instagram fs-3"></i>  
                  <p className="mb-0 mt-1"></p>
                </a>
                <a href="https://x.com/chetannn_018_" target="_blank" rel="noopener noreferrer" className="icon-box text-center text-decoration-none">
                  <i className="bi bi-twitter-x fs-3"></i>
                  <p className="mb-0 mt-1">Twitter</p>
                </a>
              </div> */}
            </Col>
            <Col md={6} className="text-center pt-5 pt-md-0">
              <Image src={profile} roundedCircle fluid className="profile-img" alt="Profile"/>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default HeroSection;
