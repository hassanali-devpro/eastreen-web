import images, { verticals } from "./images";

export const skills = [
    { title: "UI/UX DESIGN", value: "80%" },
    { title: "WEB DEVELOPMENT", value: "75%" },
    { title: "APP DEVELOPMENT", value: "45%" },
    { title: "MARKETING", value: "15%" },
];

export const stats = [
    { img: images.icon_briefcase, value: 548, title: "projects completed" },
    { img: images.icon_clock, value: 1465, title: "working hours" },
    { img: images.icon_star_white, value: 612, title: "positive feedbacks" },
    { img: images.icon_heart, value: 735, title: "happy clients" },
];

export const works = [
    { img: images.work_1 },
    { img: images.work_2 },
    { img: images.work_3 },
    { img: images.work_4 },
    { img: images.work_5 },
    { img: images.work_6 },
    { img: images.work_7 },
    { img: images.work_8 }
];

export const services = [
    { img: images.bio, title: "Eastern Biotechnology", text: 'Innovating in health and environmental solutions through biotechnology.', web: 'http://easternbiotechnology.com' },
    { img: images.com, title: "Eastern Communication", text: 'Providing advanced telecommunication services for seamless connectivity.', web: 'http://eastern-comm.com' },
    { img: images.asgher, title: "Asghar Sons", text: 'A trusted family-owned business with diverse industry operations.', web: 'https://asgharsons.com/' },
    { img: images.quick, title: "Royal Multani", text: 'One of the pioneers of mango export that provides high-quality mangos.', web: 'http://quickbiodiagnostics.com' },
    { img: images.lab, title: "Eastern Laboratories", text: 'Offering accurate and reliable diagnostic and research services.', web: 'http://easternlaboratories.com' },
    { img: images.scientific, title: "Eastern Scientific Corporation", text: 'Supplying top-tier scientific equipment and resources for research.', web: 'http://easternscientific.com.pk' },
    { img: images.food, title: "Eastern Food Industries", text: 'Delivering high-quality, safe, and nutritious food products globally.', web: 'https://royalmultani.pk/' },
    { img: images.batool, title: "Batool Asghar Foundation", text: 'Promoting education, healthcare, and social welfare initiatives.', web: 'https://asgharsons.com/' },
];

export const testimonials = [
    { name: "Mian Muhammad Shahbaz, CEO", text: "At Eastern Group, our passion for innovation and excellence drives everything we do. We are committed to delivering value and creating long-term success for our clients across diverse industries." },
    { name: "Mian Muhammad Shahbaz, CEO", text: "Eastern Group is built on the principles of integrity, hard work, and cutting-edge technology. We strive to exceed expectations with every project, ensuring that we meet the unique needs of our clients." },
    { name: "Mian Muhammad Shahbaz, CEO", text: "The diversity of our services across biotechnology, food safety, and communication empowers us to make a real impact on industries that shape the future. We’re proud to lead the way in these fields." },
    { name: "Mian Muhammad Shahbaz, CEO", text: "Our collaborative approach at Eastern Group has allowed us to successfully deliver solutions that not only meet our clients’ goals but also drive meaningful change in the industries we serve." },
    { name: "Mian Muhammad Shahbaz, CEO", text: "From laboratories to charitable initiatives, our work is dedicated to advancing society, fostering innovation, and ensuring a better future for all." }
];

