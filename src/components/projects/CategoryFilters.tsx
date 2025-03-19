
import { motion } from 'framer-motion';

interface CategoryFiltersProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  categories: string[];
}

const CategoryFilters = ({ 
  activeCategory, 
  setActiveCategory,
  categories
}: CategoryFiltersProps) => {
  return (
    <motion.div
      className="flex gap-2 flex-wrap"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <button 
        className={`rounded-full ${activeCategory === 'All' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'} px-4 py-1 text-sm`}
        onClick={() => setActiveCategory('All')}
      >
        All
      </button>
      
      {categories.map((category) => (
        <button 
          key={category}
          className={`rounded-full ${activeCategory === category ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'} px-4 py-1 text-sm`}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </motion.div>
  );
};

export default CategoryFilters;
