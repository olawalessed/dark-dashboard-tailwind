module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["poppins"],
      serif: ["meriweather"],
    },
    extend: {
      spacing: {
        34: '8.5em'
      },
      colors: {
        gray: {
          900: "#1F1D2B",
          800: "#252836",
          500: "#808191",
          400: "#bB7B9D2",
        },
        orange: {
          DEFAULT: "#FF7551"
        },
        green: {
          DEFAULT: "#22B07D"
        }
      },
      fontSize: {
        xxs: "0.6875rem",
      },
      borderRadius: {
        '2.5xl': '1.25rem'
      },
      backgroundImage: {
        'card-one': "url(../../public/static/fishy.jpg)",
        'card-two': "url(../../public/static/mousy.jpg)"
      },
      maxWidth: {
        'xxs': '15rem'
      }
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
