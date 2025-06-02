'use client';
import { motion } from 'framer-motion';
import { Check, Clock } from 'lucide-react';
import { PricingPlan } from './types';

interface PricingCardProps {
  plan: PricingPlan;
  index: number;
}

export const PricingCard = ({ plan, index }: PricingCardProps) => {
  const { name, price, duration, description, features, icon: Icon, popular, tag } = plan;
  
  return (
    <motion.div
      className={`relative ${popular ? 'lg:scale-105' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.7 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      {/* Badge for all plans */}
      <motion.div 
        className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className={`
          px-6 py-2 rounded-full text-sm font-semibold shadow-lg
          ${popular 
            ? 'bg-gradient-to-r from-primary to-secondary text-white' 
            : 'bg-white text-gray-700 border border-gray-200'
          }
        `}>
          {tag}
        </div>
      </motion.div>
      
      <div className={`
        h-full bg-white rounded-2xl border transition-all duration-300
        ${popular 
          ? 'border-primary/30 shadow-xl shadow-primary/10 ring-2 ring-primary/10' 
          : 'border-gray-200 shadow-lg hover:border-primary/20'
        }
      `}>
        {/* Header */}
        <div className="p-8 text-center border-b border-gray-100">
          <div className={`
            inline-flex p-4 rounded-xl mb-4
            ${popular 
              ? 'bg-gradient-to-br from-primary to-secondary' 
              : 'bg-gray-600'
            }
          `}>
            <Icon className="h-8 w-8 text-white" />
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
          
          <div className="mb-4">
            <div className="flex items-baseline justify-center mb-2">
              <span className={`
                text-3xl font-bold
                ${popular ? 'gradient-text' : 'text-gray-900'}
              `}>
                {price}
              </span>
              <span className="text-gray-500 ml-1">₽</span>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Clock className="h-4 w-4" />
              <span className="text-sm">{duration}</span>
            </div>
          </div>
          
          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>
        
        {/* Features */}
        <div className="p-8">
          <ul className="space-y-4">
            {features.map((feature, i) => (
              <motion.li 
                key={i}
                className="flex items-start text-sm text-gray-700"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + i * 0.08 }}
              >
                <div className={`
                  flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5
                  ${popular 
                    ? 'bg-gradient-to-br from-primary to-secondary' 
                    : 'bg-gray-600'
                  }
                `}>
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="leading-relaxed">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};