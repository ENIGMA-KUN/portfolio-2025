import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaGoogle, FaFileDownload, FaArrowDown } from 'react-icons/fa';

const HeroSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = [
    'AI/ML Engineer',
    'Data Scientist',
    'Full Stack Developer',
    'Entrepreneur'
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900 -z-10" />
      
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 -z-10" />
      
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left side - Text content */}
          <motion.div 
            className="w-full md:w-3/5 text-center md:text-left md:pr-12 mb-12 md:mb-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Shubham Chakraborty
              </span>
            </motion.h1>
            
            <motion.div 
              className="h-14 relative mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {roles.map((role, index) => (
                <motion.h2
                  key={role}
                  className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 absolute left-0 right-0 md:left-auto md:right-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: currentRoleIndex === index ? 1 : 0,
                    y: currentRoleIndex === index ? 0 : 20
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {role}
                </motion.h2>
              ))}
            </motion.div>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl md:mx-0 mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Building intelligent systems that solve real-world problems with expertise in AI/ML, data science, and full-stack development. 
              Specialized in climate technology and innovative applications of machine learning.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-center md:justify-start mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a
                href="#contact"
                className="px-6 py-3 bg-primary hover:bg-blue-600 text-white font-medium rounded-md shadow-sm hover:shadow-md transition-all flex items-center"
              >
                Get in Touch
              </a>
              
              <a
                href="/resume.pdf"
                target="_blank"
                className="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-md shadow-sm hover:shadow-md transition-all border border-gray-200 dark:border-gray-700 flex items-center"
              >
                <FaFileDownload className="mr-2" />
                Download Resume
              </a>
            </motion.div>
            
            <motion.div 
              className="flex gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <a
                href="https://github.com/enigma-kun"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors"
              >
                <FaGithub size={24} />
              </a>
              
              <a
                href="https://linkedin.com/in/shubham-chakraborty"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              
              <a
                href="https://scholar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors"
              >
                <FaGoogle size={24} />
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right side - Image/Animation */}
          <motion.div
            className="w-full md:w-2/5 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-xl relative z-10 glow">
                <img
                  src="/images/profile.jpg"
                  alt="Shubham Chakraborty"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/400?text=Shubham+Chakraborty';
                  }}
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full blur-xl -z-10" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-indigo-500/20 rounded-full blur-xl -z-10" />
              
              {/* Tech icons floating around */}
              <motion.div 
                className="absolute -top-4 left-10 w-12 h-12 rounded-lg bg-white shadow-lg flex items-center justify-center"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              >
                <span className="text-xl font-bold text-blue-600">AI</span>
              </motion.div>
              
              <motion.div 
                className="absolute top-20 -right-4 w-14 h-14 rounded-lg bg-white shadow-lg flex items-center justify-center"
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5
                }}
              >
                <span className="text-xl font-bold text-indigo-600">ML</span>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 right-20 w-12 h-12 rounded-lg bg-white shadow-lg flex items-center justify-center"
                animate={{ 
                  y: [0, -12, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{ 
                  duration: 4.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1
                }}
              >
                <span className="text-xl font-bold text-green-600">DS</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll down indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <span className="text-sm text-gray-600 dark:text-gray-400 mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FaArrowDown className="text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;