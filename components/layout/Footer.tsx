import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/">
              <span className="text-xl font-bold text-primary cursor-pointer">
                Shubham<span className="text-secondary">.dev</span>
              </span>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              AI/ML Engineer | Data Scientist | Full Stack Developer | Entrepreneur
            </p>
            <div className="mt-6 flex space-x-4">
              <motion.a 
                href="https://github.com/enigma-kun" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/shubham-chakraborty" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a 
                href="https://www.youtube.com/c/ENIGMAKUN" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
              >
                <FaYoutube size={24} />
              </motion.a>
              <motion.a 
                href="mailto:chakraborty.shubham007@gmail.com" 
                whileHover={{ y: -3 }}
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
              >
                <FaEnvelope size={24} />
              </motion.a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="#experience" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#research" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                  Research & Publications
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              <span className="font-medium">Email:</span> chakraborty.shubham007@gmail.com
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              <span className="font-medium">Location:</span> Tempe, AZ
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Shubham Chakraborty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;