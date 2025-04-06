import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionContainer from '../ui/SectionContainer';
import NeuralNetworkAnimation from '../three/NeuralNetworkAnimation';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '20+' },
    { label: 'Hackathon Wins', value: '9' },
    { label: 'Publications', value: '4' },
  ];
  
  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      skills: [
        'PyTorch / TensorFlow',
        'Transformers / LLMs',
        'RAG Systems',
        'Computer Vision',
        'Natural Language Processing',
        'Fine-tuning',
      ]
    },
    {
      title: 'Data Science',
      skills: [
        'Pandas / NumPy',
        'Statistical Analysis',
        'Data Visualization',
        'ML Pipelines',
        'Predictive Modeling',
        'Time Series Forecasting',
      ]
    },
    {
      title: 'Development',
      skills: [
        'React / Next.js',
        'Node.js / Express',
        'Python (Django/Flask)',
        'RESTful / GraphQL APIs',
        'AWS Cloud Services',
        'Docker / Kubernetes',
      ]
    },
  ];
  
  return (
    <SectionContainer
      id="about"
      title="About Me"
      subtitle="I'm a technical professional passionate about using AI to solve real-world problems"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left side - Content */}
        <div>
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-gray-600 dark:text-gray-400"
          >
            <p>
              I'm a forward-thinking AI/ML Engineer and Data Scientist with a passion for building intelligent systems that solve complex problems. Currently completing my MS in Information Technology at Arizona State University with a focus on Artificial Intelligence and Machine Learning.
            </p>
            
            <p>
              My expertise spans across the AI/ML spectrum – from developing sophisticated RAG systems and fine-tuning foundation models to creating scalable ML pipelines and building full-stack applications. I'm particularly interested in applications of AI in climate technology, having founded Emitrix.io, a startup focused on emissions reduction modeling.
            </p>
            
            <p>
              With a proven track record of hackathon wins, research publications, and successful projects, I combine technical expertise with a business-oriented mindset to deliver impactful solutions. I thrive in collaborative environments where I can leverage my technical skills to create innovative products.
            </p>
          </motion.div>
          
          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
              >
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Right side - Skills & Animation */}
        <div className="space-y-8">
          {/* Neural Network Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="h-64 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-100 dark:border-gray-700"
          >
            <NeuralNetworkAnimation height={256} />
          </motion.div>
          
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            {skillCategories.map((category, catIndex) => (
              <div key={catIndex}>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{category.title}</h3>
                <div className="flex flex-wrap">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="m-1 px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-700"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: 0.4 + (0.05 * (catIndex * category.skills.length + skillIndex)) 
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;