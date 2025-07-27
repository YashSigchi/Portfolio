import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import githubIcon from '../images/github2.png';
import linkedinIcon from '../images/linkedin.png';

// Initialize EmailJS with your public key
emailjs.init('9zTLs0JJBG_Vi2J3q'); // Replace with your actual public key

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // Current date and time
      const currentDate = new Date().toLocaleString();

      // Template parameters for the message to you (receiver)
      const receiverTemplateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        sent_date: currentDate,
        to_name: 'Yash Sigchi', // Your name
      };

      console.log('Sending email with params:', receiverTemplateParams);

      // Send email to you (receiver) first
      const receiverResponse = await emailjs.send(
        'service_6bpd5n6', // Replace with your EmailJS service ID
        'template_kb9z2vy', // Replace with your receiver template ID
        receiverTemplateParams
      );

      console.log('Receiver email sent successfully:', receiverResponse);

      // Only send auto-reply if the first email was successful
      try {
        // Template parameters for the auto-reply to sender
        const senderTemplateParams = {
          to_name: formData.name,
          to_email: formData.email,
          user_message: formData.message,
          sent_date: currentDate,
          from_name: 'Yash Sigchi', // Your name
          github_url: 'https://github.com/YashSigchi',
          linkedin_url: 'https://www.linkedin.com/in/yash-sigchi/',
          portfolio_url: window.location.origin, // Your portfolio URL
        };

        console.log('Sending auto-reply with params:', senderTemplateParams);

        // Send auto-reply to sender
        const senderResponse = await emailjs.send(
          'service_6bpd5n6', // Replace with your EmailJS service ID
          'template_w0l095z', // Replace with your sender template ID
          senderTemplateParams
        );

        console.log('Auto-reply sent successfully:', senderResponse);
        toast.success('Message sent successfully! You should receive a confirmation email shortly.');
      } catch (autoReplyError: any) {
        console.error('Auto-reply failed, but main email was sent:', autoReplyError);
        toast.success('Message sent successfully! (Auto-reply may have failed)');
      }
      setFormData({ name: '', email: '', message: '' });

    } catch (error: any) {
      console.error('Error sending email:', error);
      
      // More detailed error handling
      if (error.status === 422) {
        console.error('EmailJS 422 Error Details:', {
          text: error.text,
          status: error.status,
          service_id: 'service_6bpd5n6',
          template_ids: ['template_kb9z2vy', 'template_bssg53p']
        });
        
        toast.error('Email configuration error. Please check your EmailJS setup.');
      } else if (error.status === 400) {
        toast.error('Invalid email data. Please check your form inputs.');
      } else if (error.status === 401) {
        toast.error('EmailJS authentication failed. Please check your public key.');
      } else if (error.status === 403) {
        toast.error('EmailJS access denied. Please check your service permissions.');
      } else {
        toast.error('Failed to send message. Please try again or contact me directly.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Alternative: Send only one email (to you) to test first
  const handleSubmitSimple = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // Current date and time
      const currentDate = new Date().toLocaleString();

      // Template parameters for the message to you (receiver only)
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        sent_date: currentDate,
        to_name: 'Yash Sigchi',
      };

      console.log('Sending email with params:', templateParams);

      // Send only one email to test
      const response = await emailjs.send(
        'service_6bpd5n6', // Your service ID
        'template_kb9z2vy', // Your template ID
        templateParams
      );

      console.log('Email sent successfully:', response);
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });

    } catch (error: any) {
      console.error('Error sending email:', error);
      console.error('Error details:', {
        status: error.status,
        text: error.text,
        message: error.message
      });
      
      toast.error(`Failed to send message: ${error.text || error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <Toaster position="top-right" />
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to build the future with AI & Code? Let's create something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                Get In Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, innovative projects, 
                or just chat about the latest in AI and technology. Whether you're 
                looking to collaborate or have a question, I'd love to hear from you!
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm"
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <EnvelopeIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300">yash.sigchi08@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm"
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
                  <PhoneIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-300">+91 88752 50627</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-4">
                Connect on Social
              </h4>
              <div className="flex space-x-4">
                {[
                  {
                    name: 'GitHub',
                    iconPath: githubIcon,
                    url: 'https://github.com/YashSigchi',
                    bgHover: 'hover:bg-gray-700',
                  },
                  {
                    name: 'LinkedIn',
                    iconPath: linkedinIcon,
                    url: 'https://www.linkedin.com/in/yash-sigchi/',
                    bgHover: 'hover:bg-blue-600',
                  },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white dark:bg-gray-900 rounded-full shadow-sm ${social.bgHover} hover:text-white transition-all duration-300`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <img src={social.iconPath} alt={social.name} className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Download Resume */}
            <motion.a
              href="/resume.pdf"
              download="YashSigchi_Resume.pdf"
              className="flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="/icons/cv.png" alt="Resume Icon" className="w-7 h-7" />
              <span>Download Resume</span>
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Use handleSubmit for both emails, handleSubmitSimple for testing */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Your Name"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="your.email@example.com"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tell me about your project or just say hi!"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? 'Sending...' : 'Send Message →'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;