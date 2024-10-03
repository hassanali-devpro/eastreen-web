import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {  NavLink } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="absolute z-10 w-full">
            <div className="flex justify-between items-center animate-slide-down">
                <div className="px-[5%] bg-white bg-opacity-70 w-full flex justify-between">
                    <div className="flex items-center justify-between w-full">
                        <NavLink to=""><img src="/nav.png" className="w-40" alt="" /></NavLink>
                        <button
                            type="button"
                            className="lg:hidden text-light"
                            onClick={() => setToggleMenu(!toggleMenu)}
                        >
                            <FaBars size={26} className="text-[#2E73B0]" />
                        </button>
                    </div>

                    <div className="hidden lg:flex text-[#2E73B0] py-8">
                        <ul className="flex items-center">
                            <li className="ml-16 whitespace-nowrap">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => 
                                        `uppercase font-bold text-light hover:text-robin-blue ${isActive ? 'font-bold text-black' : ''}`
                                    }
                                >
                                    home
                                </NavLink>
                            </li>
                            <li className="ml-16 whitespace-nowrap">
                                <div className="relative inline-block text-left group">
                                    <NavLink
                                        to="/Companies"
                                        className={({ isActive }) => 
                                            `uppercase font-bold text-light hover:text-robin-blue ${isActive ? 'font-bold text-black' : ''}`
                                        }
                                    >
                                        Companies &#9660;
                                    </NavLink>

                                    {/* Dropdown content */}
                                    <div className="hidden absolute right-0 origin-top-right opacity-90 bg-[#035BA8] text-white rounded-md shadow-lg z-20 group-hover:block">
                                        <ul className="py-1">
                                            <li>
                                                <ScrollLink
                                                    to="Scientific"
                                                    spy={true}
                                                    smooth={true}
                                                    offset={0}
                                                    duration={500}
                                                    href="http://easternscientific.com.pk"
                                                    className="block px-4 py-2 text-sm hover:bg-white hover:text-[#035BA8]"
                                                >
                                                    Eastern Scientific Corporation
                                                </ScrollLink>
                                            </li>
                                            <li>
                                                <ScrollLink
                                                    to="Laboratories"
                                                    spy={true}
                                                    smooth={true}
                                                    offset={0}
                                                    duration={500}
                                                    href="http://easternlaboratories.com"
                                                    className="block px-4 py-2 text-sm hover:bg-white hover:text-[#035BA8]"
                                                >
                                                    Eastern Laboratories
                                                </ScrollLink>
                                            </li>
                                            <li>
                                                <ScrollLink
                                                    to="Biotechnology"
                                                    spy={true}
                                                    smooth={true}
                                                    offset={0}
                                                    duration={500}
                                                    href="http://easternbiotechnology.com"
                                                    className="block px-4 py-2 text-sm hover:bg-white hover:text-[#035BA8]"
                                                >
                                                    Eastern Biotechnology
                                                </ScrollLink>
                                            </li>
                                            <li>
                                                <ScrollLink
                                                    to="Asghar"
                                                    spy={true}
                                                    smooth={true}
                                                    offset={0}
                                                    duration={500}
                                                    href="https://asgharsons.com/"
                                                    className="block px-4 py-2 text-sm hover:bg-white hover:text-[#035BA8]"
                                                >
                                                    Asghar Sons
                                                </ScrollLink>
                                            </li>
                                            <li>
                                                <ScrollLink
                                                    to="Communication"
                                                    spy={true}
                                                    smooth={true}
                                                    offset={0}
                                                    duration={500}
                                                    href="http://eastern-comm.com"
                                                    className="block px-4 py-2 text-sm hover:bg-white hover:text-[#035BA8]"
                                                >
                                                    Eastern Communication
                                                </ScrollLink>
                                            </li>
                                            <li>
                                                <ScrollLink
                                                    to="Royal"
                                                    spy={true}
                                                    smooth={true}
                                                    offset={0}
                                                    duration={500}
                                                    href="http://quickbiodiagnostics.com"
                                                    className="block px-4 py-2 text-sm hover:bg-white hover:text-[#035BA8]"
                                                >
                                                    Royal Multani
                                                </ScrollLink>
                                            </li>
                                            <li>
                                                <ScrollLink
                                                    to="Food"
                                                    spy={true}
                                                    smooth={true}
                                                    offset={0}
                                                    duration={500}
                                                    href="https://royalmultani.pk/"
                                                    className="block px-4 py-2 text-sm hover:bg-white hover:text-[#035BA8]"
                                                >
                                                    Eastern Food Industries
                                                </ScrollLink>
                                            </li>
                                            <li>
                                                <ScrollLink
                                                    to="Batool"
                                                    spy={true}
                                                    smooth={true}
                                                    offset={0}
                                                    duration={500}
                                                    href="https://asgharsons.com/"
                                                    className="block px-4 py-2 text-sm hover:bg-white hover:text-[#035BA8]"
                                                >
                                                    Batool Asghar Foundation
                                                </ScrollLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="ml-16 whitespace-nowrap">
                                <NavLink
                                    to="/Verticals"
                                    className={({ isActive }) => 
                                        `uppercase font-bold text-light hover:text-robin-blue ${isActive ? 'font-bold text-black' : ''}`
                                    }
                                >
                                    Sectors
                                </NavLink>
                            </li>
                            <li className="ml-16 whitespace-nowrap">
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) => 
                                        `uppercase font-bold text-light hover:text-robin-blue ${isActive ? 'font-bold text-black' : ''}`
                                    }
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li className="ml-16 whitespace-nowrap">
                                <NavLink
                                    to="/investor"
                                    className={({ isActive }) => 
                                        `uppercase font-bold text-light hover:text-robin-blue ${isActive ? 'font-bold text-black' : ''}`
                                    }
                                >
                                    Investors
                                </NavLink>
                            </li>
                            <li className="ml-16 whitespace-nowrap">
                                <NavLink
                                    to="/careers"
                                    className={({ isActive }) => 
                                        `uppercase font-bold text-light hover:text-robin-blue ${isActive ? 'font-bold text-black' : ''}`
                                    }
                                >
                                    Careers
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Toggle Menu with Tailwind Transitions */}
                <div
                    className={`fixed inset-0 h-full w-full p-12 z-50 shadow-lg bg-[#035BA8] transition-all duration-300 ease-in-out transform ${toggleMenu ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
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
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) => 
                                    `uppercase font-semibold text-2xl hover:pl-4 transition-all ${isActive ? 'font-bold text-black' : ''}`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/Companies"
                                className={({ isActive }) => 
                                    `uppercase font-semibold text-2xl hover:pl-4 transition-all ${isActive ? 'font-bold text-black' : ''}`
                                }
                            >
                                Companies
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/Verticals"
                                className={({ isActive }) => 
                                    `uppercase font-semibold text-2xl hover:pl-4 transition-all ${isActive ? 'font-bold text-black' : ''}`
                                }
                            >
                                Sectors
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) => 
                                    `uppercase font-semibold text-2xl hover:pl-4 transition-all ${isActive ? 'font-bold text-black' : ''}`
                                }
                            >
                                About Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/investor"
                                className={({ isActive }) => 
                                    `uppercase font-semibold text-2xl hover:pl-4 transition-all ${isActive ? 'font-bold text-black' : ''}`
                                }
                            >
                                Investor
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/careers"
                                className={({ isActive }) => 
                                    `uppercase font-semibold text-2xl hover:pl-4 transition-all ${isActive ? 'font-bold text-black' : ''}`
                                }
                            >
                                Careers
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );  
};

export default Navbar;
