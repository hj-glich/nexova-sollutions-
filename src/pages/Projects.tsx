
import { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import CategoryFilters from '@/components/projects/CategoryFilters';
import ProjectGrid from '@/components/projects/ProjectGrid';
import { projectsData } from '@/data/projects';
import { motion } from 'framer-motion';
import LoaderOne from '@/components/ui/loader-one';
import HeroSection from '@/components/HeroSection';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  
  // Extract unique categories from projects
  const uniqueCategories = Array.from(
    new Set(projectsData.map(project => project.category))
  );

  const heroConfig = {
    title: "Projects",
    taglinePrefix: "Transforming ideas into",
    taglineEmphasis: "exceptional digital experiences",
    scrollText: "Explore Our Work",
    rightText: "Browse Categories",
    scrollElementId: "projects-grid"
  };

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
        <HeroSection
          title={heroConfig.title}
          taglinePrefix={heroConfig.taglinePrefix}
          taglineEmphasis={heroConfig.taglineEmphasis}
          scrollText={heroConfig.scrollText}
          rightText={heroConfig.rightText}
          scrollElementId={heroConfig.scrollElementId}
        />
        
        <motion.div 
          className="px-6 md:px-12 py-20 relative"
          id="projects-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGZpbGwtb3BhY2l0eT0iLjEiIGZpbGw9IiMwMDAiIGN4PSIyMCIgY3k9IjIwIiByPSIyIi8+PHBhdGggc3Ryb2tlLW9wYWNpdHk9Ii4wOCIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9Ii41IiBkPSJNMCAwaDQwdjQwSDB6Ii8+PC9nPjwvc3ZnPg==')] opacity-30" />
          
          <div className="max-w-7xl mx-auto relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-16 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-br from-black to-black/70 bg-clip-text text-transparent">Browse Our Projects</h2>
              <p className="text-black/60 max-w-lg mx-auto">Discover our diverse portfolio of work across various industries and technologies.</p>
            </motion.div>
            
            <div className="flex items-center justify-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="rounded-xl bg-white/50 p-2 backdrop-blur-sm shadow-sm border border-black/5"
              >
                <CategoryFilters 
                  activeCategory={activeCategory}
                  setActiveCategory={setActiveCategory}
                  categories={uniqueCategories}
                />
              </motion.div>
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
