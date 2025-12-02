import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <nav className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-bold">My Portfolio</div>
                <ul className="flex space-x-4">
                    <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
                    <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
                    <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
                    <li><a href="/resume.pdf" className="hover:text-gray-400">Resume</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;