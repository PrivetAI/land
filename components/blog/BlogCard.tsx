import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from '@/lib/types';
import Link from 'next/link';
import { designSystem, createClassName } from '@/components/ui/design-system';

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export const BlogCard = ({ post, index = 0 }: BlogCardProps) => {
  const cardConfig = designSystem.components.card;
  
  return (
    <motion.article
      className="card group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="space-y-4">
          <div className="flex items-center justify-between body text-gray-500">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{post.publishedAt.toLocaleDateString('ru-RU')}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime} мин</span>
              </div>
            </div>
            <span className="bg-gradient-primary text-white px-2 py-1 rounded-full text-xs">
              {post.category}
            </span>
          </div>
          
          <h3 className="heading-md text-gray-900 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          
          <p className="body text-gray-600 line-clamp-3">
            {post.excerpt}
          </p>
          
          <div className="flex items-center text-primary body font-medium group-hover:text-accent transition-colors">
            <span>Читать далее</span>
            <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
};