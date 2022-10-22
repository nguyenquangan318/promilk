/** @format */

import React from 'react';

import bannerBg from '../../assets/mobileBg.png';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import bgImg from '../../assets/bg.png';
import { Button, Col, Figure, Row } from 'react-bootstrap';
import bandage from '../../assets/bandge.svg';
import cert1 from '../../assets/images/certs/1.jpg';
import cert2 from '../../assets/images/certs/2.jpg';
import { Link } from 'react-router-dom';
import hotProductsData from '../../data/hotProducts.json';

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

                            <Navbar.Brand href="#home" className={'text-center'}>
                                PROMILK
                            </Navbar.Brand>

                            <Navbar.Collapse id="basic-navbar-nav" className={'ppx-bg-gray-100 md:ppx-bg-white'}>
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
                    {hotProductsData.map((x) => (
                        <Col xs={6} md={4} key={x}>
                            <img src={x} alt={'hot product'} />
                        </Col>
                    ))}
                </Row>

                <Link to={'/products'} className={'mt-1'}>
                    <p className={'ppx-text-brand-green ppx-font-semibold text-center ppx-text-xl'}>Tất cả sản phẩm</p>
                </Link>
            </div>

            {/*About for mobile*/}
            <div className={'md:ppx-hidden about mt-5 mb-3 py-2'}>
                <Container>
                    <div>
                        <p className={'ppx-font-bold ppx-text-3xl'}>Về chúng tôi</p>

                        <p className={'ppx-text-gray-500 mt-3 ppx-text-lg'}>PROMILK là dây truyền sản xuất sữa bột dinh dưỡng cho trẻ em, phụ nữ mang thai và cho người lớn tuổi. </p>

                        <Button className={'ppx-bg-brand-green mt-3 md:mt-4 ppx-rounded-3xl ppx-w-40'} size={'lg'}>
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
                                <p className={'ppx-text-2xl ppx-font-semibold'}>Chuẩn vệ sinh an toàn thực phẩm</p>

                                <p className={'ppx-text-base ppx-text-gray-600 mt-1'}>
                                    PROMILK đã đạt chuẩn vệ sinh an toàn thực phẩm tại Việt Nam. Nhằm mục đích đưa sản phẩm tốt đến tận tay người tiêu dùng, chúng tôi đã phát triển một hệ thống phân
                                    phối rộng trong nước với phong cách phục vu khách hàng tận tình với phương châm{' '}
                                    <span className={'ppx-font-semibold'}>"SỰ HÀI LÒNG CỦA KHÁCH HÀNG LÀ THÀNH CÔNG CỦA CHÚNG TÔI"</span>.
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
                                    <p className={'ppx-text-2xl ppx-font-semibold'}>Chuẩn vệ sinh an toàn thực phẩm</p>

                                    <p className={'ppx-text-base ppx-text-gray-600 mt-1'}>
                                        PROMILK đã đạt chuẩn vệ sinh an toàn thực phẩm tại Việt Nam. Nhằm mục đích đưa sản phẩm tốt đến tận tay người tiêu dùng, chúng tôi đã phát triển một hệ thống
                                        phân phối rộng trong nước với phong cách phục vu khách hàng tận tình với phương châm{' '}
                                        <span className={'ppx-font-semibold'}>"SỰ HÀI LÒNG CỦA KHÁCH HÀNG LÀ THÀNH CÔNG CỦA CHÚNG TÔI"</span>.
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

                    <p className={'mt-4 ppx-font-medium ppx-text-xl'}>PROMILK đã đạt chuẩn vệ sinh an toàn thực phẩm tại Việt Nam</p>
                </div>
            </div>

            <div className={'ppx-hidden md:ppx-block ppx-mt-32 ppx-bg-bg-green ppx-container ppx-rounded-3xl'}>
                <div className={'ppx-px-10 ppx-relative ppx-py-10 text-center'}>
                    <div className={'ppx-flex ppx-flex-row ppx-justify-around'}>
                        <img src={cert1} alt={'cert 1'} style={{ height: '32rem' }} className={'ppx-w-auto'} />

                        <img src={cert2} alt={'cert 1'} style={{ height: '32rem' }} className={'ppx-w-auto'} />
                    </div>

                    <p className={'mt-4 ppx-font-medium ppx-text-xl'}>PROMILK đã đạt chuẩn vệ sinh an toàn thực phẩm tại Việt Nam</p>
                </div>
            </div>

            {/*Footer*/}
            {/*For desktop*/}
            <div className={'ppx-hidden md:ppx-block footer mt-5 ppx-bg-brand-green ppx-text-gray-100'}>
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

            {/*Mobile*/}
            <div className={'md:ppx-hidden ppx-bg-brand-green ppx-text-gray-100 mt-5 py-5 px-4'}>
                <p className={'ppx-text-4xl ppx-font-bold'}>Promilk</p>

                <div className={'mt-5'}>
                    <p className={'ppx-font-light mb-3'}>Phân phối bỏi công ty TNHH Dược phẩm DIAMOND</p>
                    <p className={'ppx-font-light mb-3'}>
                        Sản xuất: <span className={'ppx-font-semibold'}>Nhà máy sữa promilk</span>
                    </p>
                    <p className={'ppx-font-light'}>Địa chỉ: Phù Đổng, Gia Lâm, Hà Nội</p>
                </div>

                <div className={'mt-5'}>
                    <p className={'ppx-font-semibold ppx-text-2xl mb-3'}>Liên hệ</p>

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
                </div>

                <hr className={'ppx-text-white ppx-border-2 ppx-border-white mt-3 mb-2'} />

                <p className={'text-center ppx-text-sm'}>Copyright © {new Date().getFullYear()} PROMILK</p>
            </div>
        </div>
    );
}

export default Home;
