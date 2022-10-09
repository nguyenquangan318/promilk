/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './views/home';
import Products from './views/products';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

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
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