export const aboutUsInfo = [
    { 
        image: images.com, 
        title: "Eastern Communication", 
        description: 'Eastern Communication is committed to providing state-of-the-art telecommunication services that ensure seamless connectivity for individuals and businesses. With cutting-edge technology and a customer-centric approach, we offer reliable and efficient solutions to meet the evolving demands of the modern world. Whether you need high-speed internet, crystal-clear voice services, or reliable data solutions, we tailor our offerings to fit your needs. Our services are designed to keep you connected, no matter where you are, with unmatched support and innovation that sets us apart in the telecommunications industry.', 
        web: 'http://eastern-comm.com' 
    },
    { 
        image: images.asgher, 
        title: "Asghar Sons", 
        description: 'Asghar Sons is a family-owned enterprise that has successfully diversified across multiple industries. With roots in construction, manufacturing, and trading, we have steadily expanded our footprint to become a key player in these sectors. Our unwavering commitment to quality, integrity, and customer satisfaction has made us a trusted name, recognized for our ability to blend traditional values with modern innovation. From building infrastructure to manufacturing high-quality goods, we strive to create value for our stakeholders while ensuring long-term growth and sustainability.', 
        web: 'https://asgharsons.com/' 
    },
    { 
        image: images.lab, 
        title: "Eastern Laboratories", 
        description: 'Eastern Laboratories is a premier provider of diagnostic and research services, dedicated to offering accurate and reliable results. We combine cutting-edge technology with a team of expert professionals to ensure the highest standards of precision in our work. Our laboratories specialize in a wide range of diagnostic services, including clinical testing, molecular diagnostics, and pharmaceutical research, supporting both healthcare professionals and research institutions. We are committed to advancing scientific knowledge and improving patient outcomes through reliable, timely, and accurate services.', 
        web: 'http://easternlaboratories.com' 
    },
    { 
        image: images.quick, 
        title: "Royal Multani", 
        description: 'Royal Multani is a pioneer in mango exports, renowned for delivering the highest quality mangos to markets around the world. We carefully oversee every step of the process, from cultivation to export, ensuring that our mangos retain their unparalleled taste, freshness, and quality. By implementing strict international standards, we have gained a global reputation for excellence, making Royal Multani a leading name in the agricultural export industry. Our mission is to bring the authentic flavors of Pakistan’s finest mangos to consumers worldwide, spreading the rich heritage of Multani mangoes.', 
        web: 'http://quickbiodiagnostics.com' 
    },
    { 
        image: images.bio, 
        title: "Eastern Biotechnology", 
        description: 'Eastern Biotechnology is at the forefront of innovation in health and environmental solutions. Our research spans a wide range of biotechnological applications, including genetic engineering, bioinformatics, and environmental monitoring. We focus on developing products and services that address critical global challenges, such as combating diseases, enhancing agricultural yields, and promoting environmental sustainability. Through collaborative research and a commitment to excellence, we aim to contribute to a healthier and more sustainable world, pushing the boundaries of what biotechnology can achieve.', 
        web: 'http://easternbiotechnology.com' 
    },
    { 
        image: images.scientific, 
        title: "Eastern Scientific Corporation", 
        description: 'Eastern Scientific Corporation is a leading supplier of high-quality scientific equipment and resources for the research community. From advanced microscopy and imaging tools to precision laboratory instruments, we provide scientists with the equipment they need to drive discoveries and advancements across multiple fields. Our commitment to supporting research excellence is backed by a comprehensive catalog of specialized tools and technologies, ensuring that scientists can access the best resources to further their work. We pride ourselves on being a trusted partner for academic institutions, laboratories, and researchers worldwide.', 
        web: 'http://easternscientific.com.pk' 
    },
    { 
        image: images.food, 
        title: "Eastern Food Industries", 
        description: 'Eastern Food Industries is a global leader in the production and distribution of safe, nutritious, and high-quality food products. Our portfolio spans a diverse range of food categories, all sourced from the finest ingredients and manufactured in world-class facilities. We are passionate about promoting healthy living by offering food products that not only taste great but also contribute to a balanced diet. By combining advanced food processing techniques with a deep commitment to food safety, we ensure that consumers everywhere have access to wholesome, delicious, and nutritious meals.', 
        web: 'https://royalmultani.pk/' 
    },
    { 
        image: images.batool, 
        title: "Batool Asghar Foundation", 
        description: 'The Batool Asghar Foundation is dedicated to improving lives through initiatives focused on education, healthcare, and social welfare. We believe in creating lasting change by empowering individuals and communities with the resources they need to succeed. Our educational programs aim to provide underprivileged students with access to quality education, while our healthcare initiatives focus on improving access to essential medical services. Through targeted social welfare projects, we strive to uplift the most vulnerable members of society, promoting equality and a brighter future for all.', 
        web: 'https://asgharsons.com/' 
    }
];

