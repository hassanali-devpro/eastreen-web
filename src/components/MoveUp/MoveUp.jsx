import { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaArrowAltCircleUp } from 'react-icons/fa';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="fixed bottom-7 left-7 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FaArrowAltCircleUp className='text-5xl hover:text-[#1d5d94] text-[#2974b6] bg-white rounded-full' />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
