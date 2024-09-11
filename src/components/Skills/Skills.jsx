import images from "../../constants/images";
import data from "../../constants/data";

// Define the type for a single skill
const Skills = () => {
    return (
        <div className="skills bg-whitesmoke section-padding" style={{
            background: `url(${images.skills_bg}) center/cover no-repeat`
        }}>
            <div className="container mx-auto px-4">
                <h2 className="text-center text-2xl font-semibold mb-8">
                    Professional Skills
                </h2>
                <div className="grid gap-8 lg:grid-cols-2">
                    <div className="skills-content">
                        {data.skills.map((skill, index) => {
                            return (
                                <div className="max-w-2xl" key={index}>
                                    <div className="flex mb-8">
                                        <span className="font-semibold mr-2">{skill.title}</span>
                                        <span className="font-semibold">({skill.value})</span>
                                    </div>
                                    <div className="relative h-1 w-full bg-gray-300 mb-8">
                                        <div className="absolute top-0 left-0 h-full bg-robin-blue" style={{ width: skill.value }}></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
