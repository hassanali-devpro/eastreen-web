import Header from '../../components/Header/Header';
import Contact from "../../components/Contact/Contact";
import Jobs from '../../components/Jobs'

const index = () => {


    const HeaderData = {
        title: "Join Our Team",
        description: "Eastreen Group of Companies, a global leader in diverse sectors, driving sustainable innovation and setting new standards of excellence.",
        buttonText: "Join Us",
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
            <Jobs />

            <Contact />
        </div>
    );
};

export default index;
