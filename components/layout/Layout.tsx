import React, { useEffect } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import AiAssistant from '../ui/AiAssistant';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

// Performance optimization for scrolling
const useScrollOptimization = () => {
  useEffect(() => {
    // Add a passive scroll listener to improve performance
    const scrollOptions = { passive: true };
    window.addEventListener('scroll', () => {}, scrollOptions);
    
    // Use requestAnimationFrame to optimize animations during scroll
    let scheduledAnimationFrame = false;
    
    const scrollHandler = () => {
      if (scheduledAnimationFrame) {
        return;
      }
      
      scheduledAnimationFrame = true;
      
      requestAnimationFrame(() => {
        // Any scroll-based animations would go here
        scheduledAnimationFrame = false;
      });
    };
    
    window.addEventListener('scroll', scrollHandler, scrollOptions);
    
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);
};

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = 'Shubham Chakraborty | AI/ML Engineer & Data Scientist',
  description = 'Portfolio of Shubham Chakraborty, an AI/ML Engineer, Data Scientist, and Entrepreneur specializing in machine learning, LLMs, and climate technology.'
}) => {
  // Use the scroll optimization hook
  useScrollOptimization();
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shubham-chakraborty.crown-monkey.com" />
        <meta property="og:image" content="https://shubham-chakraborty.crown-monkey.com/images/og-image.jpg" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://shubham-chakraborty.crown-monkey.com/images/og-image.jpg" />
      </Head>
      
      <div className="flex flex-col min-h-screen blueprint-bg">
        <Header />
        
        <main className="flex-grow pt-20">
          {children}
        </main>
        
        <Footer />
        
        {/* AI Assistant Chat Widget */}
        <AiAssistant />
      </div>
    </>
  );
};

export default Layout;