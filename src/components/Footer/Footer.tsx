import React from "react";

const Footer = () => {
    return (
        <footer className="footer py-16 bg-dark text-light bg-[#2974B6] text-white">
            <div className="container mx-auto">
                <div className="grid gap-20 text-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[2fr_1fr_1fr_1fr_1fr] xl:text-left">
                    <div className="footer__content--item">
                        <a href="#" className="text-4xl block mb-4 font-semibold">Eastern Group of Companies</a>
                        <p className="text-base">&copy; 2024 Eastern Group All rights reserved.</p>
                    </div>

                    <div className="footer__content--item">
                        <p className="text-xl">info@easterngrouppk.com</p>
                        <span className="block mt-2 text-base">UAN: +92 421 111 111 16</span>
                        <p className="block mt-2 text-base">Head Office: <span> Lahore, Pakistan</span></p>
                    </div>

                    <div className="footer__content--item">
                        <h3 className="text-xl mb-4">Projects</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="transition hover:text-robin-blue">Companies</a></li>
                            <li><a href="#" className="transition hover:text-robin-blue">Sectors</a></li>
                            <li><a href="#" className="transition hover:text-robin-blue">About Us</a></li>
                        </ul>
                    </div>

                    <div className="footer__content--item">
                        <h3 className="text-xl mb-4">News</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="transition hover:text-robin-blue">Career</a></li>
                            <li><a href="#" className="transition hover:text-robin-blue">Contact</a></li>
                            <li><a href="#" className="transition hover:text-robin-blue">Legals</a></li>
                        </ul>
                    </div>

                    <div className="footer__content--item">
                        <h3 className="text-xl mb-4">Social Links</h3>
                        <ul className="space-y-4">
                            <li><a href="https://www.facebook.com/easterngrouppk" target="blank" className="transition hover:text-robin-blue">Facebook</a></li>
                            <li><a href="https://x.com/easterngrouppk" target="blank" className="transition hover:text-robin-blue">Twitter</a></li>
                            <li><a href="https://www.instagram.com/easterngrouppk/" target="blank" className="transition hover:text-robin-blue">Instagram</a></li>
                            <li><a href="https://www.youtube.com/@easterngrouppk" target="blank" className="transition hover:text-robin-blue">Youtube</a></li>
                            <li><a href="https://www.linkedin.com/in/easterngrouppk/" target="blank" className="transition hover:text-robin-blue">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
