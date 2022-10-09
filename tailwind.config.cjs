/** @type {import('tailwindcss').Config} */
module.exports = {
    prefix: 'ppx-',
    important: true,
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
        },
        extend: {
            height: {
                '128': '32rem',
            },
            colors: {
                'bg-green': '#B5D9D25C',
                'brand-green': '#2A7361',
                'button-green': '#2A7361',
                'subtitle-gray': '#585A60',
                'product-banner-bg-green': '#DEEBE9',
                'product-bg-green': '#EAFAF3',
            },
        },
    },
    plugins: [],
}
