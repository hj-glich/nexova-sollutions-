
import { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ProjectHero from '@/components/projects/ProjectHero';
import ProjectGrid from '@/components/projects/ProjectGrid';
import CategoryFilters from '@/components/projects/CategoryFilters';
import { projectsData } from '@/data/projects';
import { motion, useScroll, useTransform } from 'framer-motion';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { scrollY } = useScroll();
  
  // Parallax transform values
  const titleY = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  
  // Extract unique categories from projects
  const uniqueCategories = Array.from(
    new Set(projectsData.map(project => project.category))
  );

  // Handle smooth scrolling when URL has hash
  useEffect(() => {
    if (window.location.hash) {
      const element = document.getElementById(window.location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <ProjectHero />
        <motion.div 
          className="px-6 md:px-8 py-16" 
          id="projects-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="flex items-center justify-between mb-8"
              style={{ y: titleY }}
            >
              <CategoryFilters 
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                categories={uniqueCategories}
              />
            </motion.div>
            
            <ProjectGrid category={activeCategory} />
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
