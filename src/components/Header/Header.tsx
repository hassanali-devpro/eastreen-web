import React from "react";
import Navbar from "../Navbar/Navbar";
import eastreen from "../../assets/images/eastreen.jpg";

const Header = () => (
  <div
    className="min-h-screen bg-cover bg-center"
    style={{
      width: '98.7vw', // Full width of the viewport
      height: '101vh', // Full height of the viewport
      background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(${eastreen})`,
      backgroundSize: 'cover', // Ensure the background covers the entire container
      backgroundPosition: 'center', // Center the background image
      backgroundRepeat: "no-repeat"
    }}
  >
    <Navbar />
    <div className="container mx-auto">
      <div className="min-h-[calc(100vh-106px)] flex flex-col items-center justify-center text-center text-white lg:flex-row">
        <div className="lg:w-1/2 mt-[10%] text-center lg:text-left animate-slide-up">
          <h1 className="text-5xl font-semibold leading-tight">Eastreen Group of Companies</h1>
          <p className="py-5 pb-10 max-w-xl mx-auto lg:mx-0">
            Leading Global Conglomerate, Driving Innovation and Sustainability across Diverse Sectors Worldwide.
          </p>
          <a href="/" className="btn bg-[#035BA8] text-white py-3 px-6 rounded-lg hover:bg-[#2974b6] transition">
            Contact Us
          </a>
        </div>
        <div className="lg:w-1/2"></div>
      </div>
    </div>
  </div>
);

export default Header;
