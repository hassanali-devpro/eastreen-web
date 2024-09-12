import data from "../../constants/data";
import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';

const Services = () => {
    const [isEnter, setIsEnter] = useState(false);

    return (
        <div className="services py-16 bg-whitesmoke">
            <div className="container mx-auto px-4">
                <div className="flex justify-center w-full mb-8">
                    <h2 className="text-2xl font-semibold uppercase">
                        Eastreen Group of Companies
                    </h2>
                </div>
                <ScrollTrigger onEnter={() => setIsEnter(true)} onExit={() => setIsEnter(false)}>
                    <div className="grid gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {data.services.map((service, index) => (
                            <a href={service.web} target="_blank" rel="noopener noreferrer" className={`${isEnter ? 'animate-slide-up' : 'opacity-0 translate-y-10'} p-8 text-center transform transition-transform duration-300 hover:shadow-2xl hover:-translate-y-3 rounded-3xl`} key={index}>
                                <img src={service.img} alt="" className="w-32 mx-auto opacity-70" />
                                <h4 className="text-lg uppercase mt-6 mb-4 opacity-80">{service.title}</h4>
                                <p className="max-w-xs mx-auto text-gray-600">{service.text}</p>
                            </a>
                        ))}
                    </div>
                </ScrollTrigger>
            </div>
        </div>
    );
};

export default Services;
