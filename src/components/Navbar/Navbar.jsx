import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Companies", path: "/Companies" },
  { label: "Sectors", path: "/Verticals" },
  { label: "About Us", path: "/about" },
  { label: "Investors", path: "/investor" },
  { label: "Careers", path: "/careers" },
];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to detect when to switch navbars
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderNavLinks = (className) =>
    navItems.map(({ label, path }) => (
      <li key={label} className="mx-6 whitespace-nowrap">
        <NavLink
          to={path}
          className={({ isActive }) =>
            `${className} ${isActive ? "font-bold" : ""}`
          }
        >
          {label}
        </NavLink>
      </li>
    ));

  return (
    <nav
      className={`fixed top-0 w-full z-10 transition-all duration-300 ease-in-out lg:py-0 py-4 ${
        isScrolled ? "bg-white shadow-md" : "bg-gradient-to-b from-gray-800 to-transparent"
      }`}
      onMouseEnter={() => setIsScrolled(true)} // Set to true on hover
      onMouseLeave={() => {
        if (window.scrollY <= 50) {
          setIsScrolled(false); // Set to false if not scrolled
        }
      }}
    >
      <div className="flex justify-between items-center px-[5%]">
        <div className="flex items-center justify-between w-full">
          <NavLink to="/">
            {!isScrolled ? (
              <h1 className="text-3xl font-semibold text-white">Eastern Group</h1>
            ) : (
              <img src="/nav.png" className="w-40" alt="Logo" />
            )}
          </NavLink>
          <button
            type="button"
            className="lg:hidden text-light"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <FaBars size={26} className={isScrolled ? "text-[#2E73B0]" : "text-white"} />
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex">
          <ul className={`flex items-center py-8 ${isScrolled ? "text-[#2E73B0]" : "text-white"}`}>
            {renderNavLinks("uppercase font-semibold hover:text-[#2E73B0]")}
          </ul>
        </div>

        {/* Mobile Nav */}
        <div
          className={`fixed inset-0 h-full w-full p-12 z-50 shadow-lg bg-[#035BA8] transition-all duration-300 ease-in-out transform ${
            toggleMenu ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
          } lg:hidden`}
        >
          <button
            type="button"
            className="absolute top-8 right-8 text-light"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <FaTimes size={32} className="text-white" />
          </button>
          <ul className="flex flex-col items-start space-y-8 text-light text-white mt-10">
            {renderNavLinks("uppercase font-semibold text-2xl hover:pl-4 transition-all")}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
