/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        colors: {
            primary: "#1D438C",
            link: "#2556B5",
            white: "#fff",
            black: "#253858",
            gray: "#71787E",
            footer_bg: "#EDEDED",
            border_c: "#C1C1C1",
            brown_t: "#646464",
            danger: '#EB5757',
            lawyer_name:"#586069",
            filter_gray: '#8A92A6',
        },
        backgroundImage: {
            primary_gr: "linear-gradient(83.23deg, #132852 15.54%, rgba(13, 59, 147, 0.92) 100.82%)",
            secondary_gr: "linear-gradient(267.49deg, #132852 -12.16%, rgba(13, 59, 147, 0.92) 53.26%)",
            header_gr:"linear-gradient(83.23deg, #132852 15.54%, rgba(13, 59, 147, 0.92) 100.82%);"
        },
        extend: {
            fontFamily: {
                gilroy: ["raleway", 'red_hat_text'],
            },
            boxShadow: {
                adventage: "10px 24px 44px rgba(95, 94, 94, 0.26)",
                lawyer: ' 0px 14px 24px rgba(12, 12, 12, 0.25)'
            },
            backgroundImage: {
                'bg-one': "url('/img/bg-one.jpg')"
            }

        },
    },
    plugins: [],
}
