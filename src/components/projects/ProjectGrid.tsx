
import { motion } from 'framer-motion';
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';
import { getCategoryIcon, getCategoryBackground, getCardLayout } from './CategoryIcon';
import { projectsData } from '@/data/projects';

interface ProjectGridProps {
  category: string;
}

const ProjectGrid = ({ category }: ProjectGridProps) => {
  // Filter projects by category if a specific category is selected
  const filteredProjects = category === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === category);

  return (
    <>
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

      <BentoGrid className="lg:grid-rows-3">
        {filteredProjects.map((project, index) => {
          const Icon = getCategoryIcon(project.category);
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.2 + (index * 0.1),
                ease: [0.25, 0.1, 0.25, 1.0] 
              }}
              whileHover={{ y: -5 }}
              className={getCardLayout(index)}
            >
              <BentoCard
                name={project.title}
                description={project.description.substring(0, 120) + '...'}
                Icon={Icon}
                background={getCategoryBackground(project.category)}
                href={`/projects/${project.id}`}
                cta="View Project"
                className=""
              />
            </motion.div>
          );
        })}
      </BentoGrid>
    </>
  );
};

export default ProjectGrid;
