import Header from '../../components/Header/Header';
import Message from '../../components/Message';
import Contact from "../../components/Contact/Contact";
import { messageText } from "../../constants/data"; // Ensure this import matches the export in data.js

const Index = () => {
    const HeaderData = {
        title: "Operating Sectors",
        description: "Leading Global Conglomerate, Driving Innovation and Sustainability across Diverse Sectors Worldwide.",
        buttonText: "Contact Us",
        buttonLink: "/",
    };

    return (
        <div>
            <Header
                title={HeaderData.title}
                description={HeaderData.description}
                buttonText={HeaderData.buttonText}
                buttonLink={HeaderData.buttonLink}
            />
            {messageText.map((item, index) => (
                <Message key={index} text={item} image={item.image} />
            ))}
            <Contact />
        </div>
    );
};

export default Index;
