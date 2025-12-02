import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-12 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
                <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
                    <p className="text-lg text-gray-700 mb-6 text-center">Let's connect! Feel free to reach out via email or social media.</p>
                    <div className="space-y-4">
                        <div>
                            <p className="text-sm font-medium text-gray-700 mb-1">Email</p>
                            <a href="mailto:guptarohitr68n@gmail.com" className="text-blue-500 hover:underline text-lg">guptarohitr68n@gmail.com</a>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-700 mb-1">GitHub</p>
                            <a href="https://github.com/rohit280101" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-lg">github.com/rohit280101</a>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-700 mb-1">LinkedIn</p>
                            <a href="https://www.linkedin.com/in/rohit-gupta-554836256" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-lg">linkedin.com/in/rohit-gupta</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;