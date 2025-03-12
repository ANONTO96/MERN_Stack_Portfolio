import React from 'react';
import { Code2, Coffee, Palette } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          <div className="mt-2 h-1 w-20 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="p-6 bg-gray-50 rounded-xl text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code2 size={32} className="text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
            <p className="text-gray-600">Writing clean, maintainable, and efficient code is my passion</p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Coffee size={32} className="text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
            <p className="text-gray-600">Love tackling complex problems and finding elegant solutions</p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Palette size={32} className="text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Creative Mind</h3>
            <p className="text-gray-600">Bringing creativity and innovation to every project</p>
          </div>
        </div>

        <div className="mx-auto">
          <p className="text-gray-600 leading-relaxed">
            I am a passionate MERN Stack Developer with a strong foundation in web development. 
            My journey in programming began with a curiosity about how websites work, which led me 
            to dive deep into the world of web development. I specialize in building full-stack 
            applications using MongoDB, Express.js, React, and Node.js.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source 
            projects, or sharing my knowledge through technical blog posts. I believe in continuous 
            learning and staying updated with the latest trends in web development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;