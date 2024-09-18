import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import PropTypes from 'prop-types'; // Import PropTypes

const AboutUs = ({ title, description, image, web, ceo }) => {
    const [isEnter, setIsEnter] = useState(false);

    return (
        <ScrollTrigger onEnter={() => setIsEnter(true)} onExit={() => setIsEnter(false)}>
            <div className='p-[10%]'>
                <div className="">
                    <div className="flex justify-between lg:flex-row flex-col">
                        <div className={`${isEnter ? 'animate-slide-right' : 'opacity-0 translate-y-10'} transition-all duration-1000 lg:w-[50%]`}>
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
                                <div className="flex gap-5">
                                    <a href={web} className="btn bg-[#035BA8] text-white py-3 px-6 rounded-lg hover:bg-[#2974b6] transition w-full text-center ">
                                        Visit
                                    </a>
                                    <a href={web} className="btn text-[#035BA8] bg-white py-3 px-6 rounded-lg hover:bg-[#2974b6] hover:text-white transition w-full text-center border-2 border-[#2974b6]">
                                        Contact
                                    </a>
                                </div>
                            ) : null}
                        </div>
                        <img src={image} alt="about us image" className={`${isEnter ? 'animate-slide-left' : 'opacity-0 translate-y-10'} transition-all duration-1000 lg:w-[40%] rounded-3xl`} />
                    </div>
                </div>
            </div>
        </ScrollTrigger>
    );
};

AboutUs.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    web: PropTypes.string,
    ceo: PropTypes.string,
};

export default AboutUs;
