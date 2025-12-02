import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center">
            <h1 className="text-5xl font-bold mb-4">Rohit Kumar Gupta</h1>
            <p className="text-xl mb-8">Your Tagline or Brief Description</p>
            <a href="#projects" className="px-6 py-3 bg-white text-blue-500 rounded-full font-semibold hover:bg-gray-200 transition">
                View My Work
            </a>
        </section>
    );
};

export default Hero;