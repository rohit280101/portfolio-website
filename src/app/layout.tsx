"use client"
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <title>Rohit Kumar Gupta — Backend & AI/ML Engineer</title>
                <meta name="description" content="Rohit Kumar Gupta — Master's student in Artificial Intelligence at IU Berlin with 3+ years of backend software development experience building scalable APIs, data pipelines, and production ML/MLOps systems. Available as a Werkstudent in Berlin." />
                <meta name="keywords" content="Rohit Kumar Gupta, Backend Developer, AI Engineer, Machine Learning, MLOps, Python, FastAPI, Werkstudent, Berlin, Portfolio" />
                <meta name="author" content="Rohit Kumar Gupta" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Rohit Kumar Gupta — Backend & AI/ML Engineer" />
                <meta property="og:description" content="Master's student in AI at IU Berlin with 3+ years of backend development experience building scalable APIs, data pipelines, and production ML/MLOps systems. Available as a Werkstudent in Berlin." />
                <meta property="og:site_name" content="Rohit Kumar Gupta" />
                <meta property="og:url" content="https://rohit280101.github.io/portfolio-website/" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Rohit Kumar Gupta — Backend & AI/ML Engineer" />
                <meta name="twitter:description" content="Master's student in AI at IU Berlin with 3+ years of backend development experience. Available as a Werkstudent in Berlin." />

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