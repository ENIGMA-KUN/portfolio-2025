import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaGoogle } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-dark/90 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-bold text-primary cursor-pointer">
            Shubham<span className="text-secondary">.Chakraborty</span>
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-1">
          <Link href="#about" className="nav-link">About</Link>
          <Link href="#experience" className="nav-link">Experience</Link>
          <Link href="#projects" className="nav-link">Projects</Link>
          <Link href="#research" className="nav-link">Research</Link>
          <Link href="#contact" className="nav-link">Contact</Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <a href="https://github.com/enigma-kun" target="_blank" rel="noopener noreferrer" 
             className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/shubham-chakraborty" target="_blank" rel="noopener noreferrer"
             className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer"
             className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">
            <FaGoogle size={20} />
          </a>
          
          <button className="md:hidden text-gray-600 dark:text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;