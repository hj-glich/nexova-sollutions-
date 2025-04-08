
import { motion } from 'framer-motion';
import { BentoItem, BentoGrid } from '@/components/ui/bento-grid';
import { getCategoryIcon, getCategoryBackground } from './CategoryIcon';
import { projectsData } from '@/data/projects';

interface ProjectGridProps {
  category: string;
}

const ProjectGrid = ({ category }: ProjectGridProps) => {
  // Filter projects by category if a specific category is selected
  const filteredProjects = category === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === category);

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Animation variants for items
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

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
        project.category === 'Sustainability' ? 'text-green-500' :
        project.category === 'Transportation' ? 'text-sky-500' :
        project.category === 'Finance' ? 'text-amber-500' :
        'text-indigo-500'
      }`} />,
      status: 'Active',
      tags: [project.category],
      meta: `Project #${project.id}`,
      cta: "View Project",
      colSpan: index % 3 === 0 ? 2 : 1,
      hasPersistentHover: index % 4 === 0,
      href: `/projects/${project.id}`
    };
  });

  // Show message if no projects match the category
  if (bentoItems.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-16"
      >
        <h3 className="text-2xl font-medium text-black/70 mb-4">No projects found</h3>
        <p className="text-black/50">Try selecting a different category.</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-16"
    >
      {filteredProjects.length > 0 && (
        <motion.div variants={itemVariants}>
          <BentoGrid items={bentoItems} className="lg:grid-rows-3" />
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProjectGrid;
