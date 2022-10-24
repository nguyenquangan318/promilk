/** @format */

import React, { useEffect, useState } from 'react';
import NavbarProducts from '../../components/navbarProducts';
import Container from 'react-bootstrap/Container';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { ProductCard } from '../../components/productCard';

import bannerDesktop1 from '../../assets/images/banner/desktop-1.png';
import bannerDesktop2 from '../../assets/images/banner/desktop-2.png';
import bannerDesktop3 from '../../assets/images/banner/desktop-3.png';

import icon1 from '../../assets/images/icon/icon1.png';
import icon2 from '../../assets/images/icon/icon2.png';
import icon3 from '../../assets/images/icon/icon3.png';
import icon4 from '../../assets/images/icon/icon4.png';

import './index.css';

import tagsListData from '../../data/productTags.json';
import productsData from '../../data/products.json';
import { shuffleArray } from '../../utils/shuffleArray';
import { Footer } from '../../components/footer';

const shuffleProduct = () => {
    const final = [];

    const keys = Object.keys(productsData);

    for (const key of keys) {
        // @ts-ignore
        const data = productsData[key];

        for (const product of data) {
            final.push({
                key,
                ...product,
            });
        }
    }

    shuffleArray(final);

    return final;
};

function Products() {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const [showProduct, setShowProduct] = useState<any>([]);
    const [originalProduct, setOriginalProduct] = useState<any>([]);

    useEffect(() => {
        const prod = shuffleProduct();
        setShowProduct(prod);
        setOriginalProduct(prod);
    }, []);

    const onChangeTag = (value: string) => {
        if (value == 'all') {
            setSelectedTags([]);
            reGetProduct([]);
            return;
        }

        let original = selectedTags;

        if (original.includes(value)) {
            original = original.filter((x) => x != value);
        } else {
            original = [...selectedTags, value];
        }

        setSelectedTags(original);

        reGetProduct(original);
    };

    const reGetProduct = (tags: string[]) => {
        if (tags.length <= 0) {
            setShowProduct(originalProduct);
            return;
        }

        const prod = originalProduct.filter((x: any) => {
            return tags.includes(x.key);
        });

        setShowProduct(prod);
    };

    return (
        <div className={'productPage ppx-pt-14'}>
            <NavbarProducts />

            <div className={'haizBanner ppx-bg-product-banner-bg-green ppx-pt-5 md:ppx-pb-2 ppx-pb-5'}>
                <Container>
                    <Row>
                        <Col xs={12} md={8}>
                            <img src={bannerDesktop1} alt={'Banner Desktop 1'} />
                        </Col>

                        <Col xs={12} sm={4} className={'ppx-hidden md:ppx-flex ppx-flex-col ppx-justify-between'}>
                            <img src={bannerDesktop2} alt={'Banner Desktop 1'} />
                            <img src={bannerDesktop3} alt={'Banner Desktop 1'} />
                        </Col>
                    </Row>

                    <div className={'feature mt-4'}>
                        <Row>
                            <Col xs={6} md={3}>
                                <Card className={'ppx-bg-product-bg-green ppx-shadow-md p-3 text-center ppx-mb-3'}>
                                    <img src={icon1} alt={'icon1'} className={'ppx-h-11 ppx-w-11 mx-auto'} />
                                    <p className={'mt-2 ppx-text-brand-green ppx-font-semibold ppx-text-sm'}>Phù hợp với mọi lứa tuổi</p>
                                </Card>
                            </Col>

                            <Col xs={6} md={3}>
                                <Card className={'ppx-bg-product-bg-green ppx-shadow-md p-3 text-center ppx-mb-3'}>
                                    <img src={icon2} alt={'icon2'} className={'ppx-h-11 ppx-w-11 mx-auto'} />
                                    <p className={'mt-2 ppx-text-brand-green ppx-font-semibold ppx-text-sm'}>Hỗ trợ khách hàng 24/7</p>
                                </Card>
                            </Col>

                            <Col xs={6} md={3}>
                                <Card className={'ppx-bg-product-bg-green ppx-shadow-md p-3 text-center'}>
                                    <img src={icon3} alt={'icon3'} className={'ppx-h-11 ppx-w-11 mx-auto'} />
                                    <p className={'mt-2 ppx-text-brand-green ppx-font-semibold ppx-text-sm'}>Đảm bảo chất lượng</p>
                                </Card>
                            </Col>

                            <Col xs={6} md={3}>
                                <Card className={'ppx-bg-product-bg-green ppx-shadow-md p-3 text-center'}>
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
                    <p className={'ppx-font-semibold ppx-text-2xl mb-3'}>Tất cả sản phẩm</p>

                    <div className={'mb-5'}>
                        <button
                            onClick={() => onChangeTag('all')}
                            className={
                                'ppx-mr-3 ppx-bg-product-banner-bg-green ppx-border-product-banner-bg-green ppx-font-semibold ppx-rounded-2xl ppx-shadow-lg ppx-py-2 ppx-px-5 hover:ppx-bg-product-banner-bg-green-darker'
                            }
                        >
                            Tất cả
                        </button>

                        {tagsListData.map((x) => (
                            <button
                                key={x.key}
                                onClick={() => onChangeTag(x.key)}
                                className={`ppx-mr-3 ppx-mb-3 md:ppx-mb-0 ${
                                    selectedTags.includes(x.key) ? 'ppx-bg-product-banner-bg-green-darker' : 'ppx-bg-product-banner-bg-green'
                                } ppx-border-product-banner-bg-green ppx-font-semibold ppx-rounded-2xl ppx-shadow-lg ppx-py-2 ppx-px-5 hover:ppx-bg-product-banner-bg-green-darker`}
                            >
                                {x.name}
                            </button>
                        ))}
                    </div>

                    <div className={'productArea'}>
                        <Row>
                            {showProduct.map((x: any) => (
                                <Col xs={6} md={3} key={x.id}>
                                    <ProductCard hotProduct imagePath={x.image} title={x.title} price={x.price} />
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Container>
            </div>

            <Footer />
        </div>
    );
}

export default Products;
