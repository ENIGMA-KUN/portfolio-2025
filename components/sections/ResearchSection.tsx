import { motion } from 'framer-motion';
import SectionContainer from '../ui/SectionContainer';
import PublicationCard from '../ui/PublicationCard';

const ResearchSection = () => {
  const publications = [
    {
      title: "Predicting Emergent Capabilities in LLMs",
      conference: "International Conference on Machine Learning (ICML)",
      year: 2025,
      authors: ["Shubham Chakraborty", "Anupam Srivastava"],
      abstract: "Novel research into capability thresholds across LLM architectures using advanced E-manifold metrics to quantify and predict emergent behaviors at different model scales.",
      isUnderReview: true
    },
    {
      title: "Transparency In Carbon Credit By Automating Data-Management Using Blockchain",
      conference: "IEEE International Conference on Blockchain and Distributed Systems Security",
      year: 2022,
      authors: ["Shubham Chakraborty", "Divya Kalash", "Anupam Srivastava"],
      doi: "10.1109/ICBDS53701.2022.9935979",
      abstract: "This paper presents a novel approach to carbon credit verification using blockchain technology and automated data collection, enhancing transparency and reducing verification time by 40%."
    },
    {
      title: "Development of Information Technology Telecom Chatbot: An Artificial Intelligence and Machine Learning Approach",
      conference: "IEEE International Conference on Intelligent Engineering and Management",
      year: 2021,
      authors: ["Shubham Chakraborty", "Anupam Srivastava"],
      doi: "10.1109/ICIEM51511.2021.9445354",
      abstract: "Implementation of an intelligent chatbot for telecom customer service using transformer-based architectures and transfer learning techniques, achieving 80% response coherence."
    },
    {
      title: "Virtual Office Prototype: A Unity-2D work Simulation",
      conference: "IEEE International Conference on Tools with Artificial Intelligence",
      year: 2021,
      authors: ["Shubham Chakraborty", "Anupam Srivastava"],
      doi: "10.1109/ICTAI53825.2021.9673456",
      abstract: "Development of a virtual office environment with real-time collaboration features, facial recognition for attendance, and AI-powered meeting scheduling to reduce conflicts by 40%."
    }
  ];

  return (
    <SectionContainer
      id="research"
      title="Research & Publications"
      subtitle="Contributing to the scientific community through peer-reviewed research"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
        {publications.map((publication, index) => (
          <PublicationCard 
            key={index}
            {...publication}
          />
        ))}
      </div>

      {/* Awards & Achievements */}
      <motion.div 
        className="mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Awards & Achievements
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-800">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Hackathon Success</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              9 hackathon wins totaling $29,000 in prizes for innovative AI/ML solutions
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                EY Techathon 2 Finalist
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                Smart India Hackathon 2022 - "IDEA TO BE FUNDED BY INNOVATION CELL" award
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                NPCI Hackathon (Government of India) - Winner
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-800">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technical Recognition</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Demonstrated technical excellence through competitions and contributions
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                Kaggle Expert Tier Status with 2 NLP competition medals
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                ISBI Medical Imaging Challenge - Top 15% ranking
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                IEEE Certificate of Appreciation (ICBDS 2022)
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-800">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Leadership & Community</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Contributions to education and community development
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                NASA Lucy Mission AI Ambassador
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                Conducted ML workshops for 500+ STEM students
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                IIM Bangalore Recognition - Selected participant for intensive management program
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </SectionContainer>
  );
};

export default ResearchSection;