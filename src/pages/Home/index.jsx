import Header from '../../components/Header/Header'
import Counter from '../../components/Counter/Counter';
import AboutUs from '../../components/AboutUs/AboutUs';
import Services from "../../components/Services/Services";
import images from "../../constants/images";
import Message from '../../components/Message';
import Contact from "../../components/Contact/Contact";
import FAQ from "../../components/FAQ/Index";

const index = () => {
    const aboutUsInfo = {
        title: "Eastern Group",
        description: `Welcome to Eastern Group of Companies—your trusted partner for innovative solutions in diagnostics, biotech products, scientific supplies, agri-food trading, media communication and more. Explore our global impact and commitment to excellence in various sectors.`,
        image: images.logo
    };
    const HeaderData = {
        title: "Eastern Group of Companies",
        description: "Leading with Excellence",
        buttonText: "Contact Us",
        buttonLink: "/"
    };
    const messageText = {
        title: "Mian Muhammad Shahbaz",
        subtitle: "Chairman and President Eastern Group of Companies Pakistan",
        paragraph1: "At Eastern Group of Companies, our vision is to lead Pakistan’s business landscape through innovation, sustainability, and excellence. We are dedicated to creating value for our stakeholders, empowering our employees, and contributing positively to society.",
        paragraph2: "As we grow, our focus remains on quality, integrity, and customer satisfaction. We aim to be the preferred choice for businesses and consumers, driving progress and supporting Pakistan’s economic development.",
        paragraph3: "Together, we will build a lasting legacy of success."
    };


    return (
        <div>
            <Header
                title={HeaderData.title}
                description={HeaderData.description}
                buttonText={HeaderData.buttonText}
                buttonLink={HeaderData.buttonLink} />
            <AboutUs
                title={aboutUsInfo.title}
                description={aboutUsInfo.description}
                image={aboutUsInfo.image}
            />
            <Services />
            <Counter />
            <Message text={messageText} image={images.ceo} />
            <FAQ />
            <Contact />

        </div>
    );
};

export default index;
