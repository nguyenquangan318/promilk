/** @format */

import React from 'react';
import bannerBg from '../../assets/mobileBg.png';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';
import bgImg from '../../assets/bg.png';

function NavbarProducts() {
    return (
        <div className={'navbarProducts'}>
            <div className={'banner'}>
                <Navbar bg="light" expand="md" sticky="top" className={'ppx-bg-product-bg-green ppx-shadow-2xl'}>
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />

                        <Navbar.Brand href="#home" className={'text-center'}>
                            PROMILK
                        </Navbar.Brand>

                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto"></Nav>

                            <Nav>
                                <Nav.Link href="#deets">Trang chủ</Nav.Link>
                                <Nav.Link href="#memes">Sản phẩm</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
}

export default NavbarProducts;