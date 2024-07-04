/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',],
    
  theme: {
    extend: {
      backgroundImage: {
        "Home-bg-desk": "url('/home/background-home-desktop.jpg')",
        "Home-bg-tablet":"url('/home/background-home-tablet.jpg')",
        "Home-bg-mobile":"url('/home/background-home-mobile.jpg')",
        "Destination-bg-dest":"url('/destination/background-destination-desktop.jpg')",
        "Destination-bg-tablet":"url('/destination/background-destination-tablet.jpg')",
        "Destination-bg-mobile":"url('/destination/background-destination-mobile.jpg')",
        "Crew-bg-dest":"url('/crew/background-crew-desktop.jpg')",
        "Crew-bg-tablet":"url('/crew/background-crew-tablet.jpg')",
        "Crew-bg-mobile":"url('/crew//background-crew-mobile.jpg')",
        "Technology-bg-dest":"url('/technology/background-technology-desktop.jpg')",
        "Technology-bg-tablet":"url('/technology/background-technology-tablet.jpg')",
        "Technology-bg-mobile":"url('/technology/background-technology-mobile.jpg')",
        
      },
      colors:{
        "light-blue":"#D0D6F9",
        "dark-navy":"#0B0D17"
      },
      screens:{
        'md':'780px'
      }
    },
  },
  plugins: [],
}

