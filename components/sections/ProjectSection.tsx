import React, { useRef, useState, useEffect, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projectsData, getProjectCategories, getFeaturedProjects, Project } from '../data/projectsData';
import ProjectFilter from '../ui/ProjectFilter';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
  image?: string;
  reversed?: boolean;
  achievement?: string;
  index?: number;
}

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

// Project Card Component
const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  githubLink,
  demoLink,
  image = '/images/company-placeholder.svg',
  reversed = false,
  achievement,
  index = 0
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div 
      ref={ref}
      className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 mb-20 last:mb-0`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Project Image */}
      <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg glow-hover">
        <div className="relative group h-64 md:h-80 bg-gray-200 dark:bg-gray-700">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url(${image})` }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <div className="space-y-3">
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
                {technologies.slice(0, 4).map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs font-medium px-2 py-1 rounded-full bg-primary/80 text-white"
                  >
                    {tech}
                  </span>
                ))}
                {technologies.length > 4 && (
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-700/80 text-white">
                    +{technologies.length - 4} more
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Project Details */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-primary">{title}</h3>
            
            {achievement && (
              <div className="mt-2 mb-3">
                <span className="text-sm font-medium px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                  {achievement}
                </span>
              </div>
            )}
          </motion.div>
          
          <motion.p 
            className="text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {description}
          </motion.p>
          
          <motion.div 
            className="pt-2 hidden md:flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              >
                {tech}
              </span>
            ))}
          </motion.div>
          
          <motion.div 
            className="flex space-x-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
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

// Section Header Component
const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
        {title}
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
        {subtitle}
      </p>
      <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full" />
    </motion.div>
  );
};

// Projects Section Component
const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Featured');
  const [selectedSort, setSelectedSort] = useState<string>('default');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  
  const categories = useMemo(() => getProjectCategories(), []);
  const featuredProjects = useMemo(() => getFeaturedProjects(), []);
  
  const sortOptions = [
    { value: 'default', label: 'Default Order' },
    { value: 'title-asc', label: 'Title (A-Z)' },
    { value: 'title-desc', label: 'Title (Z-A)' }
  ];
  
  useEffect(() => {
    let result: Project[] = [];
    
    // Filter by category
    if (selectedCategory === 'All') {
      result = [...projectsData];
    } else if (selectedCategory === 'Featured') {
      result = featuredProjects;
    } else {
      result = projectsData.filter(project => project.category === selectedCategory);
    }
    
    // Sort projects
    if (selectedSort === 'title-asc') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (selectedSort === 'title-desc') {
      result.sort((a, b) => b.title.localeCompare(a.title));
    }
    
    setFilteredProjects(result);
  }, [selectedCategory, selectedSort, featuredProjects]);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Projects"
          subtitle="Innovative solutions across AI, machine learning, and software development"
        />
        
        <ProjectFilter 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          sortOptions={sortOptions}
          selectedSort={selectedSort}
          onSortChange={setSelectedSort}
        />
        
        <div className="py-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={index}
              {...project}
              index={index}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-600 dark:text-gray-400">No projects found matching your criteria.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;