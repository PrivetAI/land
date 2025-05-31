import { motion } from 'framer-motion';
import { BlogPost } from '@/lib/types';
import { BlogCard } from './BlogCard';
import { useState } from 'react';

interface BlogListProps {
  posts: BlogPost[];
  showFilters?: boolean;
}

export const BlogList = ({ posts, showFilters = true }: BlogListProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const categories = ['all', ...Array.from(new Set(posts.map(post => post.category)))];
  
  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div className="space-y-8">
      {showFilters && (
        <motion.div 
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? 'btn-primary'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 px-4 py-2 rounded-full body font-medium transition-colors'
              }
            >
              {category === 'all' ? 'Все статьи' : category}
            </button>
          ))}
        </motion.div>
      )}
      
      {filteredPosts.length === 0 ? (
        <motion.div 
          className="text-center py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="body text-gray-500">Статьи не найдены</p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <BlogCard 
              key={post.slug} 
              post={post} 
              index={index}
            />
          ))}
        </div>
      )}
    </div>
  );
};