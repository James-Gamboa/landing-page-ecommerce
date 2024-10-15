/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], 
      },
      colors: {
        "custom-bg-gray": "#F1F1F1",
        "custom-text-gray": "#6F6F6F",
        "custom-high-gray": "#2F333A",
        "custom-light-gray": "#F4F5F8",
        "custom-light-orange": "#E73C17",
        "custom-low-gray":"#D9D9D9",
        "yellow-button" : "#FF9900",
        "green-button" : "#12A05C",
        "purple-button" : "#7F7CF6"
      },
    },
  },
  plugins: [],
};
