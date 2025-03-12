import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "B.Sc. Honors in Computer Science Engineering (Prof. Honors)",
      institution: "National University of Bangladesh (Tejgaon College)",
      year: "2021 - 2025",
      description: "Major in Software Engineering with focus on Web Development",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "BCIC College",
      year: "2018 - 2020",
      description: "I completed my HSC in Science with a GPA of 5.00, gaining strong analytical and technical skills through subjects like Mathematics, Physics, Chemistry, Biology and ICT.",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Ahasania Mission School and College",
      year: "2016 - 2018",
      description: "I achieved a GPA of 5.00 in SSC (Science), building a solid foundation in Mathematics, Physics, Chemistry, Biology and ICT, which fueled my passion for technology.",
    }
  ];

  return (
    <section id="education" className="pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Education</h2>
          <div className="mt-2 h-1 w-20 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start">
              <div className="md:w-16 flex-shrink-0">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <GraduationCap size={24} className="text-indigo-600" />
                </div>
              </div>
              <div className="flex-1 bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                <p className="text-indigo-600 font-medium">{edu.institution}</p>
                <p className="text-gray-500 mt-1">{edu.year}</p>
                <p className="text-gray-600 mt-2">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;