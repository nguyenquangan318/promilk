import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Row, Col, Button, Figure} from "react-bootstrap";

import LightGallery from 'lightgallery/react';
// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import logo from './assets/images/logo.jpg'
import p1 from './assets/images/products/pedilac/IGC_8532.png'
import p2 from './assets/images/products/pedilac/IGC_8529.png'
import p3 from './assets/images/products/pedilac/IGC_8531.png'
import bandage from './assets/bandge.svg'

import cert1 from './assets/images/certs/1.jpg'
import cert2 from './assets/images/certs/2.jpg'


function App() {
    return (
        <div className="App">
            <div className={'header'}>
                <Navbar bg="light" expand="lg">
                    <Container fluid={true}>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

            <div className={'brand ppx-bg-bg-green ppx-h-128'}>
                <div className={'ppx-container ppx-h-full'}>
                    <Row className={'ppx-h-full'}>
                        <Col xs={12} md={4}>
                            <div className={'ppx-flex ppx-flex-col ppx-justify-center ppx-h-full'}>
                                <p className={'ppx-text-brand-green ppx-font-semibold ppx-text-2xl ppx-leading-9 mb-2'}>Tín
                                    - Tâm - Tình</p>

                                <p className={'ppx-font-semibold ppx-text-5xl ppx-leading-tight ppx-uppercase mb-3'}
                                   style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', color: 'rgba(0,0,0,0.83)'}}>
                                    Sữa bột <br/> Dinh Dưỡng
                                </p>

                                <p className={'ppx-text-gray-600 ppx-text-lg mb-4'}>Sự hài lòng của khách hàng là thành
                                    công của
                                    Promilk</p>

                                <Button variant="success" size={'lg'}
                                        className={'ppx-bg-brand-green ppx-w-1/3 ppx-rounded-3xl'}>
                                    Learn more
                                </Button>
                            </div>
                        </Col>

                        <Col xs={12} md={8} className={'ppx-h-full'}>
                            <div className={'ppx-flex ppx-flex-row ppx-h-full ppx-items-center ppx-justify-center'}>
                                <img src={logo} alt={"Brand"} className={'ppx-h-2/3 ppx-w-auto'}/>
                            </div>
                        </Col>
                    </Row>
                </div>

            </div>

            <div className={'promotion mt-5 mb-3 text-center'}>
                <Container>
                    <p className={'ppx-font-semibold ppx-text-3xl'}>Giới thiệu sản phẩm</p>
                    <p className={'ppx-font-normal ppx-text-lg ppx-text-subtitle-gray mt-2 ppx-leading-7'}>Dưới đây là
                        video giới thiệu sản
                        phẩm của chúng tôi. Để hiểu hơn về sản phẩm bạn có thể xem video này!</p>
                </Container>

                <div className={'videoPlayer mt-3 ppx-flex ppx-justify-center'}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/36TFKpVwHrU"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>

            </div>

            <div className={'products mt-5 mb-3 text-center'}>
                <Container>
                    <p className={'ppx-font-semibold ppx-text-3xl'}>Sản phẩm của chúng tôi</p>
                </Container>

                <Row className={'ppx-container ppx-h-full'}>
                    <Col xs={6} md={4}>
                        <Figure>
                            <Figure.Image
                                className={"ppx-h-96 ppx-w-auto"}
                                alt="171x180"
                                src={p1}
                            />
                        </Figure>
                    </Col>

                    <Col xs={6} md={4}>
                        <Figure>
                            <Figure.Image
                                className={"ppx-h-96 ppx-w-auto"}
                                alt="171x180"
                                src={p1}
                            />
                        </Figure>
                    </Col>

                    <Col xs={6} md={4}>
                        <Figure>
                            <Figure.Image
                                className={"ppx-h-96 ppx-w-auto"}
                                alt="171x180"
                                src={p1}
                            />
                        </Figure>
                    </Col>

                </Row>

                <p className={'ppx-text-brand-green ppx-font-semibold text-center ppx-text-lg'}>Tất cả sản phẩm</p>
            </div>

            <div className={'about mt-5 mb-3 ppx-bg-bg-green py-5'}>
                <div className={'container'}>
                    <Row>
                        <Col>
                            <p className={'ppx-font-bold ppx-text-3xl'}>Về chúng tôi</p>

                            <p className={'ppx-text-gray-500 mt-3 ppx-text-lg ppx-w-2/3'}>PROMILK là dây truyền sản xuất
                                sữa bột dinh dưỡng cho trẻ em, phụ nữ mang thai và cho
                                người lớn tuổi. </p>

                            <Button className={'ppx-bg-brand-green mt-4 ppx-rounded-2xl'} size={'lg'}>
                                Contact Us
                            </Button>
                        </Col>

                        <Col>
                            <Row className={'mb-4'}>
                                <Col xs={2}>
                                    <img src={bandage} alt={'icon'}/>
                                </Col>

                                <Col>
                                    <p className={'ppx-text-2xl ppx-font-semibold'}>Mục tiêu</p>

                                    <p className={'ppx-text-base ppx-text-gray-600 mt-1'}>Cải thiện chất lượng sản phẩm
                                        hiện tại, nghiên cứu sản phẩm mới để ra mắt thị
                                        trường nhằm đa dạng hóa sản phẩm và đáp ứng nhu cầu người tiêu dùng ngày càng
                                        cao. PROMILK không ngừng đầu tư trang thiết bị, nguồn nhân lực và năng lực quản
                                        lý.</p>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={2}>
                                    <img src={bandage} alt={'icon'}/>
                                </Col>

                                <Col>
                                    <p className={'ppx-text-2xl ppx-font-semibold'}>Mục tiêu</p>

                                    <p className={'ppx-text-base ppx-text-gray-600 mt-1'}>Cải thiện chất lượng sản phẩm
                                        hiện tại, nghiên cứu sản phẩm mới để ra mắt thị
                                        trường nhằm đa dạng hóa sản phẩm và đáp ứng nhu cầu người tiêu dùng ngày càng
                                        cao. PROMILK không ngừng đầu tư trang thiết bị, nguồn nhân lực và năng lực quản
                                        lý.</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>

            </div>

            <div className={'ppx-mt-32'}>
                <div className={'ppx-container'}>
                    <div className={'ppx-bg-bg-green py-5 ppx-rounded-lg text-center'}>
                        <Row>
                            <Col>
                                <img src={cert1} alt={'cert 1'} className={'ppx-w-auto ppx-h-128 mx-auto'}/>
                            </Col>

                            <Col>
                                <img src={cert2} alt={'cert 1'} className={'ppx-w-auto ppx-h-128 mx-auto'}/>
                            </Col>
                        </Row>

                        <p className={'mt-5 ppx-font-normal ppx-text-lg'}>PROMILK đã đạt chuẩn vệ sinh an toàn thực phẩm tại Việt Nam</p>
                    </div>
                </div>
            </div>

            <div className={'footer mt-5 ppx-bg-brand-green pt-4'}>
                <div className={'ppx-container'}>
                    adad
                </div>

            </div>

        </div>
    )
}

export default App
