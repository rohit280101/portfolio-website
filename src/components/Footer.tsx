import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Rohit Kumar Gupta. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="https://github.com/rohit280101" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/rohit-gupta-554836256" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;