
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
    <div className="flex flex-wrap justify-center items-center gap-3 p-1 relative z-10">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setActiveCategory('All')}
        className={`px-5 py-2.5 text-sm rounded-full transition-all duration-300 flex items-center gap-2 ${
          activeCategory === 'All' 
            ? 'bg-black text-white shadow-md font-medium' 
            : 'bg-black/5 text-black/70 hover:bg-black/10'
        }`}
      >
        <div className={`p-1 rounded-full ${activeCategory === 'All' ? 'bg-white/20' : 'bg-black/10'}`}>
          <TagIcon className="w-3 h-3" />
        </div>
        All
      </motion.button>
      
      {categories.map(category => {
        const isActive = activeCategory === category;
        return (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 500,
              damping: 30,
              delay: Math.random() * 0.3
            }}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2.5 text-sm rounded-full transition-all duration-300 relative overflow-hidden ${
              isActive
                ? 'bg-black text-white shadow-md font-medium' 
                : 'bg-black/5 text-black/70 hover:bg-black/10'
            }`}
          >
            {isActive && (
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-black to-black/80"
                layoutId="activeCategoryBackground"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{category}</span>
          </motion.button>
        );
      })}
    </div>
  );
};

export default CategoryFilters;
