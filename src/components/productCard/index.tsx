/** @format */

import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import slugify from 'slugify';

type ProductCardProps = {
    styleClass?: string;
    hotProduct?: boolean;
    imagePath?: string;
    title: string;
    description?: string;
    price?: string;
    id?: number;
};

export function ProductCard(props: ProductCardProps) {
    return (
        <Link reloadDocument to={`/product/${slugify(props.title)}-${props.id}`}>
            <Card className={`mb-3 ppx-rounded-2xl ppx-shadow-lg d-flex align-items-stretch ${props.hotProduct ? 'ppx-bg-product-banner-bg-green' : 'ppx-bg-product-bg-green'} ${props.styleClass}`}>
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

                    <p className={'ppx-text-xl mb-2 ppx-text-red-500 ppx-font-medium'}>
                        {props.price} <span className={'ppx-text-md'}>vnđ</span>
                    </p>

                    <p className={'ppx-text-sm ppx-text-brand-green'}>
                        Xem chi tiết <i className="fa-solid fa-arrow-right"></i>
                    </p>
                </Card.Body>
            </Card>
        </Link>
    );
}
