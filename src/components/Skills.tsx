import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    category: 'Tools & Others',
    skills: ['Git & GitHub', 'Docker', 'AWS', 'Firebase'],
    color: 'from-purple-500 to-pink-500',
  },
];

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
            <p className="text-gray-400 text-lg">Technologies and tools I work with</p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
              >
                <div className="group">
                  <div className={`bg-gradient-to-br ${category.color} p-[2px] rounded-xl`}>
                    <div className="bg-slate-900 rounded-xl p-6 h-full backdrop-blur-sm">
                      <h3 className={`text-xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                        {category.category}
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skillIndex}
                            whileHover={{ scale: 1.05, y: -2 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                          >
                            <div className={`px-4 py-2 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-10 border border-${category.color.split(' ')[1].split('-')[0]}-500/30 text-gray-200 font-medium text-sm hover:bg-opacity-20 transition-all cursor-default`}>
                              {skill}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mt-16 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-8">
            <h4 className="text-white font-semibold mb-4">Key Strengths</h4>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                Full-stack web application development
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                Responsive & performance-optimized UIs
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                RESTful API design and implementation
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                Database design & optimization
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;