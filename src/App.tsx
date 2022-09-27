/** @format */

import React from 'react';

import bannerBg from './assets/mobileBg.png';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import bgImg from './assets/bg.png';
import { Button, Col, Figure, Row } from 'react-bootstrap';
import p1 from './assets/images/products/pedilac/IGC_8532.png';
import bandage from './assets/bandge.svg';

function App() {
    return (
        <div className="App">
            <div className={'header'}>
                {/*For mobile only*/}

                <div
                    className={'md:ppx-hidden banner'}
                    style={{
                        backgroundImage: `url(${bannerBg})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'fit',
                        height: '100vh',
                    }}
                >
                    <Navbar bg="light" expand="md" className={'ppx-bg-transparent md:ppx-bg-white'}>
                        <Container>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />

                            <Navbar.Brand href="#home" className={'text-center'}>
                                PROMILK
                            </Navbar.Brand>

                            <Navbar.Collapse id="basic-navbar-nav" className={'ppx-bg-gray-100 md:ppx-bg-white'}>
                                <Nav className="me-auto"></Nav>

                                <Nav>
                                    <Nav.Link href="#deets">Trang chủ</Nav.Link>
                                    <Nav.Link href="#memes">Sản phẩm</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                    <div className={'ppx-mt-16 px-4'}>
                        <p style={{ fontFamily: 'Rancho' }} className={'ppx-font-normal ppx-text-brand-green ppx-text-4xl mb-3'}>
                            Tín - Tâm - Tình
                        </p>

                        <p style={{ textShadow: '2px 2px 0px rgba(33, 81, 69, 0.52)' }} className={'ppx-uppercase ppx-font-semibold ppx-text-brand-green ppx-text-5xl mb-3'}>
                            Sữa bột Dinh Dưỡng
                        </p>

                        <p className={'ppx-font-normal ppx-text-brand-green ppx-text-xl mb-3'}>Sự hài lòng của khách hàng là thành công của Promilk</p>

                        <Button size={'lg'} variant={'success'} className={'ppx-bg-brand-green ppx-rounded-3xl'}>
                            Tìm hiểu thêm
                        </Button>
                    </div>
                </div>

                {/*For desktop only*/}
                <div className={'ppx-hidden md:ppx-block'}>
                    <Navbar bg="light" expand="md">
                        <Container>
                            <Navbar.Brand href="#home">PROMILK</Navbar.Brand>

                            <Navbar.Toggle aria-controls="basic-navbar-nav" />

                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto"></Nav>

                                <Nav>
                                    <Nav.Link href="#deets">Trang chủ</Nav.Link>
                                    <Nav.Link href="#memes">Sản phẩm</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                    <div
                        style={{
                            height: '55rem',
                            backgroundImage: `url(${bgImg})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                        }}
                        className={'ppx-bg-bg-green'}
                    >
                        <div className={'ppx-h-full'}>
                            <div className={'ppx-flex ppx-flex-col ppx-justify-center ppx-h-full'}>
                                <Button
                                    variant="success"
                                    size={'lg'}
                                    style={{ background: 'linear-gradient(270deg, #6ABCF8 -3.88%, #2C908A 46.22%, #1A6452 74.27%)' }}
                                    className={'ppx-ml-32 ppx-mt-48 ppx-w-2/12 ppx-rounded-3xl'}
                                >
                                    Tìm hiểu thêm
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'promotion mt-5 mb-3 text-center'}>
                <Container>
                    <p className={'ppx-font-semibold ppx-text-3xl'}>Giới thiệu sản phẩm</p>
                    <p className={'ppx-font-normal ppx-text-lg ppx-text-subtitle-gray mt-2 ppx-leading-7'}>
                        Dưới đây là video giới thiệu sản phẩm của chúng tôi. Để hiểu hơn về sản phẩm bạn có thể xem video này!
                    </p>

                    <div className={'videoPlayer mt-3 ppx-flex ppx-justify-center'}>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/36TFKpVwHrU"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </Container>
            </div>

            <div className={'products ppx-mt-24 mb-3 text-center'}>
                <div className={'ppx-container'}>
                    <p className={'ppx-font-semibold ppx-text-3xl'}>Sản phẩm của chúng tôi</p>
                </div>

                <Row className={'ppx-container ppx-h-full'}>
                    <Col xs={6} md={4}>
                        <Figure>
                            <Figure.Image className={'ppx-h-96 ppx-w-auto'} alt="171x180" src={p1} />
                        </Figure>
                    </Col>

                    <Col xs={6} md={4}>
                        <Figure>
                            <Figure.Image className={'ppx-h-96 ppx-w-auto'} alt="171x180" src={p1} />
                        </Figure>
                    </Col>

                    <Col xs={6} md={4}>
                        <Figure>
                            <Figure.Image className={'ppx-h-96 ppx-w-auto'} alt="171x180" src={p1} />
                        </Figure>
                    </Col>
                </Row>

                <p className={'ppx-text-brand-green ppx-font-semibold text-center ppx-text-xl'}>Tất cả sản phẩm</p>
            </div>

            {/*About for mobile*/}
            <div className={'md:ppx-hidden about mt-5 mb-3 py-2'}>
                <Container>
                    <div>
                        <p className={'ppx-font-bold ppx-text-3xl'}>Về chúng tôi</p>

                        <p className={'ppx-text-gray-500 mt-3 ppx-text-lg'}>PROMILK là dây truyền sản xuất sữa bột dinh dưỡng cho trẻ em, phụ nữ mang thai và cho người lớn tuổi. </p>

                        <Button className={'ppx-bg-brand-green mt-4 ppx-rounded-3xl'} size={'lg'}>
                            Liên hệ
                        </Button>
                    </div>

                    <div className={'mt-4'}>
                        <Row className={'mb-4'}>
                            <Col xs={2}>
                                <img src={bandage} alt={'icon'} />
                            </Col>

                            <Col>
                                <p className={'ppx-text-2xl ppx-font-semibold'}>Mục tiêu</p>

                                <p className={'ppx-text-base ppx-text-gray-600 mt-1'}>
                                    Cải thiện chất lượng sản phẩm hiện tại, nghiên cứu sản phẩm mới để ra mắt thị trường nhằm đa dạng hóa sản phẩm và đáp ứng nhu cầu người tiêu dùng ngày càng cao.
                                    PROMILK không ngừng đầu tư trang thiết bị, nguồn nhân lực và năng lực quản lý.
                                </p>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={2}>
                                <img src={bandage} alt={'icon'} />
                            </Col>

                            <Col>
                                <p className={'ppx-text-2xl ppx-font-semibold'}>Mục tiêu</p>

                                <p className={'ppx-text-base ppx-text-gray-600 mt-1'}>
                                    Cải thiện chất lượng sản phẩm hiện tại, nghiên cứu sản phẩm mới để ra mắt thị trường nhằm đa dạng hóa sản phẩm và đáp ứng nhu cầu người tiêu dùng ngày càng cao.
                                    PROMILK không ngừng đầu tư trang thiết bị, nguồn nhân lực và năng lực quản lý.
                                </p>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>

            {/*For desktop only*/}
            <div className={'ppx-hidden md:ppx-block about mt-5 mb-3 ppx-bg-bg-green py-5'}>
                <div className={'ppx-container'}>
                    <Row>
                        <Col>
                            <p className={'ppx-font-bold ppx-text-3xl'}>Về chúng tôi</p>

                            <p className={'ppx-text-gray-500 mt-3 ppx-text-lg ppx-w-2/3'}>PROMILK là dây truyền sản xuất sữa bột dinh dưỡng cho trẻ em, phụ nữ mang thai và cho người lớn tuổi. </p>

                            <Button className={'ppx-bg-brand-green mt-4 ppx-rounded-3xl'} size={'lg'}>
                                Liên hệ với chúng tôi
                            </Button>
                        </Col>

                        <Col>
                            <Row className={'mb-4'}>
                                <Col xs={2}>
                                    <img src={bandage} alt={'icon'} />
                                </Col>

                                <Col>
                                    <p className={'ppx-text-2xl ppx-font-semibold'}>Mục tiêu</p>

                                    <p className={'ppx-text-base ppx-text-gray-600 mt-1'}>
                                        Cải thiện chất lượng sản phẩm hiện tại, nghiên cứu sản phẩm mới để ra mắt thị trường nhằm đa dạng hóa sản phẩm và đáp ứng nhu cầu người tiêu dùng ngày càng cao.
                                        PROMILK không ngừng đầu tư trang thiết bị, nguồn nhân lực và năng lực quản lý.
                                    </p>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={2}>
                                    <img src={bandage} alt={'icon'} />
                                </Col>

                                <Col>
                                    <p className={'ppx-text-2xl ppx-font-semibold'}>Mục tiêu</p>

                                    <p className={'ppx-text-base ppx-text-gray-600 mt-1'}>
                                        Cải thiện chất lượng sản phẩm hiện tại, nghiên cứu sản phẩm mới để ra mắt thị trường nhằm đa dạng hóa sản phẩm và đáp ứng nhu cầu người tiêu dùng ngày càng cao.
                                        PROMILK không ngừng đầu tư trang thiết bị, nguồn nhân lực và năng lực quản lý.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default App;
