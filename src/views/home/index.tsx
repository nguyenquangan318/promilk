/** @format */

import React from 'react';

import bannerBg from '../../assets/mobileBg.png';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import bgImg from '../../assets/bg.png';
import { Button, Col, Row } from 'react-bootstrap';
import bandage from '../../assets/bandge.svg';
import cert1 from '../../assets/images/certs/1.jpg';
import cert2 from '../../assets/images/certs/2.jpg';
import { Link } from 'react-router-dom';
import hotProductsData from '../../data/hotProducts.json';
import { Footer } from '../../components/footer';

import Flicking, { ViewportSlot } from '@egjs/react-flicking';
import { Arrow, AutoPlay } from '@egjs/flicking-plugins';

import '@egjs/react-flicking/dist/flicking.css';
import '@egjs/flicking-plugins/dist/flicking-plugins.css';

import './index.css';

const plugins = [new AutoPlay({ duration: 2000, direction: 'NEXT', stopOnHover: false }), new Arrow()];

function Home() {
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

                            <Navbar.Brand href="#home" className={'text-center ppx-font-semibold'}>
                                <Link to={'/'}>PROMILK</Link>
                            </Navbar.Brand>

                            <Navbar.Collapse id="basic-navbar-nav" className={'ppx-bg-gray-100 md:ppx-bg-white'}>
                                <Nav className="me-auto"></Nav>

                                <Nav>
                                    <Nav.Link>
                                        <Link to={'/'}>Trang ch???</Link>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <Link to={'/products'}>S???n ph???m</Link>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <Link to={'/gallery'}>Th?? vi???n ???nh</Link>
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                    <div className={'ppx-mt-16 px-4'}>
                        <p style={{ fontFamily: 'Rancho' }} className={'ppx-font-normal ppx-text-brand-green ppx-text-4xl mb-3'}>
                            T??n - T??m - T??nh
                        </p>

                        <p style={{ textShadow: '2px 2px 0px rgba(33, 81, 69, 0.52)' }} className={'ppx-uppercase ppx-font-semibold ppx-text-brand-green ppx-text-5xl mb-3'}>
                            S???a b???t Dinh D?????ng
                        </p>

                        <p className={'ppx-font-normal ppx-text-brand-green ppx-text-xl mb-3'}>S??? h??i l??ng c???a kh??ch h??ng l?? th??nh c??ng c???a Promilk</p>

                        <Button size={'lg'} variant={'success'} className={'ppx-bg-brand-green ppx-rounded-3xl'}>
                            T??m hi???u th??m
                        </Button>
                    </div>
                </div>

                {/*For desktop only*/}
                <div className={'ppx-hidden md:ppx-block'}>
                    <Navbar bg="light" expand="md">
                        <Container>
                            <Navbar.Brand className={'text-center ppx-font-semibold'}>
                                <Link to={'/'}>PROMILK</Link>
                            </Navbar.Brand>

                            <Navbar.Toggle aria-controls="basic-navbar-nav" />

                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto"></Nav>

                                <Nav>
                                    <Nav.Link>
                                        <Link to={'/'}>Trang ch???</Link>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <Link to={'/products'}>S???n ph???m</Link>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <Link to={'/gallery'}>Th?? vi???n ???nh</Link>
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                    <div
                        style={{
                            backgroundImage: `url(${bgImg})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            // height: '55rem'
                        }}
                        className={'ppx-bg-bg-green desktopBackgroundImage'}
                    >
                        <div className={'ppx-h-full'}>
                            <div className={'ppx-flex ppx-flex-col ppx-justify-center ppx-h-full'}>
                                <Button
                                    variant="success"
                                    size={'lg'}
                                    style={{ background: 'linear-gradient(270deg, #6ABCF8 -3.88%, #2C908A 46.22%, #1A6452 74.27%)' }}
                                    className={'ppx-ml-20 xl:ppx-ml-28 ppx-mt-48 ppx-w-4/12 xl:ppx-w-2/12 ppx-rounded-3xl'}
                                >
                                    T??m hi???u th??m
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'promotion mt-5 mb-3 text-center'}>
                <Container>
                    <p className={'ppx-font-semibold ppx-text-3xl'}>Gi???i thi???u s???n ph???m</p>
                    <p className={'ppx-font-normal ppx-text-lg ppx-text-subtitle-gray mt-2 ppx-leading-7'}>
                        D?????i ????y l?? video gi???i thi???u s???n ph???m c???a ch??ng t??i. ????? hi???u h??n v??? s???n ph???m b???n c?? th??? xem video n??y!
                    </p>

                    <div className={'videoPlayer mt-3 ppx-flex ppx-justify-center'}>
                        <Flicking plugins={plugins} align="prev" circular={true} circularFallback={'bound'} bound={true}>
                            <div className="panel ppx-mx-3">
                                <iframe src="https://cdn.jwplayer.com/players/5Hg6jYvQ-vp9Sa9Ot.html" width="100%" height="100%" allowFullScreen></iframe>
                            </div>

                            <div className="panel  ppx-mx-3">
                                <iframe src="https://cdn.jwplayer.com/players/1wOQ0pRC-vp9Sa9Ot.html" width="100%" height="100%" allowFullScreen></iframe>
                            </div>

                            <div className="panel ppx-mx-3">
                                <iframe src="https://cdn.jwplayer.com/players/Ofy8jB5X-vp9Sa9Ot.html" width="100%" height="100%" allowFullScreen></iframe>
                            </div>

                            <ViewportSlot>
                                <span className="flicking-arrow-prev"></span>
                                <span className="flicking-arrow-next"></span>
                            </ViewportSlot>
                        </Flicking>
                    </div>
                </Container>
            </div>

            <div className={'products ppx-mt-24 mb-3 text-center'}>
                <div className={'ppx-container'}>
                    <p className={'ppx-font-semibold ppx-text-3xl mb-3'}>S???n ph???m HOT</p>
                </div>

                <Row className={'ppx-container ppx-h-full'}>
                    <Flicking plugins={plugins} align="prev" circular={true} circularFallback={'bound'} bound={true}>
                        {hotProductsData.map((x) => (
                            <div className="panel" key={x}>
                                <img className={'ppx-h-72 ppx-w-auto'} src={x} alt={'hot product'} />
                            </div>
                        ))}

                        <ViewportSlot>
                            <span className="flicking-arrow-prev"></span>
                            <span className="flicking-arrow-next"></span>
                        </ViewportSlot>
                    </Flicking>
                </Row>

                <Link to={'/products'}>
                    <button className={'mt-5 ppx-bg-brand-green ppx-font-medium text-center ppx-text-lg ppx-py-2 ppx-px-8 ppx-text-white ppx-rounded-3xl'}>
                        T???t c??? s???n ph???m <i className={'fa-solid fa-arrow-right ppx-ml-1'}></i>
                    </button>
                </Link>
            </div>

            {/*About for mobile*/}
            <div className={'md:ppx-hidden about mt-5 mb-3 py-2'}>
                <Container>
                    <div>
                        <p className={'ppx-font-bold ppx-text-3xl'}>V??? ch??ng t??i</p>

                        <p className={'ppx-text-gray-500 mt-3 ppx-text-lg'}>PROMILK l?? d??y truy???n s???n xu???t s???a b???t dinh d?????ng cho tr??? em, ph??? n??? mang thai v?? cho ng?????i l???n tu???i. </p>

                        <Button className={'ppx-bg-brand-green mt-3 md:mt-4 ppx-rounded-3xl ppx-w-40'} size={'lg'}>
                            Li??n h???
                        </Button>
                    </div>

                    <div className={'mt-4'}>
                        <Row className={'mb-4'}>
                            <Col xs={2}>
                                <img src={bandage} alt={'icon'} />
                            </Col>

                            <Col>
                                <p className={'ppx-text-2xl ppx-font-semibold'}>M???c ti??u</p>

                                <p className={'ppx-text-base ppx-text-gray-600 mt-1'}>
                                    C???i thi???n ch???t l?????ng s???n ph???m hi???n t???i, nghi??n c???u s???n ph???m m???i ????? ra m???t th??? tr?????ng nh???m ??a d???ng h??a s???n ph???m v?? ????p ???ng nhu c???u ng?????i ti??u d??ng ng??y c??ng cao.
                                    PROMILK kh??ng ng???ng ?????u t?? trang thi???t b???, ngu???n nh??n l???c v?? n??ng l???c qu???n l??.
                                </p>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={2}>
                                <img src={bandage} alt={'icon'} />
                            </Col>

                            <Col>
                                <p className={'ppx-text-2xl ppx-font-semibold'}>Chu???n v??? sinh an to??n th???c ph???m</p>

                                <p className={'ppx-text-base ppx-text-gray-600 mt-1'}>
                                    PROMILK ???? ?????t chu???n v??? sinh an to??n th???c ph???m t???i Vi???t Nam. Nh???m m???c ????ch ????a s???n ph???m t???t ?????n t???n tay ng?????i ti??u d??ng, ch??ng t??i ???? ph??t tri???n m???t h??? th???ng ph??n
                                    ph???i r???ng trong n?????c v???i phong c??ch ph???c vu kh??ch h??ng t???n t??nh v???i ph????ng ch??m{' '}
                                    <span className={'ppx-font-semibold'}>"S??? H??I L??NG C???A KH??CH H??NG L?? TH??NH C??NG C???A CH??NG T??I"</span>.
                                </p>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>

            {/*For desktop only*/}
            <div className={'ppx-hidden md:ppx-block about mt-5 mb-3 ppx-bg-bg-green p-5'}>
                <div className={'ppx-container'}>
                    <Row>
                        <Col>
                            <p className={'ppx-font-bold ppx-text-3xl'}>V??? ch??ng t??i</p>

                            <p className={'ppx-text-gray-500 mt-3 ppx-text-lg ppx-w-2/3'}>PROMILK l?? d??y truy???n s???n xu???t s???a b???t dinh d?????ng cho tr??? em, ph??? n??? mang thai v?? cho ng?????i l???n tu???i. </p>

                            <Button className={'ppx-bg-brand-green mt-4 ppx-rounded-3xl'} size={'lg'}>
                                Li??n h??? v???i ch??ng t??i
                            </Button>
                        </Col>

                        <Col>
                            <Row className={'mb-4'}>
                                <Col xs={2}>
                                    <img src={bandage} alt={'icon'} />
                                </Col>

                                <Col>
                                    <p className={'ppx-text-2xl ppx-font-semibold'}>M???c ti??u</p>

                                    <p className={'ppx-text-base ppx-text-gray-600 mt-1'}>
                                        C???i thi???n ch???t l?????ng s???n ph???m hi???n t???i, nghi??n c???u s???n ph???m m???i ????? ra m???t th??? tr?????ng nh???m ??a d???ng h??a s???n ph???m v?? ????p ???ng nhu c???u ng?????i ti??u d??ng ng??y c??ng cao.
                                        PROMILK kh??ng ng???ng ?????u t?? trang thi???t b???, ngu???n nh??n l???c v?? n??ng l???c qu???n l??.
                                    </p>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={2}>
                                    <img src={bandage} alt={'icon'} />
                                </Col>

                                <Col>
                                    <p className={'ppx-text-2xl ppx-font-semibold'}>Chu???n v??? sinh an to??n th???c ph???m</p>

                                    <p className={'ppx-text-base ppx-text-gray-600 mt-1'}>
                                        PROMILK ???? ?????t chu???n v??? sinh an to??n th???c ph???m t???i Vi???t Nam. Nh???m m???c ????ch ????a s???n ph???m t???t ?????n t???n tay ng?????i ti??u d??ng, ch??ng t??i ???? ph??t tri???n m???t h??? th???ng
                                        ph??n ph???i r???ng trong n?????c v???i phong c??ch ph???c vu kh??ch h??ng t???n t??nh v???i ph????ng ch??m{' '}
                                        <span className={'ppx-font-semibold'}>"S??? H??I L??NG C???A KH??CH H??NG L?? TH??NH C??NG C???A CH??NG T??I"</span>.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>

            {/*Zone for cert*/}
            <div className={'md:ppx-hidden mt-5 text-center'}>
                <div className={'ppx-bg-bg-green py-5 px-3'}>
                    <Row>
                        <Col xs={12} className={'mb-3'}>
                            <img src={cert1} alt={'cert 1'} style={{ height: '28rem' }} className={'ppx-w-auto ppx-mx-auto'} />
                        </Col>

                        <Col xs={12}>
                            <img src={cert2} alt={'cert 2'} style={{ height: '28rem' }} className={'ppx-w-auto ppx-mx-auto'} />
                        </Col>
                    </Row>

                    <p className={'mt-4 ppx-font-medium ppx-text-xl'}>PROMILK ???? ?????t chu???n v??? sinh an to??n th???c ph???m t???i Vi???t Nam</p>
                </div>
            </div>

            <div className={'ppx-hidden md:ppx-block ppx-mt-32 ppx-bg-bg-green ppx-container ppx-rounded-3xl mb-5'}>
                <div className={'ppx-px-10 ppx-relative ppx-py-10 text-center'}>
                    <div className={'ppx-flex ppx-flex-row ppx-justify-around'}>
                        <img src={cert1} alt={'cert 1'} style={{ height: '32rem' }} className={'ppx-w-auto'} />

                        <img src={cert2} alt={'cert 1'} style={{ height: '32rem' }} className={'ppx-w-auto'} />
                    </div>

                    <p className={'mt-4 ppx-font-medium ppx-text-xl'}>PROMILK ???? ?????t chu???n v??? sinh an to??n th???c ph???m t???i Vi???t Nam</p>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Home;
