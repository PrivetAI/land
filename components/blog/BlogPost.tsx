'use client';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { BlogPost as BlogPostType } from '@/lib/types';
import Link from 'next/link';

interface BlogPostProps {
  post: BlogPostType;
}

export const BlogPost = ({ post }: BlogPostProps) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <article className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <Link 
          href="/blog"
          className="inline-flex items-center text-primary hover:text-accent transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Вернуться к блогу
        </Link>
        
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4 body text-gray-500">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{post.publishedAt.toLocaleDateString('ru-RU')}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime} мин</span>
            </div>
            <span className="bg-gradient-primary text-white px-2 py-1 rounded-full text-xs">
              {post.category}
            </span>
          </div>
          
          <button
            onClick={handleShare}
            className="flex items-center space-x-1 text-gray-500 hover:text-primary transition-colors"
          >
            <Share2 className="h-4 w-4" />
            <span className="body">Поделиться</span>
          </button>
        </div>
        
        <h1 className="heading-xl text-gray-900 mb-4">
          {post.title}
        </h1>
        
        <p className="body-lg text-gray-600 mb-8">
          {post.excerpt}
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-12 pt-8 border-t border-gray-200"
      >
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 text-center">
          <h3 className="heading-md text-gray-900 mb-2">
            Понравилась статья?
          </h3>
          <p className="body text-gray-600 mb-4">
            Обсудим, как применить эти идеи в вашем бизнесе
          </p>
          <Link href="/#contact" className="btn-primary">
            Связаться с нами
          </Link>
        </div>
      </motion.div>
    </article>
  );
};