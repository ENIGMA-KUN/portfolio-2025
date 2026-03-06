import { motion } from 'framer-motion';
import SectionContainer from '../ui/SectionContainer';
import PublicationCard from '../ui/PublicationCard';

const ResearchSection = () => {
  const publications = [
    {
      title: "ReQUESTA: A Hybrid Agentic Framework for Generating Cognitively Diverse Multiple-Choice Questions",
      conference: "Proceedings of the Learning Engineering Research Network Convening (LERN 2026)",
      year: 2026,
      authors: ["Yu Tian", "Shubham Chakraborty", "Linh Huynh", "Katerina Christhilf", "Micah Watanabe", "Danielle McNamara"],
      doi: "10.59668/2551.25167",
      abstract: "A hybrid 6-agent LLM orchestration pipeline (GPT-5, LangChain) for generating cognitively diverse MCQs achieving 95% expert alignment (Cohen's κ = 0.91) across 1K+ assessments."
    },
    {
      title: "Automated Run-on Sentence Detection and Correction for Educational Writing",
      conference: "Proceedings of the Learning Engineering Research Network Convening (LERN 2026)",
      year: 2026,
      authors: ["Shubham Chakraborty", "Yu Tian", "Michelle Banawan", "Andrew Potter", "Linh Huynh", "Yoshita Yajjapurapu", "Danielle McNamara"],
      doi: "10.59668/2551.25361",
      abstract: "Automated detection and correction system for run-on sentences in student educational writing using transformer-based NLP models for large-scale formative feedback."
    },
    {
      title: "Adaptive Multi-Modal Deepfake Detection for Safer Learning Environments",
      conference: "Proceedings of the Learning Engineering Research Network Convening (LERN 2026)",
      year: 2026,
      authors: ["Syeda Samira", "Shubham Chakraborty", "Sami Mian"],
      doi: "10.59668/2551.25422",
      abstract: "Multimodal deepfake detection ensemble (Visual 97.9% · Acoustic 96.2% · Temporal 97.3%) with adaptive gating and Grad-CAM dashboard; reduced lab-to-deployment gap 48% → 7.6%."
    },
    {
      title: "Quality Assessment Through Learning Engineering: An Evaluation Rubric of LLM-Generated Multiple-Choice Questions",
      conference: "Proceedings of the Learning Engineering Research Network Convening (LERN 2026)",
      year: 2026,
      authors: ["Katerina Christhilf", "Linh Huynh", "Yu Tian", "Shubham Chakraborty", "Micah Watanabe", "Danielle McNamara"],
      doi: "10.59668/2551.25360",
      abstract: "An evaluation rubric framework for assessing quality of LLM-generated multiple-choice questions through learning engineering principles and expert alignment metrics."
    },
    {
      title: "Cognitively Diverse Multiple-Choice Question Generation: A Hybrid Multi-Agent Framework with Large Language Models",
      conference: "Preprints (arXiv:2602.03704)",
      year: 2026,
      authors: ["Yu Tian", "Linh Huynh", "Katerina Christhilf", "Shubham Chakraborty", "Micah Watanabe", "Tracy Arner", "Danielle McNamara"],
      doi: "10.20944/preprints202602.0059.v1",
      abstract: "Multi-agent LLM framework for generating cognitively diverse MCQs targeting Bloom's taxonomy levels, with IDF-Weighted Jaccard similarity for distractor quality validation."
    },
    {
      title: "MCQ-Diag: A Diagnostic Platform for Distractor Analysis at Scale",
      conference: "Annual Conference of the Association for Computational Linguistics (ACL 2026)",
      year: 2026,
      authors: ["Michelle Banawan", "Shubham Chakraborty", "Katerina Christhilf", "Linh Huynh", "Tracy Arner", "Danielle McNamara"],
      abstract: "Docker-containerized diagnostic platform using SentenceBERT + IDF-Jaccard + GPT-5 batch analytics for large-scale MCQ distractor analysis in educational contexts.",
      isUnderReview: true
    },
    {
      title: "Transparency In Carbon Credit By Automating Data-Management Using Blockchain",
      conference: "2022 IEEE International Conference on Blockchain and Distributed Systems Security (ICBDS)",
      year: 2022,
      authors: ["Shubham Chakraborty", "Abhishek Anand", "Divya Kalash", "Anupam Srivastava"],
      doi: "10.1109/icbds53701.2022.9935979",
      abstract: "Novel approach to carbon credit verification using blockchain and automated data collection, reducing verification time by 40% across enterprise clients. Cited 15×."
    },
    {
      title: "Virtual Office Prototype: A Unity-2D Work Simulation",
      conference: "2021 International Conference on Technological Advancements and Innovations (ICTAI)",
      year: 2021,
      authors: ["Shubham Chakraborty", "C P Mallikarjuna Gowda", "Anupam Srivastava"],
      doi: "10.1109/ictai53825.2021.9673456",
      abstract: "Virtual office environment with real-time collaboration, AI-powered meeting scheduling, and attendance automation reducing scheduling conflicts by 40%."
    },
    {
      title: "Development of Information Technology Telecom Chatbot: An Artificial Intelligence and Machine Learning Approach",
      conference: "2021 2nd International Conference on Intelligent Engineering and Management (ICIEM)",
      year: 2021,
      authors: ["Shubham Chakraborty", "Mallikarjuna Gowda C P", "Anupam Srivastava"],
      doi: "10.1109/iciem51511.2021.9445354",
      abstract: "Intelligent chatbot for telecom customer service using transformer-based NLP and transfer learning, achieving 80% response coherence. Cited 26×."
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