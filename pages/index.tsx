import type { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import ProjectsSection from '../components/sections/ProjectSection';
import ResearchSection from '../components/sections/ResearchSection';
import ContactSection from '../components/sections/ContactSection';

const Home: NextPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Main Content */}
      <div className="bg-white dark:bg-dark">
        <AboutSection />
        <div className="bg-gray-50 dark:bg-gray-900">
          <ExperienceSection />
        </div>
        <ProjectsSection />
        <div className="bg-gray-50 dark:bg-gray-900">
          <ResearchSection />
        </div>
        <ContactSection />
      </div>
    </Layout>
  );
};

export default Home;