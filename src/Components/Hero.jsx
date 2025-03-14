import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Download, Facebook } from 'lucide-react';
import image from '../assets/1000005139-removebg (1).png'
const Hero = () => {
  // typing effect
  const [showDeveloper, setShowDeveloper] = useState(false);
  const [text, setText] = useState('');
  const fullText = 'Developer';
  const typingSpeed = 200;

  useEffect(() => {
    // Delay before "Developer" starts appearing
    const delayShow = setTimeout(() => {
      setShowDeveloper(true);

      // Start typing effect after delay
      let index = 0;
      const typingInterval = setInterval(() => {
        setText(fullText.slice(0, index));
        index++;
        if (index > fullText.length) clearInterval(typingInterval);
      }, typingSpeed);

    }, 1500); // Delay "Developer" by 1.5s after "MERN Stack"

    return () => clearTimeout(delayShow);
  }, []);

  return (
    <section id="home" className="pt-20 py-32 sm:py-20 bg-gradient-to-br from-indigo-300 via-white to-purple-200 dark:from-indigo-900 dark:via-gray-800 dark:to-purple-700 transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              {/* MERN Stack - Shows first */}
              <span className="animate__animated animate__fadeInUp animate__delay-1s">MERN Stack</span>

              {/* Developer - Appears after delay */}
              {showDeveloper && (
                <span className="block text-indigo-600 dark:text-indigo-400">
                  {text}
                  <span className="animate__animated animate__flash animate__infinite">.</span>
                </span>
              )}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
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
                  className="p-3 bg-slate-100 rounded-full hover:bg-gray-200 transition dark:bg-gray-800 dark:hover:bg-gray-700">
                  <Github size={24} className="text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition" />
                </a>
                <a href="https://www.linkedin.com/in/tanjir-ul-anonto/" target="_blank" rel="noopener noreferrer"
                  className="p-3 bg-slate-100 rounded-full hover:bg-gray-200 transition dark:bg-gray-800 dark:hover:bg-gray-700">
                  <Linkedin size={24} className="text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition" />
                </a>
                <a href="https://www.facebook.com/tanjir.anonto/" target="_blank" rel="noopener noreferrer"
                  className="p-3 bg-slate-100 rounded-full hover:bg-gray-200 transition dark:bg-gray-800 dark:hover:bg-gray-700">
                  <Facebook size={24} className="text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition" />
                </a>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 mt-12 md:mt-0 md:pl-20">
            <img
              src={image}
              className="rounded-full w-72 h-72 object-cover mx-auto border-8 border-white shadow-xl hover:shadow-2xl dark:border-gray-700 transition"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;