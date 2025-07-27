import React from 'react';
import { motion } from 'framer-motion';
import { stats } from '../data/stats';

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-red-600 dark:from-white dark:to-red-400 bg-clip-text text-transparent">
            Achievements
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Numbers that tell my story
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.05 }}
            >
              <div className="text-4xl mb-3">
                {stat.icon}
              </div>
              
              <motion.div
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {stat.label}
              </motion.div>
              
              <div className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                {stat.value}
              </div>
              
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-block p-8 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl backdrop-blur-sm border border-blue-500/10">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Excellence in Every Metric
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              These achievements reflect my dedication to continuous learning, 
              academic excellence, and professional growth in the field of technology and AI.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;