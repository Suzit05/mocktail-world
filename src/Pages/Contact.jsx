import React from 'react';
import Navbar from '../assets/Components/Navbar';

const Contact = () => {
    return (
        <div className="w-full h-screen bg-gray-100">
            {/* Navbar */}
            <Navbar />

            {/* Header Section */}
            <div className="w-full bg-purple-600 py-10 text-white text-center">
                <h1 className="text-4xl font-bold">Contact Us</h1>
                <p className="mt-2 text-lg">
                    We'd love to hear from you! Reach out to us for any queries or feedback.
                </p>
            </div>

            {/* Contact Details and Form */}
            <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-purple-700 mb-4">Contact Details</h2>
                    <p className="text-gray-700">
                        <strong>Project:</strong> Mocktail Master
                    </p>
                    <p className="text-gray-700">
                        <strong>Admin:</strong> Suzit05
                    </p>
                    <p className="text-gray-700">
                        <strong>Email:</strong> suzit05@mocktailmaster.com
                    </p>
                </div>

                {/* Contact Form */}
                <div>
                    <h2 className="text-2xl font-semibold text-purple-700 mb-4">Send Us a Message</h2>
                    <form className="space-y-4">
                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="p-2 border border-gray-300 rounded-lg"
                                type="text"
                                id="name"
                                placeholder="Your Name"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="p-2 border border-gray-300 rounded-lg"
                                type="email"
                                id="email"
                                placeholder="Your Email"
                                required
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                className="p-2 border border-gray-300 rounded-lg"
                                id="message"
                                rows="4"
                                placeholder="Your Message"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            {/* Social Media Links */}
            <div className="w-full bg-purple-600 py-6 mt-10 text-center text-white">
                <h2 className="text-xl font-semibold">Follow Us</h2>
                <div className="flex justify-center space-x-6 mt-4">
                    <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        Facebook
                    </a>
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        Instagram
                    </a>
                    <a
                        href="https://www.twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        Twitter
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
