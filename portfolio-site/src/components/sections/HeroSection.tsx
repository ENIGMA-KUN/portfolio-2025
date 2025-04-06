import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaYoutube, FaFileDownload } from 'react-icons/fa';

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
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <section className="relative pt-20 pb-32 md:pt-32 md:pb-40 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-secondary/5 -z-10" />
      
      {/* Blueprint grid pattern */}
      <div className="absolute inset-0 blueprint-bg -z-10" />
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left side - Text content */}
          <motion.div 
            className="w-full md:w-3/5 text-center md:text-left mb-12 md:mb-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Shubham Chakraborty
                </span>
              </h1>
            </motion.div>
            
            <motion.div variants={itemVariants} className="h-8 mb-4">
              <div className="relative">
                {roles.map((role, index) => (
                  <motion.h2
                    key={role}
                    className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 absolute left-0 right-0 md:left-auto md:right-auto"
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
              </div>
            </motion.div>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto md:mx-0"
              variants={itemVariants}
            >
              Passionate about building intelligent systems that solve real-world problems. 
              Expert in AI/ML, data science, and full-stack development with a focus on 
              climate technology and innovative applications of machine learning.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-3 justify-center md:justify-start mb-8"
              variants={itemVariants}
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
              variants={itemVariants}
            >
              <a
                href="https://github.com/enigma-kun"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors"
              >
                <FaGithub size={20} />
              </a>
              
              <a
                href="https://linkedin.com/in/shubham-chakraborty"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              
              <a
                href="https://www.youtube.com/c/ENIGMAKUN"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors"
              >
                <FaYoutube size={20} />
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right side - Image/Animation */}
          <motion.div
            className="w-full md:w-2/5 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Add your profile image or 3D model here */}
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-xl glow">
                <img
                  src="/images/profile.jpg"
                  alt="Shubham Chakraborty"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.currentTarget.src = 'https://via.placeholder.com/300?text=Shubham+Chakraborty';
                  }}
                />
              </div>
              
              {/* Background elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/10 rounded-full blur-xl z-[-1]" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-xl z-[-1]" />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
          <path
            fill="currentColor"
            fillOpacity="1"
            className="text-white dark:text-dark"
            d="M0,32L48,48C96,64,192,96,288,106.7C384,117,480,107,576,90.7C672,75,768,53,864,58.7C960,64,1056,96,1152,101.3C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;