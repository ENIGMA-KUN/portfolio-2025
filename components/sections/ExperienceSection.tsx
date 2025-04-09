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
          
          <ul className="space-y-3 mb-4">
            {description.map((item, i) => (
              <li key={i} className="text-gray-600 dark:text-gray-400 flex items-start">
                <span className="mr-2 text-primary mt-1.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          
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
      title: 'AI Research Assistant',
      company: 'Arizona State University',
      location: 'Tempe, AZ',
      startDate: 'Jan 2025',
      endDate: 'May 2025',
      description: [
        'Built comprehensive RAG system combining vector databases with fine-tuned LLMs, achieving 78% improvement in answer accuracy and reducing hallucinations by 65% for academic information retrieval tasks.',
        'Conducted extensive prompt engineering experiments across cutting-edge foundation models (GPT-4, Claude, Llama-2), improving response quality by 37% through systematic optimization of query patterns and context windows.'
      ],
      technologies: ['RAG', 'Vector Databases', 'LLMs', 'Prompt Engineering'],
      logo: '/images/logos/asu.png'
    },
    {
      title: 'Machine Learning Engineer (Internship)',
      company: 'Nexus Info',
      location: 'Coimbatore, IN',
      startDate: 'Apr 2024',
      endDate: 'Jun 2024',
      description: [
        'Developed scalable BERT-based NLU system achieving 95% accuracy across 12+ customer intent categories and reducing response times from 15 to 5 minutes for 1000+ daily customer service interactions.',
        'Optimized end-to-end ML pipeline on AWS infrastructure, reducing model serving costs by 20% and processing latency by 40% while maintaining prediction quality through efficient batch processing and caching.',
        'Implemented advanced data augmentation techniques, increasing training samples by 300% and improving model robustness to unseen queries by 25% through comprehensive distribution testing and validation.'
      ],
      technologies: ['BERT', 'AWS', 'NLU', 'Data Augmentation', 'ML Pipelines'],
      logo: '/images/logos/nexus.png'
    },
    {
      title: 'Software Engineer (Instructional Design Assistant)',
      company: 'Arizona State University',
      location: 'Tempe, AZ',
      startDate: 'May 2024',
      endDate: 'Jan 2025',
      description: [
        'Architected a responsive UI with WCAG 2.1 compliance for the LTH engineering website, resulting in 30% faster page load times and 95% reduction in accessibility issues across 100+ dynamic pages.',
        'Implemented custom CMS plugins and RESTful API integrations with the Canvas LMS, reducing faculty course publishing time by 45% while enabling seamless collaboration for 50+ instructors across departments.',
        'Developed interactive analytics dashboards using React, D3.js, and Redux for real-time user engagement tracking, driving a 20% increase in site traffic and producing actionable insights for content optimization.'
      ],
      technologies: ['React', 'D3.js', 'Redux', 'RESTful APIs', 'Canvas LMS'],
      logo: '/images/logos/asu.png'
    },
    {
      title: 'Full Stack Developer (Internship)',
      company: 'Varcons Technologies',
      location: 'Bengaluru, IN',
      startDate: 'Feb 2023',
      endDate: 'Apr 2023',
      description: [
        'Engineered responsive data visualization components using React, TypeScript, and D3.js for real-time dashboards, improving data visibility by 40% and enabling faster decision-making for business stakeholders.',
        'Developed scalable RESTful APIs using Node.js, Express, and MongoDB for efficient data retrieval, reducing average page load times by 30% and enhancing overall user experience across web applications.',
        'Implemented a robust CI/CD pipeline with GitHub Actions, achieving 90% test coverage through Jest and Cypress, resulting in 75% reduction in QA time and accelerated release cycles.'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'CI/CD'],
      logo: '/images/logos/varcons.png'
    },
    {
      title: 'Founder & CEO',
      company: 'Emitrix.io',
      location: 'Remote',
      startDate: 'Aug 2022',
      endDate: 'Jan 2023',
      description: [
        'Built Sustain AI using OpenAI\'s GPT-3.5 API and custom Python scripts to parse environmental data, reducing report generation time by 40% for 8 enterprise clients while securing $100K seed funding.',
        'Trained Random Forest and XGBoost models on client energy consumption patterns, identifying peak usage times and suggesting optimizations that reduced consumption by 30%.',
        'Developed custom spaCy NER model to extract compliance metrics from documents, automating 50% of manual reporting tasks.',
        'Implemented MLOps using Docker containers on AWS ECS with auto-scaling and CloudWatch monitoring for 99% uptime.'
      ],
      technologies: ['GPT-3.5', 'Machine Learning', 'AWS', 'Docker', 'MLOps', 'spaCy'],
      logo: '/images/logos/emitrix.png'
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
        
        <ExperienceStats />
        
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