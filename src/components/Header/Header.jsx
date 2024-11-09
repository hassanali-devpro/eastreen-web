import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Slider } from "../../constants/images";
import Navbar from "../../components/Navbar/Navbar";
import { Link as ScrollLink } from 'react-scroll';


const Header = ({ title, description, buttonText }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsRef = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % Object.keys(Slider).length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <div className="relative overflow-hidden w-full h-[100vh]">
        <div className="absolute inset-0 flex transition-opacity duration-1000 ease-in-out">
          {Object.values(Slider).map((image, index) => (
            <div
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/40 lg:from-black/70 lg:to-transparent"></div> {/* Gradient Overlay */}
              <div className="absolute w-full text-center lg:text-left lg:ml-[10%] bottom-[20%] animate-slide-up text-white">
                <h1 className="text-5xl font-semibold leading-tight">{title}</h1>
                <p className=" pb-8 text-xl max-w-xl mx-auto lg:mx-0">
                  {description}
                </p>
                <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500} className="btn bg-[#035BA8] text-white py-3 px-6 rounded-full hover:bg-[#2974b6] transition cursor-pointer">
                  {buttonText}
                </ScrollLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// Add prop types validation
Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
};

export default Header;
