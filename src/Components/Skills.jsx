import React from 'react';
import { Code2, Brain, Terminal, Puzzle, Users, Clock, Bug as Bulb, Target } from 'lucide-react';

const Skills = () => {
  const skills = {
    technical: [
      {
        icon: <Code2 size={24} className="text-indigo-600" />,
        name: 'Frontend Development',
        skills: ['React.js (native)', 'JavaScript (ES6+)', 'Tailwind CSS','CSS3', 'HTML5']
      },
      {
        icon: <Terminal size={24} className="text-indigo-600" />,
        name: 'Backend Development',
        skills: ['Node.js', 'Express.js', 'MongoDB', 'RESTful APIs', 'JWT Authentication']
      },
      {
        icon: <Brain size={24} className="text-indigo-600" />,
        name: 'Development Tools',
        skills: ['Git', 'VS Code', 'Postman', 'MongoDB Compass', 'npm']
      },
      {
        icon: <Puzzle size={24} className="text-indigo-600" />,
        name: 'Additional Skills',
        skills: ['Responsive Design', 'API Integration', 'Payment Gateway', 'Web Security', 'Database Design']
      }
    ],
    soft: [
      {
        icon: <Users size={24} className="text-indigo-600" />,
        name: 'Team Collaboration',
        description: 'Strong ability to work in cross-functional teams and communicate effectively with stakeholders'
      },
      {
        icon: <Clock size={24} className="text-indigo-600" />,
        name: 'Time Management',
        description: 'Excellent at prioritizing tasks and meeting deadlines in fast-paced environments'
      },
      {
        icon: <Bulb size={24} className="text-indigo-600" />,
        name: 'Problem Solving',
        description: 'Analytical thinker with a knack for finding innovative solutions to complex problems'
      },
      {
        icon: <Target size={24} className="text-indigo-600" />,
        name: 'Adaptability',
        description: 'Quick learner who stays updated with the latest technologies and industry trends'
      }
    ]
  };

  return (
    <section id="skills" className="pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
          <div className="mt-2 h-1 w-20 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="space-y-10">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">" Technical Skills "</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {skills.technical.map((category, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    {category.icon}
                    <h4 className="text-lg font-semibold text-gray-900">{category.name}</h4>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill, i) => (
                      <li key={i} className="text-gray-600 flex items-center gap-2">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">" Soft Skills "</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {skills.soft.map((skill, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    {skill.icon}
                    <h4 className="text-lg font-semibold text-gray-900">{skill.name}</h4>
                  </div>
                  <p className="text-gray-600">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;