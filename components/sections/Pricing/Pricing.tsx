'use client';
import { PricingCard } from './PricingCard';
import { pricingPlans } from './data';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const benefits = ['GPT чат-боты', 'Умный анализ данных', 'Автоматизация задач'];

export const PricingHeader = () => (
  <motion.div 
    className="text-center mb-16"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
      <Star className="h-4 w-4 text-primary" />
      <span className="text-sm font-medium text-primary">AI-автоматизация бизнеса</span>
    </div>
    
    <h2 className="text-4xl font-bold text-gray-900 mb-4">
      AI-решения и <span className="gradient-text">автоматизация</span>
    </h2>
    
    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
      Внедряем ИИ для решения реальных задач вашего бизнеса.<br />
      Умные чат-боты • Анализ данных • Автоматизация процессов
    </p>
    
    <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
      {benefits.map((benefit, i) => (
        <motion.div 
          key={benefit}
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >
          <Check className="h-4 w-4 text-primary" />
          <span>{benefit}</span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export const Pricing = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PricingHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>
        
      </div>
    </section>
  );
};