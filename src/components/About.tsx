import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const funFacts = [
    { emoji: '⚙️', title: 'Coding Journey', description: 'Started coding at age 12, now building AI-powered solutions' },
    { emoji: '🧠', title: 'AI Enthusiast', description: 'GPT-4 power user, building the future with machine learning' },
    { emoji: '🌍', title: 'Global Impact', description: 'Passionate about solving climate and sustainability challenges' },
    { emoji: '🚀', title: 'Innovation', description: 'Love creating scalable, impactful applications that matter' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate B.Tech AI/ML student at VIT with a deep love for creating innovative solutions 
            that bridge technology and real-world impact. My journey spans full-stack development, 
            artificial intelligence, and climate technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {funFacts.map((fact, index) => (
            <motion.div
              key={index}
              className="group p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="text-4xl mb-4 inline-block"
                animate={{
                  rotateY: 0
                }}
                whileHover={{ 
                  rotateY: 360,
                  scale: 1.2,
                  transition: { duration: 0.6, ease: "easeInOut" }
                }}
              >
                {fact.emoji}
              </motion.div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                {fact.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {fact.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="inline-block p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Ready to Build the Future?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always excited to collaborate on projects that combine cutting-edge technology 
              with meaningful impact. Let's create something amazing together!
            </p>
            <motion.button
  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-lg"
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => {
    const el = document.getElementById("contact");
    if (el) {
      const yOffset = -40; // adjust this to scroll slightly above
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }}
>
  Get In Touch
</motion.button>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;