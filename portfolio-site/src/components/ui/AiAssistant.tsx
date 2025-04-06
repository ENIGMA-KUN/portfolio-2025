import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimesCircle, FaPaperPlane } from 'react-icons/fa';

interface Message {
  id: number;
  content: string;
  sender: 'user' | 'assistant';
}

const presetResponses = {
  "hi": "Hello! I'm Shubham's AI assistant. How can I help you learn more about his experience and projects?",
  "hello": "Hi there! I'm here to help you discover more about Shubham's work. What would you like to know?",
  "help": "I can tell you about Shubham's skills, projects, research, education, or work experience. What are you interested in?",
  "projects": "Shubham has worked on several noteworthy projects including: \n\n1. RAG-powered Academic Assistant - a retrieval-augmented system combining vector databases with fine-tuned LLMs\n\n2. Emissions Reduction Platform - comprehensive climate scenario analysis tool for carbon management\n\n3. LLM Capability Analysis - framework for quantifying emergent capabilities across LLM architectures\n\n4. Medical Image Segmentation - using advanced deep learning for medical diagnostics\n\nWhich one would you like to know more about?",
  "research": "Shubham has published several research papers including:\n\n1. \"Predicting Emergent Capabilities in LLMs\" (under review for ICML 2025)\n\n2. \"Transparency In Carbon Credit By Automating Data-Management Using Blockchain\" (2022)\n\n3. \"Development of Information Technology Telecom Chatbot\" (2021)\n\n4. \"Virtual Office Prototype: A Unity-2D work Simulation\" (2021)\n\nHis research focuses on AI/ML, climate technology, and innovative applications of machine learning.",
  "skills": "Shubham's key technical skills include:\n\n• AI/ML: PyTorch, TensorFlow, Transformers, HuggingFace, RAG systems, LLM fine-tuning\n\n• Data Science: Statistical analysis, pandas, scikit-learn, visualization tools\n\n• Software Development: Full stack with React, Node.js, Python frameworks\n\n• Cloud & DevOps: AWS, Docker, CI/CD pipelines\n\nHe specializes in building AI systems with practical applications.",
  "experience": "Shubham's professional experience includes:\n\n• AI Research Assistant at Arizona State University\n• Machine Learning Engineer (Intern) at Nexus Info\n• Software Engineer at Arizona State University\n• Full Stack Developer (Intern) at Varcons Technologies\n• Founder & CEO of Emitrix.io\n\nWhich role would you like to learn more about?",
  "contact": "You can contact Shubham via:\n\nEmail: chakraborty.shubham007@gmail.com\nPhone: +1 (623) 340-7022\nLinkedIn: linkedin.com/in/shubham-chakraborty\nGitHub: github.com/enigma-kun\n\nHe's currently based in Tempe, Arizona and is open to opportunities in AI/ML engineering and data science.",
  "emitrix": "Emitrix is a climate technology startup that Shubham founded. It provides a comprehensive platform for emissions management and climate scenario analysis. The platform includes:\n\n• Emissions calculation engine across all scopes\n• Scenario modeling for reduction pathways\n• Financial impact analysis for climate initiatives\n• AI-powered sustainability reporting\n\nShubham built the platform using a modern tech stack including Python, React, AWS, and machine learning components. The venture secured $100K in seed funding and successfully served multiple enterprise clients."
};

type PresetKey = keyof typeof presetResponses;

const AiAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hi! I'm Shubham's AI assistant. Ask me anything about his experience, projects, or skills!",
      sender: 'assistant'
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      content: input,
      sender: 'user'
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    
    // Simulate AI thinking time
    setTimeout(() => {
      generateResponse(input.trim().toLowerCase());
      setIsTyping(false);
    }, 1000);
  };
  
  const generateResponse = (query: string) => {
    let response = "I don't have specific information about that. You can ask me about Shubham's skills, projects, experience, research, or how to contact him.";
    
    // Check for keywords in the query
    for (const [key, value] of Object.entries(presetResponses)) {
      if (query.includes(key)) {
        response = value;
        break;
      }
    }
    
    // Additional response logic for specific project inquiries
    if (query.includes('rag') || query.includes('assistant') || query.includes('retrieval')) {
      response = "The RAG-powered Academic Assistant is a comprehensive retrieval-augmented generation system that combines vector databases with fine-tuned LLMs. It achieved a 78% improvement in answer accuracy and reduced hallucinations by 65% for academic information retrieval tasks. The system uses advanced embedding techniques and context-aware prompt engineering to provide highly accurate responses.";
    } else if (query.includes('emission') || query.includes('climate') || query.includes('carbon')) {
      response = "The Emissions Reduction Platform is a comprehensive climate technology solution built by Shubham at Emitrix.io. It enables organizations to track, analyze, and reduce their carbon footprint through sophisticated modeling and scenario analysis. The platform includes emissions calculation across all scopes, reduction pathways modeling, financial impact analysis, and AI-powered reporting capabilities.";
    } else if (query.includes('medical') || query.includes('image') || query.includes('segmentation')) {
      response = "The Medical Image Segmentation project used PyTorch and U-Net architecture with transformer enhancements to process over 3,000 medical images. It achieved a top 15% ranking in the ISBI Challenge through an advanced segmentation approach that maintained anatomical consistency. The model improved accuracy from 82% to 92% via adaptive augmentation and hyperparameter tuning.";
    }
    
    const assistantMessage: Message = {
      id: messages.length + 2,
      content: response,
      sender: 'assistant'
    };
    
    setMessages(prev => [...prev, assistantMessage]);
  };
  
  const toggleChat = () => {
    setIsOpen(prev => !prev);
  };
  
  return (
    <>
      {/* Chat button */}
      <motion.button
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-lg z-50 flex items-center justify-center"
        onClick={toggleChat}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <FaRobot size={24} />
      </motion.button>
      
      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-80 sm:w-96 h-96 bg-white dark:bg-dark rounded-lg shadow-xl overflow-hidden z-50 flex flex-col"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            {/* Chat header */}
            <div className="bg-gradient-to-r from-primary to-secondary p-4 text-white flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <FaRobot size={20} />
                <h3 className="font-medium">AI Assistant</h3>
              </div>
              <button 
                onClick={toggleChat}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <FaTimesCircle size={20} />
              </button>
            </div>
            
            {/* Chat messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-900">
              {messages.map(message => (
                <div
                  key={message.id}
                  className={`mb-4 max-w-[85%] ${
                    message.sender === 'user' ? 'ml-auto' : 'mr-auto'
                  }`}
                >
                  <div
                    className={`p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-primary text-white rounded-br-none'
                        : 'bg-white dark:bg-gray-800 shadow rounded-bl-none'
                    }`}
                  >
                    <p className="whitespace-pre-line">{message.content}</p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="mb-4 max-w-[85%] mr-auto">
                  <div className="p-3 rounded-lg bg-white dark:bg-gray-800 shadow rounded-bl-none">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0s' }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            {/* Chat input */}
            <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-dark flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Shubham's experience..."
                className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-l-lg px-4 py-2 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-blue-600 text-white rounded-r-lg px-4 py-2 transition-colors"
                disabled={isTyping}
              >
                <FaPaperPlane />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AiAssistant;