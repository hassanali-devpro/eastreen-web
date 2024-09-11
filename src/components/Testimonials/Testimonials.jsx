import data from "../../constants/data";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <div className="testimonials bg-[#2974B6] py-16">
            <div className="container mx-auto px-4">
                <div className="testimonials__content text-center">
                    <Slider {...settings}>
                        {data.testimonials.map((testimonial, index) => (
                            <div className="max-w-2xl mx-auto text-white" key={index}>
                                <p className="text-lg my-8">
                                    <span><FaQuoteLeft /></span>&nbsp;
                                    {testimonial.text}&nbsp;<FaQuoteRight />
                                </p>
                                <p className="uppercase font-semibold tracking-wide">{testimonial.name}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
