
import { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import CategoryFilters from '@/components/projects/CategoryFilters';
import ProjectGrid from '@/components/projects/ProjectGrid';
import { projectsData } from '@/data/projects';
import { motion } from 'framer-motion';
import LoaderOne from '@/components/ui/loader-one';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  
  // Extract unique categories from projects
  const uniqueCategories = Array.from(
    new Set(projectsData.map(project => project.category))
  );

  useEffect(() => {
    // Simulate loading for 1 second
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#e5e5e5] flex items-center justify-center z-50">
        <LoaderOne />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#e5e5e5]">
      <NavBar />
      <main>
        <div className="h-[40vh] flex items-center justify-center bg-[#e5e5e5]">
          <h1 className="text-7xl md:text-8xl font-display font-bold">Projects</h1>
        </div>
        
        <motion.div 
          className="px-6 md:px-8 py-16" 
          id="projects-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-center mb-12">
              <CategoryFilters 
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                categories={uniqueCategories}
              />
            </div>
            
            <ProjectGrid category={activeCategory} />
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
