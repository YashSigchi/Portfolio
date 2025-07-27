import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/experience';
import { CalendarIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-purple-600 dark:from-white dark:to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My journey through AI, full-stack development, and climate technology
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 transform md:-translate-x-0.5"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform -translate-x-2 md:-translate-x-2 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-ping opacity-30"></div>
              </div>

              {/* Content card */}
              <motion.div
                className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-12 h-12 rounded-lg object-cover mr-4 shadow-md"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                        {exp.role}
                      </h3>
                      <div className="flex items-center text-blue-600 dark:text-blue-400">
                        <BuildingOfficeIcon className="w-4 h-4 mr-1" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center mb-4 text-gray-500 dark:text-gray-400">
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    <span>{exp.duration}</span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  {exp.metrics && (
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                      <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">
                        Key Achievements:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {exp.metrics.map((metric, metricIndex) => (
                          <motion.div
                            key={metricIndex}
                            className="flex items-center text-green-600 dark:text-green-400 text-sm"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: metricIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <span className="mr-2">✓</span>
                            {metric}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;