export const messageText = [
    {
        image: verticals.agri,
        title: "Agriculture",
        subtitle: "Innovative Solutions for Modern Farming",
        paragraph1: "Eastern Group of Companies is committed to transforming agriculture with advanced technologies and sustainable practices.",
        paragraph2: "We offer solutions that enhance productivity, efficiency, and sustainability in farming and agricultural processes.",
        paragraph3: "Our expertise in agricultural technology ensures that farmers can achieve optimal results while preserving natural resources."
    },
    {
        image: verticals.vet,
        title: "Veterinary",
        subtitle: "Advanced Care for Animal Health",
        paragraph1: "We provide cutting-edge veterinary solutions to ensure the health and well-being of animals.",
        paragraph2: "Our services include diagnostic tools, treatment options, and care solutions designed to support veterinarians and pet owners alike.",
        paragraph3: "Eastern Group of Companies is dedicated to improving animal health through innovative technology and expert care."
    },
    {
        image: verticals.meal,
        title: "Food and Beverages",
        subtitle: "Quality and Innovation in Every Bite",
        paragraph1: "Our focus is on enhancing the food and beverage industry with solutions that ensure quality and efficiency from production to consumption.",
        paragraph2: "We work with businesses to streamline processes, improve product quality, and meet the demands of modern consumers.",
        paragraph3: "Eastern Group of Companies is your partner in creating exceptional food and beverage experiences."
    },
    {
        image: verticals.biotech,
        title: "Biotechnology and Diagnostics",
        subtitle: "Pioneering Solutions for Healthcare Advancement",
        paragraph1: "We offer state-of-the-art biotechnology and diagnostic solutions to advance healthcare and medical research.",
        paragraph2: "Our innovations support better diagnostics, research capabilities, and treatments, contributing to significant breakthroughs in medicine.",
        paragraph3: "Eastern Group of Companies is at the forefront of biotechnology, driving progress in the healthcare industry."
    },
    {
        image: verticals.health,
        title: "Healthcare and Life Sciences",
        subtitle: "Comprehensive Solutions for Better Health",
        paragraph1: "Our healthcare and life sciences services focus on improving patient care and advancing medical research.",
        paragraph2: "We provide a range of solutions from healthcare management to life sciences research, all designed to enhance health outcomes.",
        paragraph3: "Eastern Group of Companies is dedicated to supporting the healthcare sector with innovative and effective solutions."
    },
    {
        image: verticals.marketing,
        title: "Marketing and Communication",
        subtitle: "Strategic Solutions for Effective Engagement",
        paragraph1: "We specialize in marketing and communication strategies that drive brand growth and customer engagement.",
        paragraph2: "Our services include digital marketing, public relations, and strategic communication designed to elevate your brand's presence.",
        paragraph3: "Eastern Group of Companies helps businesses connect with their audience through impactful and targeted marketing solutions."
    },
    {
        image: verticals.education,
        title: "Education",
        subtitle: "Empowering Learning and Development",
        paragraph1: "We provide innovative educational solutions that enhance learning experiences and support academic achievement.",
        paragraph2: "Our offerings include educational technology, curriculum development, and learning management systems to support educators and students.",
        paragraph3: "Eastern Group of Companies is committed to advancing education through technology and innovative practices."
    },
    {
        image: verticals.services,
        title: "Services",
        subtitle: "Comprehensive Solutions for Diverse Needs",
        paragraph1: "Our services span various industries, offering tailored solutions to meet the unique needs of our clients.",
        paragraph2: "From consulting to implementation, we provide expert services designed to drive efficiency and success across different sectors.",
        paragraph3: "Eastern Group of Companies delivers high-quality services to support and enhance your business operations."
    }
];

export default { skills, stats, works, services, testimonials, messageText };
