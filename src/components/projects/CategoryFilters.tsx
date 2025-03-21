
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
    <div className="flex flex-wrap justify-center items-center gap-3">
      <button
        onClick={() => setActiveCategory('All')}
        className={`px-4 py-2 text-sm rounded-full transition-colors ${
          activeCategory === 'All' 
            ? 'bg-black text-white' 
            : 'bg-black/5 text-black/70 hover:bg-black/10'
        }`}
      >
        All
      </button>
      
      {categories.map(category => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-4 py-2 text-sm rounded-full transition-colors ${
            activeCategory === category 
              ? 'bg-black text-white' 
              : 'bg-black/5 text-black/70 hover:bg-black/10'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilters;
