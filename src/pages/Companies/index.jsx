import Header from '../../components/Header/Header';
import AboutUs from '../../components/AboutUs/AboutUs';
import Contact from "../../components/Contact/Contact";
import {aboutUsInfo} from "../../constants/data";

const index = () => {
    

    const HeaderData = {
        title: "Eastern Companies",
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
            {aboutUsInfo.map((info, index) => (
                <AboutUs
                key={index}
                title={info.title}
                description={info.description}
                image={info.image}
                web={info.web}
                />
            ))}
            <Contact />
            </div>
    );
};

export default index;
