/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          primary: '#2d5c3e',
          light: '#edf5f0',
          muted: '#c8d9ce',
          dark: '#1a2e22',
          card: '#243b2c',
          border: '#3a5a45',
          label: '#7ab894',
          body: '#b8ccc0',
          cardtitle: '#e8f2ec',
          cardbody: '#8aac96',
        },
        neutral: {
          bg: '#f9f7f3',
          text: '#1a1a18',
          muted: '#5a5a55',
          border: '#e0ddd6',
          card: '#ffffff',
        },
      },
      fontFamily: {
        serif: ['Lora', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
