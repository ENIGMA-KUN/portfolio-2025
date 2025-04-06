import { motion } from 'framer-motion';

interface SkillTagProps {
  name: string;
  level?: number; // 0-100
  category?: string;
  index?: number;
}

const SkillTag: React.FC<SkillTagProps> = ({ 
  name, 
  level = 85, 
  category = 'default',
  index = 0 
}) => {
  // Generate a background color based on the category
  const getBgColor = () => {
    switch (category) {
      case 'ai':
        return 'from-blue-500 to-indigo-600';
      case 'data':
        return 'from-teal-500 to-emerald-600';
      case 'frontend':
        return 'from-orange-400 to-pink-600';
      case 'backend':
        return 'from-purple-500 to-indigo-600';
      case 'devops':
        return 'from-gray-600 to-gray-900';
      default:
        return 'from-primary to-secondary';
    }
  };
  
  return (
    <motion.div
      className="inline-block m-1"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <div 
        className={`relative px-3 py-2 rounded-lg bg-gradient-to-r ${getBgColor()} text-white shadow-sm`}
      >
        <div className="flex items-center justify-between">
          <span className="font-medium text-sm">{name}</span>
          
          {level > 0 && (
            <div className="ml-2 w-12 h-1.5 bg-white/20 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-white rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${level}%` }}
                transition={{ duration: 1, delay: 0.1 + (index * 0.05) }}
              />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillTag;