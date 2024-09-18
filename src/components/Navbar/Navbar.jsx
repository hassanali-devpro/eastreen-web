import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className=" absolute z-10 w-full">
            <div className="flex justify-between items-center animate-slide-down">
                <div className="px-[5%] bg-white bg-opacity-70 w-full flex justify-between">
                {/* <div className="px-[5%] bg-gradient-to-b from-white pb-10 to-transparent w-full flex justify-between"> */}
                    <div className="flex items-center justify-between w-full">
                        <a href=""><img src="/nav.png" className="w-40" alt="" /></a>
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
                                <a
                                    href="/"
                                    className="uppercase font-bold text-light hover:text-robin-blue"
                                >
                                    home
                                </a>
                            </li>
                            <li className="ml-16 whitespace-nowrap">
                                <a
                                    href="/Companies"
                                    className="uppercase font-bold text-light hover:text-robin-blue"
                                >
                                    Companies
                                </a>
                            </li>
                            <li className="ml-16 whitespace-nowrap">
                                <a
                                    href="/Verticals"
                                    className="uppercase font-bold text-light hover:text-robin-blue"
                                >
                                    Sectors
                                </a>
                            </li>
                            <li className="ml-16 whitespace-nowrap">
                                <a
                                    href="/about"
                                    className="uppercase font-bold text-light hover:text-robin-blue"
                                >
                                    About Us
                                </a>
                            </li>
                            <li className="ml-16 whitespace-nowrap">
                                <a
                                    href="/contact"
                                    className="uppercase font-bold text-light hover:text-robin-blue"
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Toggle Menu with Tailwind Transitions */}
                <div
                    className={`fixed inset-0 h-full w-full p-12 z-50 shadow-lg bg-[#035BA8] transition-all duration-300 ease-in-out transform ${
                        toggleMenu ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
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
                            <a
                                href="/"
                                className="uppercase font-semibold text-2xl hover:pl-4 transition-all"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/Companies"
                                className="uppercase font-semibold text-2xl hover:pl-4 transition-all"
                            >
                                Companies
                            </a>
                        </li>
                        <li>
                            <a
                                href="/Verticals"
                                className="uppercase font-semibold text-2xl hover:pl-4 transition-all"
                            >
                                Sectors
                            </a>
                        </li>
                        <li>
                            <a
                                href="/about"
                                className="uppercase font-semibold text-2xl hover:pl-4 transition-all"
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contact"
                                className="uppercase font-semibold text-2xl hover:pl-4 transition-all"
                            >
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
