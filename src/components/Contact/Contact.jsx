import { useState } from "react";

const Contact = () => {
    // Manage form data state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        title: "",
        comment: "",
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data submitted:", formData);
    };

    return (
        <div className="md:mx-auto mx-[10%] py-10 bg-whitesmoke" id="contact">
            <div className="text-center">
                <h2 className="text-4xl font-semibold py-10">Need some Help?</h2>
                <p className="text-lg italic max-w-xl mx-auto">
                    Let us know what you are looking for in an agency. We will take a look and see if this could be the start of something beautiful.
                </p>

                <div className="contact__content mt-10">
                    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <input
                                type="text"
                                name="name"
                                className="form__control bg-gray-100 p-4 rounded-lg border border-gray-300"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                className="form__control bg-gray-100 p-4 rounded-lg border border-gray-300"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mt-6">
                            <input
                                type="text"
                                name="title"
                                className="form__control bg-gray-100 p-4 rounded-lg border border-gray-300 w-full"
                                placeholder="Your Title"
                                value={formData.title}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mt-6">
                            <textarea
                                name="comment"
                                className="form__control bg-gray-100 p-4 rounded-lg border border-gray-300 w-full"
                                placeholder="Your Comment"
                                rows={6}
                                value={formData.comment}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="mt-6 bg-[#2974B6] text-white py-3 px-6 rounded-lg hover:bg-[#1a588f] transition-all"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
