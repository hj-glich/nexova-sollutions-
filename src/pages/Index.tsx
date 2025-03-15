
import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = "NexOva | Creative Web Solutions";
    
    // Simple animation sequence for initial load
    const body = document.body;
    body.style.opacity = '0';
    
    setTimeout(() => {
      body.style.transition = 'opacity 0.8s ease-out';
      body.style.opacity = '1';
    }, 100);
    
    return () => {
      body.style.opacity = '';
      body.style.transition = '';
    };
  }, []);

  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
