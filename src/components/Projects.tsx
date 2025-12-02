import React from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'Description of project one.',
    link: 'https://github.com/user/project-one',
  },
  {
    title: 'Project Two',
    description: 'Description of project two.',
    link: 'https://github.com/user/project-two',
  },
  {
    title: 'Project Three',
    description: 'Description of project three.',
    link: 'https://github.com/user/project-three',
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