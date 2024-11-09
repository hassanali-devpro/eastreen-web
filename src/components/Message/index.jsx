import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import PropTypes from 'prop-types'; // Import PropTypes

const Message = ({ text, image }) => {
  const [isEnter, setIsEnter] = useState(false);

  return (
    <div
      className="w-[98.7vw] lg:h-[90vh] bg-cover lg:bg-center bg-left bg-no-repeat px-[10%] my-1"
      style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.0)), url(${image})` }}
    >
      <div className="container mx-auto">
        <div className="min-h-[calc(100vh-106px)] flex flex-col items-center justify-center text-center text-white lg:flex-row">
          <ScrollTrigger onEnter={() => setIsEnter(true)} onExit={() => setIsEnter(false)}>
            <div className={`${isEnter ? 'animate-slide-right' : 'opacity-0 translate-y-10'} transition-all duration-1000 text-left `}>
              <h1 className="text-4xl font-semibold leading-tight">{text.title}</h1>
              <div className="w-full h-0.5 bg-white my-4"></div>
              <h1 className="text-2xl font-semibold leading-tight">{text.subtitle}</h1>
              <p className="py-5 max-w-xl lg:mx-0">{text.paragraph1}</p>
              <p className="pb-5 max-w-xl lg:mx-0">{text.paragraph2}</p>
              <p className="pb-5 max-w-xl lg:mx-0">{text.paragraph3}</p>
            </div>
          </ScrollTrigger>
          <div className="lg:w-[60%]"></div>
        </div>
      </div>
    </div>
  );
};

Message.propTypes = {
  text: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    paragraph1: PropTypes.string.isRequired,
    paragraph2: PropTypes.string.isRequired,
    paragraph3: PropTypes.string.isRequired,
  }).isRequired,
  image: PropTypes.string.isRequired,
};

export default Message;
