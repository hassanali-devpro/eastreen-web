import images from "./images";

// Define types for each data structure

// Skill type
interface Skill {
    title: string;
    value: string; // e.g., "80%"
}

// Stat type
interface Stat {
    img: string; // URL or path to the image
    value: number;
    title: string;
}

// Work type
interface Work {
    img: string; // URL or path to the image
}

// Service type
interface Service {
    img: string; // URL or path to the image
    title: string;
    text: string;
    web: string; // If `web` is not always present, make it `web?: string;`
}

// Testimonial type
interface Testimonial {
    name: string;
    text: string;
}

// Data arrays with types

const skills: Skill[] = [
    { title: "UI/UX DESIGN", value: "80%" },
    { title: "WEB DEVELOPMENT", value: "75%" },
    { title: "APP DEVELOPMENT", value: "45%" },
    { title: "MARKETING", value: "15%" },
];

const stats: Stat[] = [
    { img: `${images.icon_briefcase}`, value: 548, title: "projects completed" },
    { img: `${images.icon_clock}`, value: 1465, title: "working hours" },
    { img: `${images.icon_star_white}`, value: 612, title: "positive feedbacks" },
    { img: `${images.icon_heart}`, value: 735, title: "happy clients" },
];

const works: Work[] = [
    { img: `${images.work_1}` },
    { img: `${images.work_2}` },
    { img: `${images.work_3}` },
    { img: `${images.work_4}` },
    { img: `${images.work_5}` },
    { img: `${images.work_6}` },
    { img: `${images.work_7}` },
    { img: `${images.work_8}` }
];

const services: Service[] = [
    { img: `${images.bio}`, title: "Estern Biotechnology", text: 'Innovating in health and environmental solutions through biotechnology.', web: 'http://easternbiotechnology.com' },
    { img: `${images.com}`, title: "Estern Communication", text: 'Providing advanced telecommunication services for seamless connectivity.', web: 'http://eastern-comm.com' },
    { img: `${images.asgher}`, title: "Asgher Sons", text: 'A trusted family-owned business with diverse industry operations.', web: 'https://asgharsons.com/' },
    { img: `${images.quick}`, title: "Royal Multani", text: 'One of the pioneer of mango exporter that provide high quality mangos.', web: 'http://quickbiodiagnostics.com' },
    { img: `${images.lab}`, title: "Eastern Laboratories", text: 'Offering accurate and reliable diagnostic and research services.', web: 'http://easternlaboratories.com' },
    { img: `${images.scientific}`, title: "Eastern Scientific Corporation", text: 'Supplying top-tier scientific equipment and resources for research.', web: 'http://easternscientific.com.pk' },
    { img: `${images.food}`, title: "Eastern Food Industries", text: 'Delivering high-quality, safe, and nutritious food products globally.', web: 'https://royalmultani.pk/' },
    { img: `${images.batool}`, title: "Batool Asgher Foundation", text: 'Promoting education, healthcare, and social welfare initiatives.', web: 'https://asgharsons.com/' },
];

const testimonials: Testimonial[] = [
    { name: "Christine Troughton, BPTC Officer", text: "The staff and support are second to none. They are polished, proficient, accessible and patient." },
    { name: "Michael Hopkins", text: "Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap." },
    { name: "Terry Overacker", text: "We completed our product website with Dev.Point and are so excited to have it live!! It is so professionally done and eye appealing, not to mention how great it looks and works. We love how easy it is to make changes ourselves, yet know we have the support when/if we need it." },
    { name: "Tim K. & Kristen H.", text: "When you choose Dev.Point you get a wonderful, professional team with innovative ideas, awesome customer service, and exactly what you're looking for. It took the ideas that we had and put them perfectly on the web." }
];

export default { skills, stats, works, services, testimonials };
