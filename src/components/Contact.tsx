import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-12 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
                <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            rows={4}
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;