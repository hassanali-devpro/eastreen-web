import Header from '../../components/Header/Header';
import AboutUs from '../../components/AboutUs/AboutUs';
import Contact from "../../components/Contact/Contact";
import WhoWe from "../../components/WhoWe";
import images from '../../constants/images';

const index = () => {


    const HeaderData = {
        title: "Who we are?",
        description: "Eastreen Group of Companies, a global leader in diverse sectors, driving sustainable innovation and setting new standards of excellence.",
        buttonText: "Contact Us",
        buttonLink: "/"
    };

    return (
        <div>
            <Header
                title={HeaderData.title}
                description={HeaderData.description}
                buttonText={HeaderData.buttonText}
                buttonLink={HeaderData.buttonLink}
            />
            <WhoWe />
            <AboutUs
                title={"Mian Muhammad Shahbaz"}
                description={"At Eastern Group of Companies, we take immense pride in our diverse portfolio of businesses, spanning sectors from telecommunications and agriculture to biotechnology and healthcare. Each of our companies, including Eastern Communication, Asghar Sons, Eastern Laboratories, and Eastern Biotechnology, is committed to innovation, quality, and customer satisfaction. Our mission is to drive progress across industries, delivering cutting-edge solutions that improve lives and create value for our customers and communities. Together, we are shaping a brighter, more sustainable future."}
                image={images.ceo}
                ceo={"CEO, Eastern Group of Companies Pakistan"}
            />
            <Contact />
        </div>
    );
};

export default index;
