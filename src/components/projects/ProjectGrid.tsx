
import { motion } from 'framer-motion';
import { BentoItem, BentoGrid } from '@/components/ui/bento-grid';
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

  // Convert projects to BentoItem format
  const bentoItems: BentoItem[] = filteredProjects.map((project, index) => {
    const Icon = getCategoryIcon(project.category);
    return {
      title: project.title,
      description: project.description.substring(0, 120) + '...',
      icon: <Icon className={`w-4 h-4 ${
        project.category === 'E-commerce' ? 'text-blue-500' :
        project.category === 'Health & Wellness' ? 'text-emerald-500' :
        project.category === 'Marketplace' ? 'text-purple-500' :
        'text-sky-500'
      }`} />,
      status: 'Active', // Default status since it doesn't exist in projectsData
      tags: [project.category],
      meta: `Project #${project.id}`,
      cta: "View Project",
      colSpan: index % 3 === 0 ? 2 : 1,
      hasPersistentHover: index % 4 === 0,
      href: `/projects/${project.id}`
    };
  });

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

      <BentoGrid items={bentoItems} className="lg:grid-rows-3" />
    </>
  );
};

export default ProjectGrid;
