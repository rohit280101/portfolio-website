import React from 'react';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive developer portfolio built with Next.js, React, TypeScript, and Tailwind CSS. Features dynamic components, smooth animations, and mobile-first design.',
    link: 'https://github.com/rohit280101/portfolio-website',
  },
  {
    title: 'Task Management App',
    description: 'Full-stack task management application with user authentication, real-time updates, and persistent storage. Built with React, Node.js, Express, and MongoDB.',
    link: 'https://github.com/rohit280101/task-manager',
  },
  {
    title: 'Weather Dashboard',
    description: 'Interactive weather dashboard displaying real-time weather data and forecasts. Integrated with OpenWeather API, featuring location search and responsive UI.',
    link: 'https://github.com/rohit280101/weather-dashboard',
  },
];

const Projects: React.FC = () => {
  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-lg">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-700">{project.description}</p>
            <a
              href={project.link}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;