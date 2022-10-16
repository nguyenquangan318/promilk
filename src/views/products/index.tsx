/** @format */

import React, { useState } from 'react';
import NavbarProducts from '../../components/navbarProducts';
import Container from 'react-bootstrap/Container';
import { Button, Card, Col, Row } from 'react-bootstrap';

import bannerDesktop1 from '../../assets/images/banner/desktop-1.png';
import bannerDesktop2 from '../../assets/images/banner/desktop-2.png';
import bannerDesktop3 from '../../assets/images/banner/desktop-3.png';

import icon1 from '../../assets/images/icon/icon1.png';
import icon2 from '../../assets/images/icon/icon2.png';
import icon3 from '../../assets/images/icon/icon3.png';
import icon4 from '../../assets/images/icon/icon4.png';

import './index.css';

import tagsListData from '../../data/productTags.json';

function Products() {
    const [selectedTags, setSelectedTags] = useState<string[]>(tagsListData.map((x) => x.name));

    return (
        <div className={'productPage'}>
            <NavbarProducts />

            <div className={'haizBanner ppx-bg-product-banner-bg-green ppx-py-5'}>
                <Container>
                    <Row>
                        <Col sm={8}>
                            <img src={bannerDesktop1} alt={'Banner Desktop 1'} />
                        </Col>

                        <Col sm={4} className={'ppx-flex ppx-flex-col ppx-justify-between'}>
                            <img src={bannerDesktop2} alt={'Banner Desktop 1'} />
                            <img src={bannerDesktop3} alt={'Banner Desktop 1'} />
                        </Col>
                    </Row>

                    <div className={'feature mt-4'}>
                        <Row>
                            <Col sm={3}>
                                <Card className={'ppx-bg-product-bg-green ppx-shadow-lg p-3 text-center'}>
                                    <img src={icon1} alt={'icon1'} className={'ppx-h-11 ppx-w-11 mx-auto'} />
                                    <p className={'mt-2 ppx-text-brand-green ppx-font-semibold ppx-text-sm'}>Phù hợp với mọi lứa tuổi</p>
                                </Card>
                            </Col>

                            <Col sm={3}>
                                <Card className={'ppx-bg-product-bg-green ppx-shadow-lg p-3 text-center'}>
                                    <img src={icon2} alt={'icon2'} className={'ppx-h-11 ppx-w-11 mx-auto'} />
                                    <p className={'mt-2 ppx-text-brand-green ppx-font-semibold ppx-text-sm'}>Hỗ trợ khách hàng 24/7</p>
                                </Card>
                            </Col>

                            <Col sm={3}>
                                <Card className={'ppx-bg-product-bg-green ppx-shadow-lg p-3 text-center'}>
                                    <img src={icon3} alt={'icon3'} className={'ppx-h-11 ppx-w-11 mx-auto'} />
                                    <p className={'mt-2 ppx-text-brand-green ppx-font-semibold ppx-text-sm'}>Đảm bảo chất lượng</p>
                                </Card>
                            </Col>

                            <Col sm={3}>
                                <Card className={'ppx-bg-product-bg-green ppx-shadow-lg p-3 text-center'}>
                                    <img src={icon4} alt={'icon4'} className={'ppx-h-11 ppx-w-11 mx-auto'} />
                                    <p className={'mt-2 ppx-text-brand-green ppx-font-semibold ppx-text-sm'}>Đầy đủ quyền lợi</p>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>

            <div className={'ppx-bg-product-bg-green py-3'}>
                <Container>
                    <p className={'ppx-font-semibold ppx-text-xl mb-3'}>Tất cả sản phẩm</p>

                    <div className={'tagArea'}>
                        {tagsListData.map((x) => (
                            <Button className={''}>{x.name}</Button>
                        ))}
                    </div>

                    <div className={'productArea'}></div>
                </Container>
            </div>
        </div>
    );
}

export default Products;
