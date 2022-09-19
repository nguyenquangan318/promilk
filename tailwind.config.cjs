/** @type {import('tailwindcss').Config} */
module.exports = {
    prefix: 'ppx-',
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
                'subtitle-gray': '#585A60'
            },
        },
    },
    plugins: [],
}
