import Header from '../../components/Header/Header';
import AboutUs from '../../components/AboutUs/AboutUs';
import Contact from "../../components/Contact/Contact";
import {aboutUsInfo} from "../../constants/data";

const index = () => {
    

    const HeaderData = {
        title: "Eastern Companies",
        description: "Driving Innovation Through Expertise",
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
                ID={info.ID}
                />
            ))}
            <Contact />
            </div>
    );
};

export default index;
