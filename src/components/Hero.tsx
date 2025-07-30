import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const floatingVariants: Variants = {
  animate: {
    y: [-20, 20, -20],
    x: [-10, 10, -10],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const orbitalVariants: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 30,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

const Hero: React.FC = () => {
  return (
    <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      >      
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
        
        {/* Additional gradient orbs */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-400/15 to-blue-400/15 rounded-full blur-2xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Orbital rings */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 border border-blue-200/20 dark:border-blue-400/10 rounded-full -translate-x-1/2 -translate-y-1/2"
          variants={orbitalVariants}
          animate="animate"
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[500px] h-[500px] border border-purple-200/15 dark:border-purple-400/8 rounded-full -translate-x-1/2 -translate-y-1/2"
          variants={orbitalVariants}
          animate="animate"
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <motion.div
        className="container mx-auto px-6 py-20 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Floating tech icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* React */}
          <motion.div className="absolute w-12 h-12 opacity-30" style={{ top: '5vh', left: '10vw' }}
            animate={{ x: ['0vw', '50vw', '-40vw', '60vw', '0vw'], y: ['0vh', '-40vh', '30vh', '-20vh', '0vh'], rotate: [0, 180, 360, 540, 720], scale: [1, 1.2, 0.8, 1.3, 1] }}
            transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}>
            <img src="/icons/react.png" alt="React" className="w-full h-full object-contain filter drop-shadow-lg" />
          </motion.div>

          {/* Node.js */}
          <motion.div className="absolute w-12 h-12 opacity-30" style={{ top: '15vh', right: '10vw' }}
            animate={{ x: ['0vw', '-60vw', '30vw', '-40vw', '0vw'], y: ['0vh', '50vh', '-30vh', '40vh', '0vh'], rotate: [0, -90, -180, -270, -360], scale: [1, 1.1, 0.9, 1.2, 1] }}
            transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}>
            <img src="/icons/node.png" alt="Node.js" className="w-full h-full object-contain filter drop-shadow-lg" />
          </motion.div>

          {/* Python */}
          <motion.div className="absolute w-12 h-12 opacity-30" style={{ bottom: '30vh', left: '8vw' }}
            animate={{ x: ['0vw', '70vw', '-50vw', '60vw', '0vw'], y: ['0vh', '-50vh', '20vh', '-40vh', '0vh'], rotate: [0, 270, 180, 90, 0], scale: [1, 1.4, 0.7, 1.1, 1] }}
            transition={{ duration: 38, repeat: Infinity, ease: "easeInOut" }}>
            <img src="/icons/python.png" alt="Python" className="w-full h-full object-contain filter drop-shadow-lg" />
          </motion.div>

          {/* JavaScript */}
          <motion.div className="absolute w-12 h-12 opacity-30" style={{ bottom: '10vh', right: '8vw' }}
            animate={{ x: ['0vw', '-50vw', '-30vw', '-70vw', '0vw'], y: ['0vh', '-40vh', '10vh', '-50vh', '0vh'], rotate: [0, 120, 240, 360], scale: [1, 1.3, 0.9, 1.2, 1] }}
            transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}>
            <img src="/icons/js.png" alt="JavaScript" className="w-full h-full object-contain filter drop-shadow-lg" />
          </motion.div>

          {/* TypeScript */}
          <motion.div className="absolute w-10 h-10 opacity-30" style={{ top: '20vh', left: '20vw' }}
            animate={{ x: ['0vw', '60vw', '-30vw', '70vw', '0vw'], y: ['0vh', '30vh', '-20vh', '-50vh', '0vh'], scale: [1, 1.4, 1, 0.7, 1] }}
            transition={{ duration: 42, repeat: Infinity, ease: "easeInOut" }}>
            <img src="/icons/type.png" alt="TypeScript" className="w-full h-full object-contain filter drop-shadow-lg" />
          </motion.div>

          {/* MongoDB */}
          <motion.div className="absolute w-10 h-10 opacity-30" style={{ top: '30vh', right: '30vw' }}
            animate={{ x: ['0vw', '-50vw', '20vw', '-60vw', '0vw'], y: ['0vh', '40vh', '-30vh', '50vh', '0vh'], rotate: [0, 450, 180, 720, 0], scale: [1, 1.2, 0.8, 1.3, 1] }}
            transition={{ duration: 45, repeat: Infinity, ease: "easeInOut"}}>
            <img src="/icons/mongo.png" alt="MongoDB" className="w-full h-full object-contain filter drop-shadow-lg" />
          </motion.div>

          {/* PostgreSQL */}
          <motion.div className="absolute w-10 h-10 opacity-30" style={{ bottom: '30vh', left: '30vw' }}
            animate={{ x: ['0vw', '60vw', '10vw', '80vw', '0vw'], y: ['0vh', '-40vh', '-50vh', '-30vh', '0vh'], scale: [1, 0.9, 1.2, 1.1, 1] }}
            transition={{ duration: 41, repeat: Infinity, ease: "easeInOut" }}>
            <img src="/icons/postre.png" alt="PostgreSQL" className="w-full h-full object-contain filter drop-shadow-lg" />
          </motion.div>

          {/* AWS */}
          <motion.div className="absolute w-10 h-10 opacity-30" style={{ top: '50vh', left: '5vw' }}
            animate={{ x: ['0vw', '80vw', '40vw', '100vw', '0vw'], y: ['0vh', '-50vh', '25vh', '-40vh', '0vh'], rotate: [0, -180, -360], scale: [1, 1.3, 0.7, 1.1, 1] }}
            transition={{ duration: 44, repeat: Infinity, ease: "easeInOut"}}>
            <img src="/icons/aws.png" alt="AWS" className="w-full h-full object-contain filter drop-shadow-lg" />
          </motion.div>

          {/* Git */}
          <motion.div className="absolute w-10 h-10 opacity-30" style={{ bottom: '50vh', right: '5vw' }}
            animate={{ x: ['0vw', '-70vw', '-35vw', '-90vw', '0vw'], y: ['0vh', '40vh', '60vh', '30vh', '0vh'], scale: [1, 1.2, 0.8, 1.4, 1] }}
            transition={{ duration: 39, repeat: Infinity, ease: "easeInOut"}}>
            <img src="/icons/github.png" alt="Git" className="w-full h-full object-contain filter drop-shadow-lg" />
          </motion.div>

          {/* Docker (postman icon used) */}
          <motion.div className="absolute w-10 h-10 opacity-30" style={{ top: '10vh', left: '50vw' }}
            animate={{ x: ['0vw', '-40vw', '40vw', '-70vw', '0vw'], y: ['0vh', '60vh', '30vh', '80vh', '0vh'], rotate: [0, 90, 180, 270, 360] }}
            transition={{ duration: 43, repeat: Infinity, ease: "easeInOut" }}>
            <img src="/icons/postman.png" alt="Docker" className="w-full h-full object-contain filter drop-shadow-lg" />
          </motion.div>

          {/* Next.js */}
          <motion.div className="absolute w-10 h-10 opacity-30" style={{ bottom: '5vh', left: '50vw' }}
            animate={{ x: ['0vw', '60vw', '-40vw', '90vw', '0vw'], y: ['0vh', '-80vh', '-40vh', '-100vh', '0vh'], scale: [1, 0.8, 1.3, 0.9, 1] }}
            transition={{ duration: 36, repeat: Infinity, ease: "easeInOut" }}>
            <img src="/icons/nextjs.png" alt="Next.js" className="w-full h-full object-contain filter drop-shadow-lg" />
          </motion.div>

          {/* GraphQL */}
          <motion.div className="absolute w-10 h-10 opacity-30" style={{ top: '65vh', left: '10vw' }}
            animate={{ x: ['0vw', '70vw', '35vw', '100vw', '0vw'], y: ['0vh', '-60vh', '30vh', '-80vh', '0vh'], rotate: [0, 180, 90, 270, 0] }}
            transition={{ duration: 41, repeat: Infinity, ease: "easeInOut" }}>
            <img src="/icons/graph.png" alt="GraphQL" className="w-full h-full object-contain filter drop-shadow-lg" />
          </motion.div>

          {/* TensorFlow */}
          <motion.div className="absolute w-10 h-10 opacity-30" style={{ top: '75vh', right: '25vw' }}
            animate={{ x: ['0vw', '-70vw', '-35vw', '-100vw', '0vw'], y: ['0vh', '60vh', '30vh', '80vh', '0vh'], scale: [1, 1.2, 0.7, 1.5, 1] }}
            transition={{ duration: 38, repeat: Infinity, ease: "easeInOut",  }}>
            <img src="/icons/tf.png" alt="TensorFlow" className="w-full h-full object-contain filter drop-shadow-lg" />
          </motion.div>

          {/* Firebase */}
          <motion.div className="absolute w-10 h-10 opacity-30" style={{ top: '16vh', right: '16vw' }}
            animate={{ x: ['0vw', '-80vw', '-40vw', '-100vw', '0vw'], y: ['0vh', '40vh', '60vh', '20vh', '0vh'], rotate: [0, -120, -240, -360] }}
            transition={{ duration: 37, repeat: Infinity, ease: "easeInOut",  }}>
            <img src="/icons/fire.png" alt="Firebase" className="w-full h-full object-contain filter drop-shadow-lg" />
          </motion.div>

          {/* Kubernetes */}
          <motion.div className="absolute w-10 h-10 opacity-30" style={{ bottom: '25vh', right: '33vw' }}
            animate={{ x: ['0vw', '-60vw', '-30vw', '-90vw', '0vw'], y: ['0vh', '-60vh', '-30vh', '-100vh', '0vh'], scale: [1, 0.9, 1.4, 0.8, 1] }}
            transition={{ duration: 36, repeat: Infinity, ease: "easeInOut", }}>
            <img src="/icons/kub.png" alt="Kubernetes" className="w-full h-full object-contain filter drop-shadow-lg" />
          </motion.div>

          {/* Redis */}
          <motion.div className="absolute w-10 h-10 opacity-30" style={{ top: '20vh', left: '66vw' }}
            animate={{ x: ['0vw', '50vw', '25vw', '75vw', '0vw'], y: ['0vh', '60vh', '30vh', '90vh', '0vh'], rotate: [0, 60, 120, 180, 240, 300, 360] }}
            transition={{ duration: 34, repeat: Infinity, ease: "easeInOut", }}>
            <img src="/icons/redis.png" alt="Redis" className="w-full h-full object-contain filter drop-shadow-lg" />
          </motion.div>

          {/* Tailwind CSS */}
          <motion.div className="absolute w-10 h-10 opacity-30" style={{ bottom: '20vh', left: '20vw' }}
            animate={{ x: ['0vw', '80vw', '40vw', '100vw', '0vw'], y: ['0vh', '-60vh', '-30vh', '-90vh', '0vh'], scale: [1, 1.1, 0.6, 1.3, 1] }}
            transition={{ duration: 37, repeat: Infinity, ease: "easeInOut",}}>
            <img src="/icons/tailwind.png" alt="Tailwind CSS" className="w-full h-full object-contain filter drop-shadow-lg" />
          </motion.div>

          {/* VS Code */}
          <motion.div className="absolute w-9 h-9 opacity-30" style={{ top: '10vh', left: '75vw' }}
            animate={{ x: ['0vw', '-60vw', '-90vw', '-30vw', '0vw'], y: ['0vh', '60vh', '30vh', '90vh', '0vh'], rotate: [0, 90, 180, 270, 360] }}
            transition={{ duration: 33, repeat: Infinity, ease: "easeInOut",  }}>
            <img src="/icons/vs.png" alt="VS Code" className="w-full h-full object-contain filter drop-shadow-lg" />
          </motion.div>

          {/* Linux */}
          <motion.div className="absolute w-9 h-9 opacity-30" style={{ bottom: '10vh', right: '75vw' }}
            animate={{ x: ['0vw', '70vw', '35vw', '90vw', '0vw'], y: ['0vh', '-60vh', '-30vh', '-90vh', '0vh'], scale: [1, 1.3, 0.8, 1.1, 1] }}
            transition={{ duration: 41, repeat: Infinity, ease: "easeInOut", }}>
            <img src="/icons/linux.png" alt="Linux" className="w-full h-full object-contain filter drop-shadow-lg" />
          </motion.div>
        </div>


        <motion.div className="mb-8" variants={itemVariants}>
          <motion.span 
            className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-4 backdrop-blur-sm border border-blue-200/30 dark:border-blue-400/20"
            whileHover={{ scale: 1.05, boxShadow: "0 4px 20px rgba(59, 130, 246, 0.3)" }}
          >
            👋 Hello, I'm
          </motion.span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 relative"
          variants={itemVariants}
        >
          <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent relative">
            Yash Sigchi
            {/* Subtle text glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-xl -z-10"
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          B.Tech AI/ML student at VIT | Full-stack developer | AI + ClimateTech Intern | Builder of impactful, scalable apps
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          variants={itemVariants}
        >
          <a href="#contact">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Let's Connect →</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                layoutId="button-bg"
              />
            </motion.button>
          </a>

          <motion.a
            href="/Yash_Resume.pdf"
            download="YashSigchi_Resume.pdf"
            className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 backdrop-blur-sm bg-white/10 dark:bg-gray-800/10 relative overflow-hidden group"
            whileHover={{ 
              scale: 1.05, 
              y: -2,
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Download Resume</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.a>
        </motion.div>

        <motion.div className="flex justify-center space-x-6" variants={itemVariants}>
          {[
            { icon: '⚙️', text: 'Coding since age 17' },
            { icon: '🧠', text: 'GPT-4 enthusiast' },
            { icon: '⚡', text: 'Fast problem solver' }
          ].map((fact, index) => (
            <motion.div
              key={index}
              className="hidden md:block px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full text-sm text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-600/50 shadow-sm"
              whileHover={{ 
                scale: 1.1, 
                y: -2,
                boxShadow: "0 8px 25px rgba(59, 130, 246, 0.15)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <span className="mr-2">{fact.icon}</span>
              {fact.text}
            </motion.div>
          ))}
        </motion.div>

        {/* Stats or achievements section */}
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto"
          variants={containerVariants}
        >
          {[
            { number: '10+', label: 'Projects Built' },
            { number: '3+', label: 'Years Experience' },
            { number: '∞', label: 'Lines of Code' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-4 rounded-2xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm border border-gray-200/30 dark:border-gray-600/30"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 8px 25px rgba(59, 130, 246, 0.15)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div 
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.1 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
  className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
  animate={{ y: [0, 10, 0] }}
  transition={{ duration: 2, repeat: Infinity }}
  whileHover={{ scale: 1.2 }}
  onClick={() => {
    const el = document.getElementById("about");
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }}
>
  <div className="relative">
    <ChevronDownIcon className="w-6 h-6 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
    <motion.div
      className="absolute inset-0 w-6 h-6 border-2 border-blue-400/30 rounded-full opacity-0 group-hover:opacity-100"
      animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  </div>
</motion.div>


    </section>
  );
};

export default Hero;