import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaBriefcase
} from 'react-icons/fa';

// Define TypeScript interfaces
interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies?: string[];
  logo?: string;
  index?: number;
}

// Experience Card Component
const ExperienceCard = ({ 
  title, 
  company, 
  location, 
  startDate, 
  endDate, 
  description, 
  technologies = [], 
  logo = '/images/company-placeholder.svg',
  index = 0
}: ExperienceCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      className="relative flex mb-16 last:mb-0"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Timeline connector */}
      {index !== 0 && (
        <div className="absolute top-0 bottom-0 left-6 w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary/50 to-secondary/50 z-0" />
      )}
      
      {/* Company logo */}
      <div className="relative z-10 flex-shrink-0 mr-6">
        <div className="w-12 h-12 rounded-full shadow-md bg-white dark:bg-gray-800 p-1 border-2 border-primary flex items-center justify-center overflow-hidden">
          <img 
            src={logo} 
            alt={`${company} logo`} 
            className="w-8 h-8 object-contain"
            onError={(e) => {
              e.currentTarget.src = '/images/company-placeholder.svg';
            }}
          />
        </div>
      </div>
      
      {/* Experience content */}
      <div className="flex-grow">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
          <div className="flex flex-col sm:flex-row sm:items-center mb-3 gap-2 sm:gap-0">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
            <div className="sm:ml-3 flex items-center px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
              <FaCalendarAlt className="mr-1" size={12} />
              <span>{startDate} - {endDate}</span>
            </div>
          </div>
          
          <p className="text-md flex items-center text-gray-700 dark:text-gray-300 mb-4">
            <FaBriefcase className="mr-2 text-primary" size={14} />
            {company} 
            <span className="mx-2">|</span>
            <FaMapMarkerAlt className="mr-1 text-primary" size={14} />
            <span className="text-gray-600 dark:text-gray-400">{location}</span>
          </p>
          
          {description.length > 0 && (
            <ul className="space-y-3 mb-4">
              {description.map((item, i) => (
                <li key={i} className="text-gray-600 dark:text-gray-400 flex items-start">
                  <span className="mr-2 text-primary mt-1.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
          
          {technologies.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-4">
              {technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Education Card Component
interface EducationCardProps {
  school: string;
  degree: string;
  gpa?: string;
  duration: string;
  description?: string;
  logo?: string;
}

const EducationCard = ({ 
  school, 
  degree, 
  gpa, 
  duration, 
  description, 
  logo 
}: EducationCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div 
      ref={ref}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700 mr-4 flex items-center justify-center">
          {logo ? (
            <img 
              src={logo} 
              alt={`${school} logo`} 
              className="w-10 h-10 object-contain"
              onError={(e) => {
                e.currentTarget.src = '/images/education-placeholder.svg';
              }}
            />
          ) : (
            <span className="text-xl font-bold text-primary">{school.charAt(0)}</span>
          )}
        </div>
        <div>
          <h4 className="text-lg font-bold text-gray-900 dark:text-white">{school}</h4>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <FaCalendarAlt className="mr-1" size={12} />
            <span>{duration}</span>
          </div>
        </div>
      </div>
      
      <p className="text-primary font-medium mb-2">{degree}</p>
      <p className="text-gray-600 dark:text-gray-400 mb-3">GPA: {gpa}</p>
      
      {description && (
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
          {description}
        </p>
      )}
    </motion.div>
  );
};

// Section Header Component
interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
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

// Experience Stats Component
const ExperienceStats = () => {
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-700">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Professional Experience</h3>
        <div className="flex items-center gap-4">
          <div className="text-4xl font-bold text-primary">1.5+</div>
          <div className="text-gray-600 dark:text-gray-400">
            Years of professional experience in AI research and software development
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-700">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Startup Experience</h3>
        <div className="flex items-center gap-4">
          <div className="text-4xl font-bold text-secondary">3+</div>
          <div className="text-gray-600 dark:text-gray-400">
            Years of entrepreneurial experience in climate tech and AI-powered solutions
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Experience Section
const ExperienceSection = () => {
  const experiences = [
    {
      title: 'AI Engineering Specialist',
      company: 'Arizona State University',
      location: 'Tempe, AZ',
      startDate: 'Feb 2026',
      endDate: 'Present',
      description: [],
      technologies: ['GPT-5', 'LangChain', 'LangGraph', 'SentenceBERT', 'Docker', 'RAG', 'LoRA', 'Multi-Agent Systems'],
      logo: '/images/logos/asu.png'
    },
    {
      title: 'AI Innovation Engineer',
      company: 'Arizona State University',
      location: 'Tempe, AZ',
      startDate: 'Jun 2025',
      endDate: 'Jan 2026',
      description: [],
      technologies: ['GPT-4o', 'LangChain', 'Canvas LMS', 'ETL', 'Multi-Agent Systems', 'Python'],
      logo: '/images/logos/asu.png'
    },
    {
      title: 'Machine Learning Engineer',
      company: 'Aranya.io (Acquired by NPCI / Snapper Future Tech)',
      location: 'Remote',
      startDate: 'Oct 2021',
      endDate: 'May 2023',
      description: [],
      technologies: ['Python', 'XGBoost', 'Random Forest', 'spaCy', 'AWS ECS', 'Docker', 'MLOps', 'GitHub Actions'],
      logo: '/images/logos/emitrix.png'
    },
    {
      title: 'Instructional Design Assistant (AI In Education)',
      company: 'Arizona State University',
      location: 'Tempe, AZ',
      startDate: 'Apr 2024',
      endDate: 'May 2025',
      description: [],
      technologies: ['LLMs', 'Chain of Thought', 'React', 'Canvas LMS', 'Python'],
      logo: '/images/logos/asu.png'
    },
    {
      title: 'Machine Learning Engineer (Internship)',
      company: 'Nexus Info',
      location: 'Coimbatore, IN',
      startDate: 'Apr 2024',
      endDate: 'Jun 2024',
      description: [],
      technologies: ['BERT', 'AWS', 'NLU', 'Data Augmentation', 'ML Pipelines'],
      logo: '/images/logos/nexus.png'
    },
    {
      title: 'Full Stack Developer (Internship)',
      company: 'Varcons Technologies',
      location: 'Bengaluru, IN',
      startDate: 'Feb 2023',
      endDate: 'Apr 2023',
      description: [],
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'CI/CD'],
      logo: '/images/logos/varcons.png'
    }
  ];

  const education = [
    {
      school: 'Arizona State University',
      degree: 'MS in Information Technology',
      gpa: '3.80/4.00',
      duration: 'Aug 2023 – May 2025',
      description: 'Specialization: Artificial Intelligence & Machine Learning. Research: "A Mathematical Framework for Predicting and Measuring Emergent Capabilities in Large Language Models" (Under Review, ICML 2024)',
      logo: '/images/logos/asu.png'
    },
    {
      school: 'Indian Institute of Management Bangalore',
      degree: 'Foundation of Management (Accelerated Program)',
      gpa: 'Certified',
      duration: 'April 2023',
      description: 'Selected among top 60 candidates nationally. Specialized in AI Applications in Business.',
      logo: '/images/logos/iimb.png'
    },
    {
      school: 'BMS Institute of Technology & Management',
      degree: 'B.E. in Electronics & Telecommunication',
      gpa: '3.80/4.00',
      duration: 'Aug 2019 – May 2023',
      description: 'Publications: "Transformer-Based Architecture for Enhanced Response Coherence" (IEEE). "Carbon Automated Emission Monitoring" (IEEE).',
      logo: '/images/logos/bms.png'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Professional Experience"
          subtitle="My journey through professional roles and projects"
        />
        
        <div className="py-8">
          {experiences.map((exp, index) => (
            <ExperienceCard 
              key={index}
              {...exp}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-20">
          <SectionHeader
            title="Education"
            subtitle="Academic background and qualifications"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {education.map((edu, index) => (
              <EducationCard
                key={index}
                {...edu}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;