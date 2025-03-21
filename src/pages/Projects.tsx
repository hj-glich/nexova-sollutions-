
import { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ProjectHero from '@/components/projects/ProjectHero';
import CategoryFilters from '@/components/projects/CategoryFilters';
import { projectsData } from '@/data/projects';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BentoGrid, BentoItem } from '@/components/ui/bento-grid';
import { CheckCircle, Globe, TrendingUp, Video } from 'lucide-react';

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

  // Convert projects data to BentoGrid format
  const getBentoItems = (): BentoItem[] => {
    const filteredProjects = activeCategory === 'All' 
      ? projectsData 
      : projectsData.filter(project => project.category === category);
    
    return filteredProjects.map((project, index) => {
      // Determine icon based on category
      let icon;
      switch (project.category) {
        case 'E-commerce':
          return <Globe className="w-4 h-4 text-blue-500" />;
        case 'Health & Wellness':
          return <CheckCircle className="w-4 h-4 text-emerald-500" />;
        case 'Marketplace':
          return <Video className="w-4 h-4 text-purple-500" />;
        default:
          return <TrendingUp className="w-4 h-4 text-sky-500" />;
      }
      
      // Set layout based on index
      const colSpan = index % 3 === 0 ? 2 : 1;
      const hasPersistentHover = index % 4 === 0;

      return {
        title: project.title,
        description: project.description.substring(0, 120) + '...',
        icon: icon,
        status: project.status || 'Active',
        tags: [project.category],
        meta: `Project #${project.id}`,
        href: `/projects/${project.id}`,
        colSpan: colSpan,
        hasPersistentHover: hasPersistentHover,
      };
    });
  };

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
    <div className="min-h-screen bg-white">
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
            
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Featured Work</h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Browse our latest work showcasing our expertise in design and development.
              </p>
            </motion.div>
            
            <BentoGrid items={getBentoItems()} className="p-0" />
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
