import React from 'react';
import { motion } from 'framer-motion';
import { HeartIcon } from '@heroicons/react/24/solid';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollWithOffset = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-6"> {/* Reduced from py-12 to py-6 */}
  <div className="container mx-auto px-6">
    <div className="grid md:grid-cols-3 gap-6 mb-6"> {/* gap-8 → gap-6, mb-8 → mb-6 */}
      {/* Brand */}
      <div>
        <motion.div
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2"
          whileHover={{ scale: 1.05 }}
        >
          Yash Sigchi
        </motion.div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Full-stack developer and AI enthusiast passionate about creating 
          innovative solutions for tomorrow's challenges.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-md font-semibold mb-3">Quick Links</h3> {/* text-lg → text-md */}
        <div className="space-y-1.5"> {/* space-y-2 → space-y-1.5 */}
          {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((link) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                scrollWithOffset(link.toLowerCase());
              }}
              className="block text-gray-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
              whileHover={{ x: 5 }}
            >
              {link}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Social Links */}
<div>
  <h3 className="text-md font-semibold mb-3">Connect</h3>
  <div className="flex flex-col space-y-3">
    {[
      {
        name: 'GitHub',
        href: 'https://github.com/yashsigchi',
        icon: '/icons/github.png',
        label: 'View my GitHub',
      },
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/yash-sigchi/',
        icon: '/icons/linkedin.png',
        label: 'View my LinkedIn',
      },
    ].map((social) => (
      <motion.a
        key={social.name}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-gray-800 hover:bg-blue-600 text-white px-5 py-3 rounded-lg shadow-md transition-colors duration-300"
        whileHover={{ scale: 1.03, x: 3 }}
        whileTap={{ scale: 0.98 }}
      >
        <img src={social.icon} alt={social.name} className="w-6 h-6 mr-4" />
        <span className="text-base">{social.label}</span>
      </motion.a>
    ))}
  </div>
</div>


    </div>

    {/* Divider */}
    <div className="border-t border-gray-800 pt-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-3">
        <motion.p
          className="text-gray-400 text-xs flex items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          © {currentYear} Yash Sigchi. All rights reserved.
        </motion.p>

        <motion.p
          className="text-gray-400 text-xs flex items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Made with{' '}
          <motion.span
            className="mx-1"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <HeartIcon className="w-4 h-4 text-red-500" />
          </motion.span>
          by Yash Sigchi
        </motion.p>
      </div>

      {/* Final Line */}
      <motion.div
        className="text-center mt-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <motion.p
          className="text-xs text-gray-600 hover:text-blue-400 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Let’s build something amazing together.
        </motion.p>
      </motion.div>
    </div>
  </div>
</footer>

  );
};

export default Footer;
