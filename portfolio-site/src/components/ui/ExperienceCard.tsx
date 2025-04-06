import { motion } from 'framer-motion';

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

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  location,
  startDate,
  endDate,
  description,
  technologies = [],
  logo = '/images/company-placeholder.svg',
  index = 0
}) => {
  return (
    <motion.div
      className="relative flex mb-16 last:mb-0"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
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
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
          <div className="flex flex-col sm:flex-row sm:items-center mb-3 gap-2 sm:gap-0">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
            <span className="sm:ml-3 px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
              {startDate} - {endDate}
            </span>
          </div>
          
          <p className="text-md text-gray-700 dark:text-gray-300 mb-4">
            {company} <span className="text-gray-500 dark:text-gray-400">| {location}</span>
          </p>
          
          <ul className="space-y-2 mb-4">
            {description.map((item, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                <span className="mr-2 text-primary">•</span>
                {item}
              </li>
            ))}
          </ul>
          
          {technologies.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-4">
              {technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
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

export default ExperienceCard;