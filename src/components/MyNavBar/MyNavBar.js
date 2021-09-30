import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import './MyNavBar.css'

import CartWidget from '../CardWigdet/CartWidget';

function myNavBar() {
    return (
        <>
            <Navbar collapseOnSelect fixed='top' expand='sm' bg="primary" variant="dark">
                <Container fluid className="container-navbar">
                    <Navbar.Brand className="px-3" href="#home">Pet Shop
                        <img
                            src="/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                   
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    
                    <Navbar.Collapse id='responsive-navbar-nav'>

                        <Nav className="px-3 justify-content-center">
                            <Nav.Link className="px-4" href="#home">Inicio</Nav.Link>
                            <Nav.Link className="px-4" href="#features">Comida</Nav.Link>
                            <Nav.Link className="px-4" href="#pricing">Accesorios</Nav.Link>
                            <Nav.Link className="px-4" href="#pricing">Servicios</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Brand   className="px-3" href="#home">
                        <CartWidget
                        />
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default myNavBar
