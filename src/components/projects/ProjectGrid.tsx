
import { motion } from 'framer-motion';
import { BentoItem, BentoGrid } from '@/components/ui/bento-grid';
import { getCategoryIcon } from './CategoryIcon';
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
      status: 'Active',
      tags: [project.category],
      meta: `Project #${project.id}`,
      cta: "View Project",
      colSpan: index % 3 === 0 ? 2 : 1,
      hasPersistentHover: index % 4 === 0,
      href: `/projects/${project.id}`
    };
  });

  return (
    <div className="space-y-16">
      <BentoGrid items={bentoItems} className="lg:grid-rows-3" />
    </div>
  );
};

export default ProjectGrid;
