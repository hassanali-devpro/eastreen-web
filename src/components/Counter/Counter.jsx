import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Counter = () => {
    const [counterOn, setCounterOn] = useState(false);
    const [isEnter, setIsEnter] = useState(false);

    return (
        <div className="bg-[#2974b6] px-[10%] sm:py-[5%] py-[10%] grid md:grid-cols-2 ">
            <ScrollTrigger onEnter={() => setIsEnter(true)} onExit={() => setIsEnter(false)}>
                <div className={isEnter ? 'animate-slide-right' : ''}>
                    <h1 className="text-4xl font-semibold text-white">Our Mission</h1>
                    {/* <div className="border-b-2 w-[100%] my-5" style={{ borderImage: 'linear-gradient(to right, #ffffff, #c000ff) 1' }}></div> */}
                    <p className="pb-10 text-gray-300 pt-5">
                    To drive positive change through cutting-edge solutions and ethical practices.</p>
                    <h1 className="text-4xl font-semibold text-white">Our Vision</h1>
                    {/* <div className="border-b-2 w-[100%] my-5" style={{ borderImage: 'linear-gradient(to right, #ffffff, #c000ff) 1' }}></div> */}
                    <p className="pb-10 text-gray-300 pt-5">
                    To be a global leader in innovation, sustainability, and excellence across all sectors.</p>
                </div>
            </ScrollTrigger>
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <div className="flex items-center">
                    <div className="md:block hidden h-64 w-1 bg-gradient-to-b from-[#2974b6] via-white to-[#2974b6] mx-10"></div>
                    <div className="flex gap-20 w-full h-full items-center justify-center" id="about">
                        <div>
                            <h1 className="text-gray-200 text-6xl font-bold m">
                                {counterOn && <CountUp start={0} end={7} duration={2} delay={0} />}
                            </h1>
                            <p className="text-gray-200 font-semibold">Companies</p>
                        </div>
                        <div>
                            <h1 className="text-gray-200 text-6xl font-bold ">
                                {counterOn && <CountUp start={0} end={99} duration={2} delay={0} />}%
                            </h1>
                            <p className="text-gray-200 font-semibold">Satisfied Clients</p>
                        </div>
                    </div>
                </div>
            </ScrollTrigger>
        </div>
    );
};

export default Counter;
