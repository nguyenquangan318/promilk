/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './views/home';
import Products from './views/products';
import ProductDetail from './views/productDetail';
import Gallery from './views/gallery';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/products',
        element: <Products />,
    },
    {
        path: '/product/:slug-:id',
        element: <ProductDetail />,
    },
    {
        path: '/gallery',
        element: <Gallery />,
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
