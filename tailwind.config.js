module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ["Pacifico"],
        sansPro: ["Source Sans Pro"],
      },
      colors: {
        primary: "#FCB371",
        secondary: "#2A263D",
      },
      backgroundImage: {
        "home-page": "url('/img/imageBackground.png')",
        "icon-bali": "url('/img/IconBali.png')",
        "about-page": "url('/img/bg1.png')",
        reservation: "url('/img/bg2.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
