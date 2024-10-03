import Header from '../../components/Header/Header';
import AboutUs from '../../components/AboutUs/AboutUs';
import Contact from "../../components/Contact/Contact";
import WhoWe from "../../components/WhoWe";
import images from '../../constants/images';

const index = () => {

    const aboutUsInfo = {
        title: "Batool Asghar Foundation",
        description: `The Batool Asghar Foundation is dedicated to improving lives through initiatives focused on education, healthcare, and social welfare. We believe in creating lasting change by empowering individuals and communities with the resources they need to succeed. Our educational programs aim to provide underprivileged students with access to quality education, while our healthcare initiatives focus on improving access to essential medical services. Through targeted social welfare projects, we strive to uplift the most vulnerable members of society, promoting equality and a brighter future for all.`,
        image: images.batool
    };
    const HeaderData = {
        title: "Who we are?",
        description: "Global Innovation. Local Excellence",
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
                description={"At Eastern Group of Companies, we take immense pride in our diverse portfolio of businesses, spanning sectors from telecommunications and agriculture to biotechnology and healthcare. Each of our companies, including Eastern Communication, Asghar Sons, Eastern Laboratories, and Eastern Biotechnology, is committed to innovation, quality, and customer satisfaction. Our mission is to drive progress across industries, delivering cutting-edge solutions that improve lives and create value for our customers and communities. Together, we are shaping a brighter, more sustainable future. At Eastern Group of Companies, we are more than just a collection of businesses; we are a collaborative force that seeks to inspire progress and drive transformative change. Together, we are not only meeting the needs of today but also setting the foundation for a future where every individual and community we touch can thrive."}
                image={images.ceo2}
                ceo={"Chairman and President, Eastern Group of Companies Pakistan"}
            />
                <AboutUs
                title={aboutUsInfo.title}
                description={aboutUsInfo.description}
                image={aboutUsInfo.image}
            />
            <Contact />
        </div>
    );
};

export default index;
