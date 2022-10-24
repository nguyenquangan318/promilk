/** @format */

import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import productData from '../../data/products.json';
import NavbarProducts from '../../components/navbarProducts';
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap';
import { Footer } from '../../components/footer';

function findInJson(id: number) {
    console.log(id);

    for (const product of Object.values(productData)) {
        if (product.length <= 0) {
            continue;
        }

        const find = product.find((x) => x.id == id);

        if (find) {
            return find;
        }
    }
}

function ProductDetail() {
    const params = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState();
    const [category, setCategory] = useState('');

    // useEffect(() => {
    //     if (!params.id) {
    //         navigate('/products');
    //         return;
    //     }
    //
    //     const productData = findInJson(parseInt(params.id));
    //
    //     console.log(productData);
    // });

    return (
        <div className={'productDetailPage ppx-pt-14 ppx-bg-product-banner-bg-green ppx-h-screen'}>
            <NavbarProducts />

            <div className={'ppx-pt-5 md:ppx-pb-2 ppx-pb-5 mb-5'}>
                <Container>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">
                            <i className={'fa-solid fa-home'}></i> Trang chủ
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="/products">Sản phẩm</Breadcrumb.Item>
                        <Breadcrumb.Item active>Lewlew</Breadcrumb.Item>
                    </Breadcrumb>

                    <div className={'mt-5'}>
                        <Row>
                            <Col xs={12} md={5}>
                                <img src={'/images/products/promilk/IGC_7017.jpg'} alt={'ahihi'} />
                            </Col>

                            <Col xs={12} md={7}></Col>
                        </Row>
                    </div>
                </Container>
            </div>

            <Footer />
        </div>
    );
}

export default ProductDetail;
