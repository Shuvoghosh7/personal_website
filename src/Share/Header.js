import React from 'react';
import { Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css'
import img from '../images/images.png'
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
                <Container>
                    <Navbar.Brand href="#home"><img className='image' src={img} alt="" /></Navbar.Brand>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                    </Form>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Write Review</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Software</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                Sales
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Merkatting</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={2} href="#memes">
                            <button type="button" class="btn btn-outline-success">Join or Sing in</button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;