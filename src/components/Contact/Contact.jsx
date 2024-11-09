import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        title: "",
        email: "",
        number: "",
        comment: "",
        my_file: null, // Add file input state
    });

    const form = useRef();

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setFormData({
                ...formData,
                [name]: files[0], // Handle file input
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a FormData object to handle the file upload
        const formDataToSend = new FormData(form.current);
        formDataToSend.append('my_file', formData.my_file); // Append the file to FormData

        emailjs.sendForm(
            'service_4q0v3tc', 
            'template_v5wjfie', 
            form.current,       
            '3NuwGW1nY6NyU0Z0V'   
        )
        .then((result) => {
            console.log(result.text);
            alert('Message sent successfully!');
        }, (error) => {
            console.log(error.text);
            alert('Failed to send the message.');
        });

        setFormData({
            firstName: "",
            lastName: "",
            title: "",
            email: "",
            number: "",
            comment: "",
            my_file: null, // Reset file input
        });
    };

    return (
        <div className="md:mx-auto mx-[10%] py-10 bg-whitesmoke" id="contact">
            <div className="text-center">
                <h2 className="text-4xl font-semibold py-10">Need some Help?</h2>
                <p className="text-lg italic max-w-xl mx-auto">
                    Let us know what you are looking for in an agency. We will take a look and see if this could be the start of something beautiful.
                </p>

                <div className="contact__content mt-10">
                    <form ref={form} onSubmit={handleSubmit} className="max-w-lg mx-auto" encType="multipart/form-data">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <input
                                type="text"
                                name="firstName"
                                className="form__control bg-gray-100 p-4 rounded-lg border border-gray-300"
                                placeholder="Your first Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="lastName"
                                className="form__control bg-gray-100 p-4 rounded-lg border border-gray-300"
                                placeholder="Your last Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                            {/* Removed the last name input */}
                        </div>
                        <div className="mt-6">
                            <select
                                name="title"
                                className="form__control bg-gray-100 p-4 rounded-lg border border-gray-300 w-full"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Select relevant company"
                                style={{ color: formData.title ? 'black' : 'gray' }}
                            >
                                <option value="" disabled hidden>Select relevant company</option>
                                <option value="Eastern Communication">Eastern Communication</option>
                                <option value="Asghar Sons">Asghar Sons</option>
                                <option value="Eastern Laboratories">Eastern Laboratories</option>
                                <option value="Royal Multani">Royal Multani</option>
                                <option value="Eastern Biotechnology">Eastern Biotechnology</option>
                                <option value="Eastern Scientific Corporation">Eastern Scientific Corporation</option>
                                <option value="Eastern Food Industries">Eastern Food Industries</option>
                                <option value="Batool Asghar Foundation">Batool Asghar Foundation</option>
                            </select>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
                            <input
                                type="email"
                                name="email"
                                className="form__control bg-gray-100 p-4 rounded-lg border border-gray-300"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="number"
                                name="number"
                                className="form__control bg-gray-100 p-4 rounded-lg border border-gray-300"
                                placeholder="Your contact number"
                                value={formData.number}
                                onChange={handleChange}
                                required
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
                        {/* <div className="mt-6">
                            <input
                                type="file"
                                name="my_file"
                                className="form__control bg-gray-100 p-4 rounded-lg border border-gray-300 w-full"
                                onChange={handleChange}
                                required
                            />
                        </div> */}
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
