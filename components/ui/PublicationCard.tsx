import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaQuoteRight } from 'react-icons/fa';

interface PublicationCardProps {
  title: string;
  conference: string;
  year: number;
  authors: string[];
  doi?: string;
  abstract?: string;
  isUnderReview?: boolean;
}

const PublicationCard: React.FC<PublicationCardProps> = ({
  title,
  conference,
  year,
  authors,
  doi,
  abstract,
  isUnderReview = false
}) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100 dark:border-gray-800"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
          <div className="flex-shrink-0 ml-4">
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
              {year}
            </span>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          <span className="italic">{conference}</span>
          {isUnderReview && <span className="ml-2 text-amber-600 font-medium">(Under Review)</span>}
        </p>
        
        <div className="mb-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <span className="font-medium">Authors:</span>{' '}
            {authors.map((author, index) => (
              <span key={index}>
                <span className={author.includes('Shubham Chakraborty') ? 'font-medium text-primary' : ''}>
                  {author}
                </span>
                {index < authors.length - 1 && ', '}
              </span>
            ))}
          </p>
        </div>
        
        {abstract && (
          <div className="mb-4">
            <div className="relative">
              <FaQuoteRight className="absolute top-0 left-0 text-gray-200 dark:text-gray-800 opacity-50" size={16} />
              <p className="text-sm text-gray-600 dark:text-gray-400 pl-6 italic">
                {abstract.length > 150 ? `${abstract.substring(0, 150)}...` : abstract}
              </p>
            </div>
          </div>
        )}
        
        {doi && (
          <div className="mt-auto pt-4">
            <a
              href={`https://doi.org/${doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-primary hover:text-blue-600 transition-colors"
            >
              <span>DOI: {doi}</span>
              <FaExternalLinkAlt className="ml-1" size={12} />
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default PublicationCard;