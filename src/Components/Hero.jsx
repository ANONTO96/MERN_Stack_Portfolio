import React from 'react';
import { Github, Linkedin, Download, Facebook } from 'lucide-react';
import image from '../assets/1000005139-removebg (1).png'
const Hero = () => {
  return (
    <section id="home" className="py-20 bg-gradient-to-br from-indigo-300 via-white to-purple-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              MERN Stack
              <span className="block text-indigo-600">Developer</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Building modern web applications with passion and precision
            </p>
            {/* Resume Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="https://drive.google.com/uc?export=download&id=1smSGILM-ARjQjDfpSoDppOrMPgcExaqs"
                download="Tanjir-ul-Anonto_MERN_Stack_Dev_Resume.pdf"
                className="px-8 py-3 bg-indigo-600 text-white shadow-xl hover:shadow-2xl rounded-lg hover:bg-indigo-700 transition flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </a>
              {/* Social Links */}
              <div className="flex gap-4 justify-center">
                <a href="https://github.com/ANONTO96" target="_blank" rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition">
                  <Github size={24} className="text-gray-700" />
                </a>
                <a href="https://www.linkedin.com/in/tanjir-ul-anonto/" target="_blank" rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition">
                  <Linkedin size={24} className="text-gray-700" />
                </a>
                <a href="https://www.facebook.com/tanjir.anonto/" target="_blank" rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition">
                  <Facebook size={24} className="text-gray-700" />
                </a>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 mt-12 md:mt-0 md:pl-20">
            <img
              src={image}
              className="rounded-full w-64 h-64 object-cover mx-auto border-8 border-white shadow-xl hover:shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;