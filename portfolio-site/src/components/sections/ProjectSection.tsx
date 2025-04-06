import SectionContainer from '../ui/SectionContainer';
import ProjectCard from '../ui/ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'RAG-powered Academic Assistant',
      description: 'A comprehensive retrieval-augmented generation system that combines vector databases with fine-tuned LLMs, achieving 78% improvement in answer accuracy and reduced hallucinations by 65% for academic information retrieval tasks across multiple domains.',
      technologies: ['LangChain', 'FAISS', 'LLMs', 'Sentence-Transformers', 'Streamlit'],
      githubLink: 'https://github.com/ENIGMA-KUN/RAG-system',
      image: '/images/projects/rag-system.jpg',
      achievement: 'BLEU score of 0.72 and ROUGE-L score of 0.68'
    },
    {
      title: 'Emissions Reduction Modeling Platform',
      description: 'Developed a comprehensive climate scenario analysis engine that enables 30-50% reduction modeling by 2030. Created financial impact analysis tools calculating NPV, ROI, payback periods, and marginal abatement costs with statistical forecasting capabilities.',
      technologies: ['Python', 'Pandas', 'AWS', 'React', 'D3.js', 'MongoDB'],
      demoLink: 'https://emitrix.io',
      image: '/images/projects/emissions-platform.jpg',
      achievement: 'Secured $100K seed funding',
      reversed: true
    },
    {
      title: 'LLM Capability Analysis Framework',
      description: 'Developed a first-of-its-kind framework quantifying emergent capability thresholds across LLM architectures (7B-72B), achieving 87% prediction accuracy using novel E-manifold metrics that uncovered previously unobserved scaling laws for reasoning tasks.',
      technologies: ['PyTorch', 'HuggingFace', 'Transformers', 'CUDA'],
      githubLink: 'https://github.com/enigma-kun/llm-capability-analysis',
      image: '/images/projects/llm-analysis.jpg',
      achievement: '42% reduced computation cost'
    },
    {
      title: 'Carbon Credit Blockchain System',
      description: 'Implemented Ethereum smart contracts with IPFS storage for transparent carbon credit verification, reducing verification time by 40% through automated data management. Integrated with IoT emission monitoring using Raspberry Pi and MQ-135 sensors.',
      technologies: ['Ethereum', 'IPFS', 'React', 'Python', 'IoT'],
      githubLink: 'https://github.com/enigma-kun/carbon-credit',
      image: '/images/projects/carbon-blockchain.jpg',
      achievement: 'EY Techathon 2 Finalist',
      reversed: true
    },
    {
      title: 'Medical Image Segmentation',
      description: 'Processed over 3,000 medical images with U-Net architecture and transformer enhancements, achieving top 15% ranking in ISBI Challenge. Increased model accuracy from 82% to 92% via adaptive augmentation and hyperparameter tuning.',
      technologies: ['PyTorch', 'U-Net', 'Transformers', 'MONAI'],
      githubLink: 'https://github.com/enigma-kun/medical-image-analysis',
      image: '/images/projects/medical-segmentation.jpg',
      achievement: 'Top 15% in ISBI Challenge'
    }
  ];

  return (
    <SectionContainer
      id="projects"
      title="Featured Projects"
      subtitle="Innovative solutions across AI, machine learning, and software development"
    >
      <div className="py-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            {...project}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default ProjectsSection;