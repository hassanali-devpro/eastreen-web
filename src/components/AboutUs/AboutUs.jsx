import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import PropTypes from 'prop-types';
import { Link as ScrollLink } from 'react-scroll';


const AboutUs = ({ title, description, image, web, ceo, ID }) => {
    const [isEnter, setIsEnter] = useState(false);

    return (
        <ScrollTrigger onEnter={() => setIsEnter(true)} onExit={() => setIsEnter(false)}>
            <div className='p-[10%]' id={ID}>
                <div className="">
                    <div className="flex lg:flex-row flex-col items-center lg:justify-between">
                        <div className={`${isEnter ? 'animate-slide-right' : 'opacity-0 translate-y-10'} transition-all duration-1000 lg:w-[50%] `}>
                            <h2 className='text-4xl font-semibold'>{title}</h2>
                            {ceo && (
                                <>
                                    <div className="w-full h-0.5 bg-[#035BA8] my-2"></div>
                                    <h2 className='text-xl font-semibold'>{ceo}</h2>
                                </>
                            )}

                            <p className='text-lg py-5'>
                                {description}
                            </p>
                            {web ? ( // Conditional rendering based on the 'web' prop
                                <div className="flex w-[70%] gap-5">
                                    <a href={web} target='blank' className="btn bg-[#035BA8] text-white py-3 px-6 rounded-full hover:bg-[#2974b6] transition w-full text-center ">
                                        Visit
                                    </a>
                                    <ScrollLink
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500} 
                                    className="btn bg-white text-[#2974b6] border-2 border-[#2974b6] py-3 px-6 rounded-full hover:bg-[#2974b6] transition w-full text-center ">
                                        Contact
                                    </ScrollLink>
                                </div>
                            ) : null}
                        </div>
                        <img src={image} alt="about us image" className={`${isEnter ? 'animate-slide-left' : 'opacity-0 translate-y-10'} transition-all duration-1000 lg:size-[30%] rounded-3xl`} />
                    </div>
                </div>
            </div>
        </ScrollTrigger>
    );
};

AboutUs.propTypes = {
    ID: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    web: PropTypes.string,
    ceo: PropTypes.string,
};

export default AboutUs;
