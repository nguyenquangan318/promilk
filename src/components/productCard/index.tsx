/** @format */

import React from 'react';
import { Card } from 'react-bootstrap';

type ProductCardProps = {
    styleClass?: string;
    hotProduct?: boolean;
    imagePath?: string;
    title?: string;
    description?: string;
    price?: string;
};

export function ProductCard(props: ProductCardProps) {
    return (
        <Card className={`mb-3 ppx-rounded-2xl ppx-shadow-lg ppx-h-100 ${props.hotProduct ? 'ppx-bg-product-banner-bg-green' : 'ppx-bg-product-bg-green'} ${props.styleClass}`}>
            {props.imagePath ? (
                <div className={'p-2'}>
                    <img className={'ppx-rounded-2xl'} src={props.imagePath} alt={props.title} />
                </div>
            ) : (
                <></>
            )}

            <Card.Body>
                <Card.Title className={'ppx-text-brand-green'}>{props.title}</Card.Title>

                <p className={'ppx-text-sm mb-2'}>{props.description}</p>

                <p className={'ppx-text-2xl mb-2 ppx-text-red-500 ppx-font-medium'}>{props.price} đ</p>

                <a href={'aklnsd'} className={'ppx-text-sm ppx-text-brand-green'}>
                    Xem chi tiết <i className="fa-solid fa-arrow-right"></i>
                </a>
            </Card.Body>
        </Card>
    );
}
