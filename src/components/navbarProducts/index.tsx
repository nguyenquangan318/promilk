/** @format */

import React from 'react';
import bannerBg from '../../assets/mobileBg.png';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';
import bgImg from '../../assets/bg.png';
import { Link } from 'react-router-dom';

function NavbarProducts() {
    return (
        <div className={'navbarProducts'}>
            <div className={'banner'}>
                <Navbar bg="light" expand="md" fixed={'top'} className={'ppx-bg-product-bg-green ppx-shadow-md'}>
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />

                        <Navbar.Brand href="#home" className={'text-center ppx-font-semibold'}>
                            <Link to={'/'}>PROMILK</Link>
                        </Navbar.Brand>

                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto"></Nav>

                            <Nav>
                                <Nav.Link>
                                    <Link to={'/'}>Trang chủ</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to={'/products'}>Sản phẩm</Link>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
}

export default NavbarProducts;
