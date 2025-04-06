import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const educationData = [
  {
    school: "Arizona State University",
    degree: "Master of Science in Information Technology",
    duration: "Aug 2023 – May 2025",
    location: "Tempe, AZ",
    gpa: "3.90/4.00",
    specialization: "Artificial Intelligence & Machine Learning",
    details: [
      "Key Coursework: Advanced Machine Learning, Natural Language Processing, Deep Learning, Cloud Computing Architecture, Data Mining, Ethics in AI",
      "Research Focus: AI-powered retrieval-augmented generation systems, climate technology applications",
      "Projects: Developed a comprehensive RAG system combining vector databases with fine-tuned LLMs, achieving 78% improvement in answer accuracy",
      "Academic Achievement: Selected for ASU's Innovation Lab for exceptional project work in climate technology",
      "Teaching Assistant: Assisting in graduate-level Machine Learning and Cloud Computing courses",
      "Research: Working on novel approaches to climate technology using advanced AI techniques"
    ]
  },
  {
    school: "Indian Institute of Management Bangalore",
    degree: "Executive Education: Foundations of Management",
    duration: "April 2023",
    location: "Bangalore, India",
    specialization: "Business Strategy & Leadership",
    details: [
      "Selective Program: Accepted into prestigious management program at India's top-ranked business school",
      "Intensive Curriculum: Completed comprehensive coursework in business strategy, leadership, and organizational behavior",
      "Case Studies: Analyzed real-world business scenarios focusing on technology sector and sustainability",
      "Leadership Training: Participated in intensive workshops on strategic management and team leadership",
      "Capstone Project: Developed strategic business plan for climate technology startup with financial projections",
      "Networking: Collaborated with industry leaders and executives from diverse sectors"
    ]
  },
  {
    school: "BMS Institute of Technology & Management",
    degree: "Bachelor of Engineering in Electronics & Telecommunication",
    duration: "Aug 2019 – May 2023",
    location: "Bengaluru, India",
    gpa: "3.80/4.00",
    specialization: "IoT & Embedded Systems",
    details: [
      "Academic Excellence: Graduated with Distinction, maintained Dean's List position throughout all semesters",
      "Major Coursework: Digital Signal Processing, Embedded Systems, IoT Architecture, Machine Learning, Computer Networks",
      "Senior Thesis: 'Blockchain-Based Carbon Credit Verification System' - Awarded Best Innovative Project 2023",
      "Technical Projects: Led development of IoT-based emission monitoring system and neural network implementation for medical imaging",
      "Leadership: Served as Technical Lead of Institute Robotics Team, organizing technical workshops and competitions",
      "Extracurricular: Organized Annual Technical Symposium, mentored junior students in robotics and programming"
    ]
  }
];

export default function EducationSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-dark to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-light"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>
        <div ref={ref} className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/20"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{edu.school}</h3>
                  <p className="text-xl text-light mb-2">{edu.degree}</p>
                  {edu.specialization && (
                    <p className="text-secondary mb-1">Specialization: {edu.specialization}</p>
                  )}
                  {edu.gpa && <p className="text-secondary">GPA: {edu.gpa}</p>}
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <p className="text-light">{edu.duration}</p>
                  <p className="text-gray-400">{edu.location}</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-3 mt-4">
                {edu.details.map((detail, i) => (
                  <li key={i} className="text-gray-300 hover:text-light transition-colors">
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 