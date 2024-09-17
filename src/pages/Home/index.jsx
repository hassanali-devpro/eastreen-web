import Header from '../../components/Header/Header'
import Counter from '../../components/Counter/Counter';
import AboutUs from '../../components/AboutUs/AboutUs';
import Services from "../../components/Services/Services";
import images from "../../constants/images";
import Message from '../../components/Message';
import Contact from "../../components/Contact/Contact";

const index = () => {
    const aboutUsInfo = {
        title: "Eastern Group",
        description: `Eastern Group of Companies, headquartered in Lahore, Pakistan, is a
        multinational conglomerate with a robust presence across the MENA & CA
        Region. Its subsidiaries, including Eastern Scientific Corporation (Pvt.) Ltd,
        Asghar Sons Limited, Eastern Laboratories (Pvt) Ltd., Eastern Biotechnology
        (Pvt.) Ltd., Eastern Communication Network, Eastern Food Industries (Pvt.)
        Ltd. operate across diverse sectors, each upholding its unique vision and
        mission. Under the Eastern Group banner, they share a commitment to Leading
        with Excellence.`,
        image: images.logo
    };
    const HeaderData = {
        title: "Eastern Group of Companies",
        description: "Leading Global Conglomerate, Driving Innovation and Sustainability across Diverse Sectors Worldwide.",
        buttonText: "Contact Us",
        buttonLink: "/"
    };
    const messageText = {
        title: "Mian Muhammad Shahbaz",
        subtitle: "CEO, Eastern Group of Companies Pakistan",
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
            <Services />
            <Counter />
            <AboutUs
                title={aboutUsInfo.title}
                description={aboutUsInfo.description}
                image={aboutUsInfo.image}
            />
            <Message text={messageText} image={images.ceo} />
            <Contact />

        </div>
    );
};

export default index;
