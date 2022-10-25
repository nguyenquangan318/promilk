/** @format */

import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import productData from '../../data/products.json';
import NavbarProducts from '../../components/navbarProducts';
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap';
import { Footer } from '../../components/footer';
import { ProductCard } from '../../components/productCard';
import ScrollToTop from '../../components/scrollToTop';

function findInJson(id: number) {
    for (const key of Object.keys(productData)) {
        // @ts-ignore
        const product = productData[key];

        if (product.length <= 0) {
            continue;
        }

        const find = product.find((x: any) => x.id == id);

        if (find) {
            return {
                key,
                product: find,
            };
        }
    }

    return null;
}

function findRelatedProduct(key: string, id: number) {
    // @ts-ignore
    const categoryData = productData[key];

    if (!categoryData) {
        return null;
    }

    return categoryData.filter((x: any) => x.id != id);
}

function ProductDetail() {
    const params = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState<any>();
    const [relatedProduct, setRelatedProduct] = useState<any>();
    const [category, setCategory] = useState('');

    useEffect(() => {
        if (!params.id) {
            navigate('/products');
            return;
        }

        const productData = findInJson(parseInt(params.id));

        if (!productData) {
            navigate('/404');
            return;
        }

        setProduct(productData.product);
        setCategory(productData.key);

        setRelatedProduct(findRelatedProduct(productData.key, productData.product.id));
    }, []);

    return (
        <div className={'productDetailPage ppx-pt-16 ppx-bg-product-banner-bg-green ppx-h-screen'}>
            <ScrollToTop />
            <NavbarProducts />

            <div className={'ppx-pt-5 md:ppx-pb-0 ppx-pb-5'}>
                <Container>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">
                            <i className={'fa-solid fa-home'}></i> Trang chủ
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="/products">Sản phẩm</Breadcrumb.Item>
                        <Breadcrumb.Item active>{product?.title}</Breadcrumb.Item>
                    </Breadcrumb>
                </Container>

                <div className={'mt-4 mb-5'}>
                    <Container>
                        <Row>
                            <Col xs={12} md={5}>
                                <img className={'ppx-rounded-2xl ppx-shadow-lg'} src={product?.image} alt={'ahihi'} />
                            </Col>

                            <Col xs={12} md={7}>
                                <p className={'ppx-text-brand-green ppx-text-3xl mt-1 ppx-font-medium ppx-mt-5 md:ppx-mt-0'}>{product?.title}</p>

                                <p className={'mt-3 ppx-text-lg ppx-font-medium'}>
                                    Giá: <span className={'ppx-text-red-500 ppx-text-2xl ppx-font-semibold ppx-ml-2'}>{product?.price} đ</span>
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className={'descriptionBox'}>
                    <div className={'ppx-py-6 ppx-bg-product-bg-green'}>
                        <Container>
                            <p className={'ppx-text-brand-green ppx-text-2xl ppx-font-semibold'}>Mô tả sản phẩm</p>
                        </Container>
                    </div>

                    <div className={'description ppx-pt-5 ppx-pb-10 ppx-bg-product-banner-bg-green'}>
                        <Container>
                            <p className={'ppx-text-lg ppx-font-medium'}>{product?.description}</p>
                        </Container>
                    </div>
                </div>

                <div className={'relativeProduct'}>
                    <div className={'ppx-py-6 ppx-bg-product-bg-green'}>
                        <Container>
                            <p className={'ppx-text-brand-green ppx-text-2xl ppx-font-semibold'}>Sản phẩm có liên quan</p>
                        </Container>
                    </div>

                    <div className={'sanpham ppx-py-10 ppx-bg-product-banner-bg-green'}>
                        <Container>
                            <Row>
                                {relatedProduct &&
                                    relatedProduct.map((x: any) => (
                                        <Col xs={6} md={3} key={x.id}>
                                            <ProductCard imagePath={x.image} title={x.title} price={x.price} id={x.id} />
                                        </Col>
                                    ))}
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default ProductDetail;
