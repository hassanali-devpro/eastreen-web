import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Counter = () => {
    const [counterOn, setCounterOn] = useState(false);
    const [isEnter, setIsEnter] = useState(false);

    return (
        <div className="bg-[#2974b6] px-[10%] sm:py-[5%] py-[10%]">
            <ScrollTrigger onEnter={() => setIsEnter(true)} onExit={() => setIsEnter(false)}>
                <div className={isEnter ? 'animate-slide-up' : ''}>
                    <h1 className="text-4xl font-semibold text-white">Our Achievements</h1>
                    {/* <div className="border-b-2 w-[100%] my-5" style={{ borderImage: 'linear-gradient(to right, #ffffff, #c000ff) 1' }}></div> */}
                    <p className="pb-10 text-gray-300 pt-5">
                        Our services enhance your online presence and user engagement through Web Development, Mobile Development, UI/UX Design, SEO, Digital Marketing, and Graphic Designing. We create robust websites, high-performance apps, seamless user experiences, improved search engine rankings, data-driven marketing campaigns, and captivating visuals, all tailored to your business goals.
                    </p>
                </div>
            </ScrollTrigger>

            <div>
                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                    <div className="grid lg:grid-cols-4 grid-cols-2 gap-5" id="about">
                        <div>
                            <h1 className="text-gray-200 text-6xl font-bold">
                                {counterOn && <CountUp start={0} end={100} duration={2} delay={0} />}+
                            </h1>
                            <p className="text-gray-200 font-semibold">Sales</p>
                        </div>
                        <div>
                            <h1 className="text-gray-200 text-6xl font-bold">
                                {counterOn && <CountUp start={0} end={99} duration={2} delay={0} />}%
                            </h1>
                            <p className="text-gray-200 font-semibold">Happy Clients</p>
                        </div>
                        <div>
                            <h1 className="text-gray-200 text-6xl font-bold">
                                {counterOn && <CountUp start={0} end={70} duration={2} delay={0} />}+
                            </h1>
                            <p className="text-gray-200 font-semibold">Team Members</p>
                        </div>
                        <div>
                            <h1 className="text-gray-200 text-6xl font-bold">
                                {counterOn && <CountUp start={0} end={16} duration={2} delay={0} />}
                            </h1>
                            <p className="text-gray-200 font-semibold">Sub Companies</p>
                        </div>
                    </div>
                </ScrollTrigger>
            </div>
        </div>
    );
};

export default Counter;
