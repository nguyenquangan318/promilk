/** @format */

import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Row, Col, Button, Figure } from 'react-bootstrap';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import p1 from './assets/images/products/pedilac/IGC_8532.png';
import bandage from './assets/bandge.svg';
import bgImg from './assets/bg.png';

import cert1 from './assets/images/certs/1.jpg';
import cert2 from './assets/images/certs/2.jpg';

function App() {
    return (
        <div className="App">
            <div className={'header'}>
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
            </div>

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
                        {/*<p className={'ppx-text-brand-green ppx-font-semibold ppx-text-2xl ppx-leading-9 mb-2'}>Tín - Tâm - Tình</p>*/}

                        {/*<p*/}
                        {/*    className={'ppx-font-semibold ppx-text-5xl ppx-leading-tight ppx-uppercase mb-3'}*/}
                        {/*    style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', color: 'rgba(0,0,0,0.83)' }}*/}
                        {/*>*/}
                        {/*    Sữa bột <br /> Dinh Dưỡng*/}
                        {/*</p>*/}

                        {/*<p className={'ppx-text-gray-600 ppx-text-lg mb-4'}>Sự hài lòng của khách hàng là thành công của Promilk</p>*/}

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

            <div className={'promotion mt-5 mb-3 text-center'}>
                <Container>
                    <p className={'ppx-font-semibold ppx-text-3xl'}>Giới thiệu sản phẩm</p>
                    <p className={'ppx-font-normal ppx-text-lg ppx-text-subtitle-gray mt-2 ppx-leading-7'}>
                        Dưới đây là video giới thiệu sản phẩm của chúng tôi. Để hiểu hơn về sản phẩm bạn có thể xem video này!
                    </p>
                </Container>

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

            <div className={'about mt-5 mb-3 ppx-bg-bg-green py-5'}>
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

            <div className={'ppx-mt-32 ppx-w-full'}>
                <div className={'ppx-bg-bg-green ppx-container ppx-rounded-3xl'}>
                    <div className={'ppx-px-10 ppx-relative ppx-py-10 text-center'}>
                        <div className={'ppx-flex ppx-flex-row ppx-justify-around'}>
                            <img src={cert1} alt={'cert 1'} style={{ height: '32rem' }} className={'ppx-w-auto'} />

                            <img src={cert2} alt={'cert 1'} style={{ height: '32rem' }} className={'ppx-w-auto'} />
                        </div>

                        <p className={'mt-4 ppx-font-medium ppx-text-xl'}>PROMILK đã đạt chuẩn vệ sinh an toàn thực phẩm tại Việt Nam</p>
                    </div>
                </div>
            </div>

            <div className={'footer mt-5 ppx-bg-brand-green ppx-text-gray-100'}>
                <div className={'ppx-container'}>
                    <Row>
                        <Col style={{ borderRight: '1px solid #fff', borderBottom: '1px solid #fff' }} className={'ppx-pt-10'}>
                            <p className={'ppx-font-black ppx-text-3xl mb-3'}>Promilk</p>
                            <p className={'ppx-font-light mb-3'}>Phân phối bỏi công ty TNHH Dược phẩm DIAMOND</p>
                            <p className={'ppx-font-light mb-3'}>
                                Sản xuất: <span className={'ppx-font-semibold'}>Nhà máy sữa promilk</span>
                            </p>
                            <p className={'ppx-font-light'}>Địa chỉ: Phù Đổng, Gia Lâm, Hà Nội</p>
                        </Col>

                        <Col style={{ borderBottom: '1px solid #fff' }} className={'ppx-pt-10 ppx-pb-14'}>
                            <p className={'ppx-font-black ppx-text-3xl mb-3'}>Liên hệ</p>
                            <p className={'ppx-font-light mb-3'}>
                                <span className={'ppx-font-semibold'}>Địa chỉ:</span> 120/42 Kim Giang, p.Đại Kim, Hoàng Mai, Hà Nội
                            </p>
                            <p className={'ppx-font-light mb-3'}>
                                <span className={'ppx-font-semibold'}>Email:</span> <a href={'mailto:diamondpharmavn@gmail.com'}>diamondpharmavn@gmail.com</a>
                            </p>
                            <p className={'ppx-font-light mb-3'}>
                                <span className={'ppx-font-semibold'}>Số điện thoại:</span> 0931999828
                            </p>
                            <p className={'ppx-font-light'}>
                                <span className={'ppx-font-semibold'}>Website:</span> <a href={'https://promilk.vn'}>https://promilk.vn</a>
                            </p>
                        </Col>

                        <Col style={{ borderLeft: '1px solid #fff', borderBottom: '1px solid #fff' }}></Col>
                    </Row>

                    <div className={'ppx-py-5 text-center'}>
                        <p>Copyright © {new Date().getFullYear()} PROMILK</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
