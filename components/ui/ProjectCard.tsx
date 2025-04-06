import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
  image?: string;
  reversed?: boolean;
  achievement?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  githubLink,
  demoLink,
  image = '/images/project-placeholder.jpg',
  reversed = false,
  achievement
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 mb-20 last:mb-0`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Project Image */}
      <motion.div 
        className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg glow-hover"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative group h-64 md:h-80 bg-gray-200 dark:bg-gray-800">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url(${image})` }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <div className="space-y-2">
              <div className="flex space-x-3">
                {githubLink && (
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-gray-900/60 hover:bg-primary p-2 rounded-full transition-colors"
                  >
                    <FaGithub size={18} />
                  </a>
                )}
                
                {demoLink && (
                  <a
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-gray-900/60 hover:bg-primary p-2 rounded-full transition-colors"
                  >
                    <FaExternalLinkAlt size={16} />
                  </a>
                )}
              </div>
              
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs font-medium px-2 py-1 rounded-full bg-primary/80 text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Project Details */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-primary">{title}</h3>
            
            {achievement && (
              <div className="mt-1 mb-2">
                <span className="text-sm font-medium px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                  {achievement}
                </span>
              </div>
            )}
          </motion.div>
          
          <motion.p 
            className="text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
          
          <motion.div 
            className="pt-2 hidden md:flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs font-medium px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              >
                {tech}
              </span>
            ))}
          </motion.div>
          
          <motion.div 
            className="flex space-x-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm font-medium text-primary hover:text-blue-600 transition-colors"
              >
                <FaGithub size={16} />
                <span>View Code</span>
              </a>
            )}
            
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm font-medium text-primary hover:text-blue-600 transition-colors"
              >
                <FaExternalLinkAlt size={14} />
                <span>Live Demo</span>
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;