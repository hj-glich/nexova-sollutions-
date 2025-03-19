
import { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ProjectHero from '@/components/projects/ProjectHero';
import ProjectGrid from '@/components/projects/ProjectGrid';
import CategoryFilters from '@/components/projects/CategoryFilters';
import { projectsData } from '@/data/projects';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Extract unique categories from projects
  const uniqueCategories = Array.from(
    new Set(projectsData.map(project => project.category))
  );

  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <ProjectHero />
        <div className="px-6 md:px-8 py-16" id="projects-grid">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <CategoryFilters 
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                categories={uniqueCategories}
              />
            </div>
            
            <ProjectGrid category={activeCategory} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
