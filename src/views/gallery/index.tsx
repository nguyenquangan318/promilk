/** @format */

import ScrollToTop from '../../components/scrollToTop';
import NavbarProducts from '../../components/navbarProducts';
import { Breadcrumb, Container } from 'react-bootstrap';
import React from 'react';

import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';

import galleryData from '../../data/gallery.json';

import './index.css';
import { Footer } from '../../components/footer';

function Gallery() {
    return (
        <div className={'productDetailPage ppx-pt-16 ppx-bg-product-banner-bg-green ppx-h-full'}>
            <ScrollToTop />
            <NavbarProducts />

            <div className={'ppx-pt-5 md:ppx-pb-0 ppx-pb-5'}>
                <Container>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">
                            <i className={'fa-solid fa-home'}></i> Trang chủ
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>Thư viện ảnh</Breadcrumb.Item>
                    </Breadcrumb>
                </Container>

                <div className={'mt-4 mb-5'}>
                    <Container>
                        <LightGallery plugins={[lgZoom, lgThumbnail]} mode="lg-fade">
                            {galleryData.map((x, i) => (
                                <a href={x} data-src={x} key={x} data-sub-html={`Ảnh ${i}`}>
                                    <img className={'m-1 ppx-h-72 ppx-w-auto'} alt="img1" src={x} />
                                </a>
                            ))}
                        </LightGallery>
                    </Container>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Gallery;
