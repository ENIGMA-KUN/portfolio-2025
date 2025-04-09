export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
  image?: string;
  reversed?: boolean;
  achievement?: string;
  category: string;
  featured?: boolean;
}

export const projectsData: Project[] = [
  // Featured Projects
  {
    title: 'RAG-powered Academic Assistant',
    description: 'A comprehensive retrieval-augmented generation system that combines vector databases with fine-tuned LLMs, achieving 78% improvement in answer accuracy and reduced hallucinations by 65% for academic information retrieval tasks across multiple domains.',
    technologies: ['LangChain', 'FAISS', 'LLMs', 'Sentence-Transformers', 'Streamlit'],
    githubLink: 'https://github.com/ENIGMA-KUN/rag-cahtbot',
    image: '/images/projects/rag-system.png',
    achievement: 'BLEU score of 0.72 and ROUGE-L score of 0.68',
    category: 'Deep Learning',
    featured: true
  },
  {
    title: 'Emissions Reduction Modeling Platform',
    description: 'Developed a comprehensive climate scenario analysis engine that enables 30-50% reduction modeling by 2030. Created financial impact analysis tools calculating NPV, ROI, payback periods, and marginal abatement costs with statistical forecasting capabilities.',
    technologies: ['Python', 'Pandas', 'AWS', 'React', 'D3.js', 'MongoDB'],
    demoLink: 'https://emitrix.io',
    image: '/images/projects/emissions-platform.png',
    achievement: 'Secured $100K seed funding',
    reversed: true,
    category: 'Full Stack',
    featured: true
  },
  {
    title: 'LLM Capability Analysis Framework',
    description: 'Developed a first-of-its-kind framework quantifying emergent capability thresholds across LLM architectures (7B-72B), achieving 87% prediction accuracy using novel E-manifold metrics that uncovered previously unobserved scaling laws for reasoning tasks.',
    technologies: ['PyTorch', 'HuggingFace', 'Transformers', 'CUDA'],
    githubLink: 'https://github.com/ENIGMA-KUN/EmergentCapabilities-Uncertainty-Aware-Capability-Manifolds-in-LLMs',
    image: '/images/projects/llm-analysis.png',
    achievement: '42% reduced computation cost',
    category: 'Deep Learning',
    featured: true
  },
  {
    title: 'Carbon Credit Blockchain System',
    description: 'Implemented Ethereum smart contracts with IPFS storage for transparent carbon credit verification, reducing verification time by 40% through automated data management. Integrated with IoT emission monitoring using Raspberry Pi and MQ-135 sensors.',
    technologies: ['Ethereum', 'IPFS', 'React', 'Python', 'IoT'],
    githubLink: 'https://github.com/ENIGMA-KUN/organizing-carbon-credit-1st-',
    image: '/images/projects/carbon-blockchain.jpg',
    achievement: 'EY Techathon 2 Finalist',
    reversed: true,
    category: 'Neural Networks',
    featured: true
  },
  {
    title: 'Medical Image Segmentation',
    description: 'Processed over 3,000 medical images with U-Net architecture and transformer enhancements, achieving top 15% ranking in ISBI Challenge. Increased model accuracy from 82% to 92% via adaptive augmentation and hyperparameter tuning.',
    technologies: ['PyTorch', 'U-Net', 'Transformers', 'MONAI'],
    githubLink: 'https://github.com/enigma-kun/medical-image-analysis',
    image: '/images/projects/medical-segmentation.png',
    achievement: 'Top 15% in ISBI Challenge',
    category: 'Computer Vision',
    featured: true
  },
  
  // Full Stack Projects
  {
    title: 'Climate Portfolio Management Platform',
    description: 'Built a portfolio management dashboard for climate investments with real-time analytics, KPI tracking, and financial modeling tools. Implemented user authentication, role-based access control, and data visualization components.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'D3.js', 'AWS'],
    githubLink: 'https://github.com/enigma-kun/climate-portfolio',
    image: '/images/projects/climate-portfolio.png',
    achievement: '120+ active business users',
    category: 'Full Stack'
  },
  {
    title: 'Supply Chain Emissions Tracker',
    description: 'Developed a full-stack application to track and report Scope 3 emissions across supply chains, with automated data collection, validation, and reporting features to ensure compliance with GHG Protocol standards.',
    technologies: ['TypeScript', 'Express', 'MongoDB', 'React', 'Docker'],
    githubLink: 'https://github.com/enigma-kun/supply-chain-tracker',
    image: '/images/projects/supply-chain.png',
    achievement: 'Reduced reporting time by 60%',
    reversed: true,
    category: 'Full Stack'
  },
  
  // Deep Learning Projects
  {
    title: 'Transformer-Based Text Enhancement',
    description: 'Created a transformer architecture for real-time text enhancement with improved coherence and context retention, achieving 80% improvement in model performance across multiple benchmarks including ROUGE, BLEU, and human evaluation metrics.',
    technologies: ['PyTorch', 'HuggingFace', 'NLP', 'Transformers'],
    githubLink: 'https://github.com/enigma-kun/transformer-enhancement',
    image: '/images/projects/transformer-text.jpg',
    achievement: 'IEEE Conference Publication',
    reversed: true,
    category: 'Deep Learning'
  },
  
  // Computer Vision Projects
  {
    title: 'Automated Emission Monitoring',
    description: 'Developed a computer vision system to monitor industrial emissions using camera feeds, with object detection and tracking capabilities to identify emission sources and quantify emission rates in real-time.',
    technologies: ['TensorFlow', 'OpenCV', 'YOLO', 'Edge Computing'],
    githubLink: 'https://github.com/enigma-kun/emission-monitoring',
    image: '/images/projects/emission-monitoring.jpg',
    achievement: 'IEEE Conference Publication',
    reversed: true,
    category: 'Computer Vision'
  }
];

export const getProjectCategories = (): string[] => {
  const categories = projectsData.map(project => project.category);
  return Array.from(new Set(categories));
};

export const getFeaturedProjects = (): Project[] => {
  return projectsData.filter(project => project.featured);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projectsData.filter(project => project.category === category);
};

export const getAllProjects = (): Project[] => {
  return projectsData;
}; 