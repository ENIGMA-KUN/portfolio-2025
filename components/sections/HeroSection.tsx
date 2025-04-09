import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaGoogle, FaFileDownload, FaArrowDown, FaEnvelope } from 'react-icons/fa';
import BackgroundAnimation from '../three/BackgroundAnimation';

export default function HeroSection() {
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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-dark to-gray-900">
      {/* Neural Network Background */}
      <div className="absolute inset-0 z-0">
        <BackgroundAnimation />
      </div>
      
      {/* Singularity Image */}
      <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none z-[1]">
        <Image
          src="/images/singularity.png"
          alt="AI and Human Connection"
          width={1500}
          height={900}
          className="object-contain mix-blend-screen"
          priority
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-[2]">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="w-48 h-48 mx-auto rounded-full border-4 border-primary/50 overflow-hidden bg-gray-800/50 backdrop-blur-sm shadow-glow">
              <Image
                src="/images/profile.jpg"
                alt="Shubham Chakraborty"
                width={192}
                height={192}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Shubham Chakraborty
            </h1>
            <h2 className="text-2xl md:text-3xl text-light mb-8">
              {roles[currentRoleIndex]}
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Building the future with AI, one line of code at a time. Specializing in machine learning,
              full-stack development, and climate technology solutions.
            </p>
          </motion.div>
          
          {/* Social Links */}
          <motion.div 
            className="flex justify-center space-x-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a 
              href="https://github.com/enigma-kun" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-light hover:text-primary transition-colors"
            >
              <FaGithub size={28} />
            </a>
            <a 
              href="https://linkedin.com/in/shubham-chakraborty" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-light hover:text-primary transition-colors"
            >
              <FaLinkedin size={28} />
            </a>
            <a 
              href="mailto:chakraborty.shubham25@gmail.com"
              className="text-light hover:text-primary transition-colors"
            >
              <FaEnvelope size={28} />
            </a>
          </motion.div>
          
          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <a
              href="#projects"
              className="inline-block px-8 py-3 text-lg font-semibold text-light bg-primary/20 hover:bg-primary/30 rounded-full border border-primary/50 transition-all duration-300 hover:shadow-glow"
            >
              View My Work
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1,
          delay: 0.8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <div className="w-6 h-10 border-2 border-light rounded-full p-1">
          <div className="w-1.5 h-3 bg-light rounded-full mx-auto animate-scroll" />
        </div>
      </motion.div>
    </section>
  );
}