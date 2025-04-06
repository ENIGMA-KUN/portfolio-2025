import SectionContainer from '../ui/SectionContainer';
import ContactForm from '../ui/ContactForm';
import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <SectionContainer
      id="contact"
      title="Get In Touch"
      subtitle="Let's discuss how we can work together on your next project"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 md:p-10 border border-gray-100 dark:border-gray-800"
      >
        <ContactForm />
      </motion.div>
    </SectionContainer>
  );
};

export default ContactSection;