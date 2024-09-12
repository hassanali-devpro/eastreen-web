import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="py-10 lg:py-0">
            <div className=" flex justify-between items-center">
                <div className="px-[5%] bg-white bg-opacity-80 w-full flex justify-between">
                <div className="flex items-center justify-between w-full">
                    {/* <a href="index.html" className="text-white text-4xl">
                        Eastreen
                    </a> */}
                    <a href=""><img src="/nav.png" className="w-40" alt="" /></a>
                    <button
                        type="button"
                        className="lg:hidden text-light"
                        onClick={() => setToggleMenu(true)}
                    >
                        <FaBars size={26} className="text-white" />
                    </button>
                </div>

                <div className="hidden lg:flex text-[#2E73B0] py-8">
                    <ul className="flex items-center">
                        <li className="ml-16 whitespace-nowrap">
                            <a
                                href="#home"
                                className="uppercase font-bold text-light hover:text-robin-blue"
                            >
                                home
                            </a>
                        </li>
                        <li className="ml-16 whitespace-nowrap">
                            <a
                                href="#services"
                                className="uppercase font-bold text-light hover:text-robin-blue"
                            >
                                Services
                            </a>
                        </li>
                        <li className="ml-16 whitespace-nowrap">
                            <a
                                href="#products"
                                className="uppercase font-bold text-light hover:text-robin-blue"
                            >
                                Products
                            </a>
                        </li>
                        <li className="ml-16 whitespace-nowrap">
                            <a
                                href="#about"
                                className="uppercase font-bold text-light hover:text-robin-blue"
                            >
                                About Us
                            </a>
                        </li>
                        <li className="ml-16 whitespace-nowrap">
                            <a
                                href="#contact"
                                className="uppercase font-bold text-light hover:text-robin-blue"
                            >
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
                </div>

                {toggleMenu && (
                    <div className="fixed inset-0 bg-robin-blue h-full w-full p-12 z-50 shadow-lg transition-transform lg:hidden bg-[#035BA8]">
                        <button
                            type="button"
                            className="absolute top-8 right-8 text-light"
                            onClick={() => setToggleMenu(false)}
                        >
                            <FaTimes size={32} className="text-white" />
                        </button>
                        <ul className="flex flex-col items-center space-y-8 text-light text-white">
                            <li>
                                <a
                                    href="#home"
                                    className="uppercase font-bold text-2xl hover:pl-4 transition-all"
                                >
                                    home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="uppercase font-bold text-2xl hover:pl-4 transition-all"
                                >
                                    about
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#work"
                                    className="uppercase font-bold text-2xl hover:pl-4 transition-all"
                                >
                                    work
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#process"
                                    className="uppercase font-bold text-2xl hover:pl-4 transition-all"
                                >
                                    process
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="uppercase font-bold text-2xl hover:pl-4 transition-all"
                                >
                                    services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#testimonials"
                                    className="uppercase font-bold text-2xl hover:pl-4 transition-all"
                                >
                                    testimonials
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="uppercase font-bold text-2xl hover:pl-4 transition-all"
                                >
                                    contact
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
