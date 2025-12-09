"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const pathname = usePathname();

    const scrollToSection = (id: string) => {
        if (id === 'hero') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setIsMenuOpen(false);
    };

    useEffect(() => {
        // Set active section based on current page
        if (pathname === '/contact') {
            setActiveSection('contact');
        } else {
            const handleScroll = () => {
                const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
                let currentSection = 'hero';

                const scrollPosition = window.scrollY;
                
                for (const section of sections) {
                    const element = document.getElementById(section);
                    if (element) {
                        const elementTop = element.offsetTop;
                        
                        if (scrollPosition >= elementTop - 200) {
                            currentSection = section;
                        }
                    }
                }

                setActiveSection(currentSection);
            };

            handleScroll();
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [pathname]);

    const isActive = (section: string) => activeSection === section;
    const getNavLinkClass = (section: string) => `
        text-slate-300 hover:text-cyan-400 transition-colors font-medium
        ${isActive(section) ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' : ''}
    `;

    return (
        <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-cyan-500/20">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
                    <div className="relative w-10 h-10">
                        {/* Logo SVG */}
                        <svg viewBox="0 0 40 40" className="w-10 h-10">
                            {/* Background circle */}
                            <circle cx="20" cy="20" r="18" fill="none" stroke="url(#grad1)" strokeWidth="2" />
                            {/* Gradient definition */}
                            <defs>
                                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#06B6D4" />
                                    <stop offset="100%" stopColor="#0EA5E9" />
                                </linearGradient>
                            </defs>
                            {/* R letter */}
                            <text x="20" y="26" fontSize="18" fontWeight="bold" fill="#06B6D4" textAnchor="middle" fontFamily="Arial">R</text>
                        </svg>
                    </div>
                    <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">RKG</span>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden flex flex-col gap-1 cursor-pointer"
                >
                    <div className={`w-6 h-0.5 bg-cyan-400 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-cyan-400 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-cyan-400 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                </button>

                {/* Navigation Links - Desktop */}
                <ul className="hidden md:flex space-x-6 items-center">
                    <li>
                        <button
                            onClick={() => scrollToSection('hero')}
                            className={getNavLinkClass('hero')}
                        >
                            Home
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection('about')}
                            className={getNavLinkClass('about')}
                        >
                            About
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection('projects')}
                            className={getNavLinkClass('projects')}
                        >
                            Projects
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection('skills')}
                            className={getNavLinkClass('skills')}
                        >
                            Skills
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className={getNavLinkClass('contact')}
                        >
                            Contact
                        </button>
                    </li>
                    <li>
                        <Link
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 hover:border-cyan-400/60 hover:text-cyan-200 transition-all"
                        >
                            Resume
                        </Link>
                    </li>
                </ul>

                {/* Navigation Links - Mobile */}
                {isMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-slate-900/95 border-b border-cyan-500/20 md:hidden">
                        <ul className="flex flex-col space-y-4 p-6">
                            <li>
                                <button
                                    onClick={() => scrollToSection('hero')}
                                    className={`w-full text-left ${getNavLinkClass('hero')}`}
                                >
                                    Home
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('about')}
                                    className={`w-full text-left ${getNavLinkClass('about')}`}
                                >
                                    About
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('projects')}
                                    className={`w-full text-left ${getNavLinkClass('projects')}`}
                                >
                                    Projects
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('skills')}
                                    className={`w-full text-left ${getNavLinkClass('skills')}`}
                                >
                                    Skills
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className={`w-full text-left ${getNavLinkClass('contact')}`}
                                >
                                    Contact
                                </button>
                            </li>
                            <li>
                                <Link
                                    href="/resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 hover:border-cyan-400/60 hover:text-cyan-200 transition-all block text-center"
                                >
                                    Resume
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;