/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            sans: ['"Montserrat"', "sans-serif"],
        },
        extend: {
            fontSize: {
                "10xl": "9.5rem",
                "20xl": "12.5rem",
            },
            colors: {
                "main-background-color": "var(--main-background-color)",
                "secondary-color": "var(--secondary-color)",
                "secondary-hover-color": "var(--secondary-hover-color)",
                "cat-hover-color": "var(--cat-hover-color)",
                "footer-copyright-color": "var(--footer-copyright-color)",
            },
        },
    },
    plugins: [],
};
