"use client"
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <title>Rohit Kumar Gupta</title>
                <meta name="description" content="Portfolio website showcasing projects and skills" />
                <link 
                    rel="icon" 
                    href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect fill='%23050612' width='100' height='100'/><circle cx='50' cy='50' r='40' fill='%2306B6D4' opacity='0.2'/><circle cx='50' cy='50' r='30' fill='none' stroke='%2306B6D4' stroke-width='2'/><text x='50' y='60' font-size='40' font-weight='bold' fill='%2306B6D4' text-anchor='middle' font-family='Arial'>R</text></svg>"
                    type="image/svg+xml"
                />
            </head>
            <body>
                <div className="flex flex-col min-h-screen bg-[#050612]">
                    <Header />
                    <main className="flex-grow">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}