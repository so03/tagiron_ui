module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            // that is animation class
            animation: {
                "slide-in": "slideIn 1s ease-in-out",
                "fade-in": "fadeIn 0.5s ease-in-out",
                "fade-out": "fadeOut 0.5s ease-in-out",
            },

            // that is actual animation
            keyframes: (theme) => ({
                slideIn: {
                    "0%": {
                        opacity: 0,
                        transform: "translateX(300px)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateX(0px)",
                    },
                },
                fadeIn: {
                    "0%": {
                        opacity: 0,
                    },
                    "100%": {
                        opacity: 1,
                    },
                },
				fadeOut: {
                    "0%": {
                        opacity: 1,
                    },
                    "100%": {
                        opacity: 0,
                    },
                },
            }),
        },
    },
    variants: {
        extend: {
            display: ["focus"],
        },
    },
    plugins: [],
};
