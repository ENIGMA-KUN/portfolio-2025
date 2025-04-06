import { motion } from 'framer-motion';
import SectionContainer from '../ui/SectionContainer';
import ExperienceCard from '../ui/ExperienceCard';

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
      title: 'Software Engineer',
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

  return (
    <SectionContainer
      id="experience"
      title="Professional Experience"
      subtitle="My journey in AI, machine learning, and software development"
    >
      <div className="pt-10">
        {experiences.map((experience, index) => (
          <ExperienceCard 
            key={index}
            {...experience}
            index={index}
          />
        ))}
      </div>

      {/* Education */}
      <motion.div 
        className="mt-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Education
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-800">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Arizona State University</h4>
            <p className="text-primary font-medium mb-2">MS in Information Technology</p>
            <p className="text-gray-600 dark:text-gray-400 mb-1">GPA: 3.90/4.00</p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Aug 2023 – May 2025</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <span className="font-medium">Specialization:</span> Artificial Intelligence & Machine Learning
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-800">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">BMS Institute of Technology</h4>
            <p className="text-primary font-medium mb-2">BE in Electronics & Telecommunication</p>
            <p className="text-gray-600 dark:text-gray-400 mb-1">GPA: 3.80/4.00</p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Aug 2019 – May 2023</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <span className="font-medium">Thesis:</span> "Blockchain-Based Carbon Credit Verification System"
            </p>
          </div>
        </div>
      </motion.div>
    </SectionContainer>
  );
};

export default ExperienceSection;