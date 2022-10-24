import { Col, Row } from 'react-bootstrap';
import React from 'react';

export function Footer() {
    return (
        <>
            {/*Footer*/}
            {/*For desktop*/}
            <div className={'ppx-hidden md:ppx-block footer ppx-bg-brand-green ppx-text-gray-100'}>
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
        </>
    );
}
