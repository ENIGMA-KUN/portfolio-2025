import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  // Handle smooth scrolling for anchor links
  useEffect(() => {
    const handleHashChange = (url: string) => {
      const hash = url.split('#')[1];
      if (hash) {
        // Wait for DOM to update
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }, 0);
      }
    };

    // Handle initial load with hash
    if (router.asPath.includes('#')) {
      handleHashChange(router.asPath);
    }

    // Listen for hash changes
    router.events.on('hashChangeComplete', handleHashChange);
    return () => {
      router.events.off('hashChangeComplete', handleHashChange);
    };
  }, [router]);
  
  return <Component {...pageProps} />;
}

export default MyApp;