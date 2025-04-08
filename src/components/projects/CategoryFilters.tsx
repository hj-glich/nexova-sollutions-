
import { motion } from 'framer-motion';
import { TagIcon } from 'lucide-react';

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
    <div className="flex flex-wrap justify-center items-center gap-3">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setActiveCategory('All')}
        className={`px-5 py-2.5 text-sm rounded-full transition-all duration-300 flex items-center gap-2 ${
          activeCategory === 'All' 
            ? 'bg-black text-white shadow-md' 
            : 'bg-black/5 text-black/70 hover:bg-black/10'
        }`}
      >
        <TagIcon className="w-3.5 h-3.5" />
        All
      </motion.button>
      
      {categories.map(category => (
        <motion.button
          key={category}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveCategory(category)}
          className={`px-5 py-2.5 text-sm rounded-full transition-all duration-300 ${
            activeCategory === category 
              ? 'bg-black text-white shadow-md' 
              : 'bg-black/5 text-black/70 hover:bg-black/10'
          }`}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
};

export default CategoryFilters;
