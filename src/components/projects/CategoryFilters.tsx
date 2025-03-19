
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
      <motion.button 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`rounded-full ${activeCategory === 'All' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'} px-4 py-1 text-sm`}
        onClick={() => setActiveCategory('All')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        All
      </motion.button>
      
      {categories.map((category, index) => (
        <motion.button 
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 0.1 + (index * 0.05) // Staggered animation
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`rounded-full ${activeCategory === category ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'} px-4 py-1 text-sm`}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default CategoryFilters;
