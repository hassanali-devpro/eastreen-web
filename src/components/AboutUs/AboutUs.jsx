import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
// import images from "../../constants/images";
// import "./AboutUs.css";

const AboutUs = () => {
    const [isEnter, setIsEnter] = useState(false);

    return (
        <ScrollTrigger onEnter={() => setIsEnter(true)} onExit={() => setIsEnter(false)}>
            <div className='p-[10%]'>
                <div className={`${isEnter ? 'animate-slide-up' : 'opacity-0 translate-y-10'} transition-all duration-700`}>
                    <h2 className='text-4xl font-semibold'>Who we are?</h2>
                    <p className='text-lg py-5'>
                        Eastern Group is a conglomerate engaged in trading, retail, manufacturing, and consultancy services across various industries. Committed to excellence and innovation, we contribute positively to the growth and development of industries and communities worldwide.
                    </p>
                    {/* <img src={images.signature} alt="" /> */}
                </div>
            </div>
        </ScrollTrigger>
    );
};

export default AboutUs;
