import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBrain, FaDatabase, FaCode } from 'react-icons/fa';

// Neural Network Component (Simplified version for the About section)
const NeuralNetworkVisualization = () => {
  return (
    <div className="w-full h-64 bg-gray-900 rounded-lg overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 animate-pulse" />
        
        {/* Neural network nodes and connections */}
        <div className="relative grid grid-cols-4 gap-8 p-6">
          {/* Input layer */}
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={`input-${i}`}
              className="w-4 h-4 bg-blue-500 rounded-full"
              initial={{ opacity: 0.3 }}
              animate={{ 
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
          
          {/* Hidden layer 1 */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={`hidden1-${i}`}
              className="w-4 h-4 bg-indigo-500 rounded-full"
              initial={{ opacity: 0.3 }}
              animate={{ 
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.15 + 0.5,
              }}
            />
          ))}
          
          {/* Hidden layer 2 */}
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={`hidden2-${i}`}
              className="w-4 h-4 bg-purple-500 rounded-full"
              initial={{ opacity: 0.3 }}
              animate={{ 
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2 + 1,
              }}
            />
          ))}
          
          {/* Output layer */}
          {[1, 2].map((i) => (
            <motion.div
              key={`output-${i}`}
              className="w-4 h-4 bg-pink-500 rounded-full"
              initial={{ opacity: 0.3 }}
              animate={{ 
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3 + 1.5,
              }}
            />
          ))}
        </div>
        
        {/* Label */}
        <div className="absolute bottom-2 right-2 text-xs text-white/70">Neural Network Visualization</div>
      </div>
    </div>
  );
};

// Skill Category Component
const SkillCategory = ({ title, skills, icon }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-3">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>
      
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col"
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
          >
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">{skill.level}%</span>
            </div>
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-secondary"
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 1, delay: 0.1 * index + 0.3 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Stats Item Component
const StatItem = ({ value, label, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div 
      ref={ref}
      className="text-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
    >
      <motion.p 
        className="text-3xl font-bold text-primary"
        initial={{ scale: 0.8 }}
        animate={isInView ? { scale: 1 } : { scale: 0.8 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
      >
        {value}
      </motion.p>
      <p className="text-sm text-gray-600 dark:text-gray-400">{label}</p>
    </motion.div>
  );
};

// About Section
const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const aiMlSkills = [
    { name: "PyTorch / TensorFlow", level: 95 },
    { name: "Transformers / LLMs", level: 90 },
    { name: "RAG Systems", level: 92 },
    { name: "Computer Vision", level: 85 },
    { name: "Natural Language Processing", level: 88 }
  ];
  
  const dataSkills = [
    { name: "Pandas / NumPy", level: 95 },
    { name: "Statistical Analysis", level: 88 },
    { name: "Data Visualization", level: 90 },
    { name: "ML Pipelines", level: 85 },
    { name: "Time Series Forecasting", level: 82 }
  ];
  
  const devSkills = [
    { name: "React / Next.js", level: 90 },
    { name: "Node.js / Express", level: 85 },
    { name: "Python (Django/Flask)", level: 88 },
    { name: "RESTful / GraphQL APIs", level: 82 },
    { name: "AWS Cloud Services", level: 85 }
  ];
  
  const stats = [
    { value: "1.5+", label: "Professional Experience" },
    { value: "3+", label: "Startup Experience" },
    { value: "20+", label: "Projects Completed" },
    { value: "9", label: "Hackathon Wins" },
    { value: "4", label: "Publications" }
  ];
  
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm a technical professional passionate about using AI to solve real-world problems
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full" />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left column - Personal info */}
          <div ref={ref} className="md:col-span-2 space-y-6">
            <motion.div 
              className="space-y-6 text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg leading-relaxed">
                I'm a forward-thinking <span className="text-primary font-medium">AI/ML Engineer</span> and <span className="text-primary font-medium">Data Scientist</span> with a passion for building intelligent systems that solve complex problems. Currently completing my MS in Information Technology at Arizona State University with a focus on Artificial Intelligence and Machine Learning.
              </p>
              
              <p className="text-lg leading-relaxed">
                My expertise spans across the AI/ML spectrum – from developing sophisticated RAG systems and fine-tuning foundation models to creating scalable ML pipelines and building full-stack applications. I'm particularly interested in applications of AI in climate technology, having founded Emitrix.io, a startup focused on emissions reduction modeling.
              </p>
              
              <p className="text-lg leading-relaxed">
                With a proven track record of hackathon wins, research publications, and successful projects, I combine technical expertise with a business-oriented mindset to deliver impactful solutions. I thrive in collaborative environments where I can leverage my technical skills to create innovative products.
              </p>
            </motion.div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              {stats.map((stat, index) => (
                <StatItem 
                  key={index} 
                  value={stat.value} 
                  label={stat.label}
                  delay={0.1 * index} 
                />
              ))}
            </div>
          </div>
          
          {/* Right column - Skills and Animation */}
          <div className="space-y-8">
            {/* Neural Network Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <NeuralNetworkVisualization />
            </motion.div>
            
            {/* Key competencies highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Competencies</h3>
              <ul className="space-y-2">
                <li className="flex items-start text-gray-600 dark:text-gray-400">
                  <span className="text-primary mr-2">•</span>
                  <span>Building RAG systems with vector databases and LLMs</span>
                </li>
                <li className="flex items-start text-gray-600 dark:text-gray-400">
                  <span className="text-primary mr-2">•</span>
                  <span>Developing ML pipelines for production environments</span>
                </li>
                <li className="flex items-start text-gray-600 dark:text-gray-400">
                  <span className="text-primary mr-2">•</span>
                  <span>Climate technology and emissions reduction modeling</span>
                </li>
                <li className="flex items-start text-gray-600 dark:text-gray-400">
                  <span className="text-primary mr-2">•</span>
                  <span>Full-stack development with React and Python</span>
                </li>
                <li className="flex items-start text-gray-600 dark:text-gray-400">
                  <span className="text-primary mr-2">•</span>
                  <span>Data analysis and statistical modeling</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
        
        {/* Skills section */}
        <div className="mt-20">
          <motion.h3 
            className="text-2xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Technical Skills
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SkillCategory 
              title="AI & Machine Learning" 
              skills={aiMlSkills} 
              icon={<FaBrain size={24} />}
            />
            
            <SkillCategory 
              title="Data Science" 
              skills={dataSkills} 
              icon={<FaDatabase size={24} />}
            />
            
            <SkillCategory 
              title="Development" 
              skills={devSkills} 
              icon={<FaCode size={24} />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;