import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionContainerProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  id,
  title,
  subtitle,
  children,
  className = '',
  fullWidth = false
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };
  
  return (
    <section
      id={id}
      className={`py-20 ${className}`}
      ref={ref}
    >
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        className={fullWidth ? 'w-full' : 'container mx-auto px-4 md:px-6'}
      >
        <div className="mb-12 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
          >
            {title}
          </motion.h2>
          
          {subtitle && (
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } }
              }}
            >
              {subtitle}
            </motion.p>
          )}
          
          <motion.div 
            className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full"
            variants={{
              hidden: { opacity: 0, width: 0 },
              visible: { opacity: 1, width: 64, transition: { duration: 0.5, delay: 0.2 } }
            }}
          />
        </div>
        
        <div>
          {children}
        </div>
      </motion.div>
    </section>
  );
};

export default SectionContainer;