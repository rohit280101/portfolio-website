import React from 'react';

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Tailwind CSS',
  'CSS',
  'HTML',
];

const Skills: React.FC = () => {
  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
      <div className="flex flex-wrap justify-center">
        {skills.map((skill, index) => (
          <div key={index} className="m-4 p-4 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;