import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certifications } from '../data/certifications';
import { 
  AcademicCapIcon,
  XMarkIcon,
  ArrowDownTrayIcon,
  EyeIcon,
  ArrowTopRightOnSquareIcon 
} from '@heroicons/react/24/outline';

interface CertificationModalProps {
  cert: {
    id: string;
    title: string;
    issuer: string;
    date: string;
    logo: string;
    certificateImage?: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const CertificationModal: React.FC<CertificationModalProps> = ({ cert, isOpen, onClose }) => {
  if (!cert) return null;

  const handleDownload = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = cert.certificateImage || cert.logo;
    link.download = `${cert.title.replace(/\s+/g, '_')}_Certificate.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewOriginal = () => {
    window.open(cert.certificateImage || cert.logo, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-4xl max-h-[100vh] bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden"
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800">
              <div className="flex items-center space-x-4">
                <img
                  src={cert.logo}
                  alt={cert.issuer}
                  className="w-12 h-12 rounded-xl object-cover shadow-md"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {cert.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {cert.issuer}
                  </p>
                </div>
              </div>
              
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <XMarkIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              </button>
            </div>

            {/* Certificate Image */}
            <div className="p-6">
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 mb-6">
                <div className="text-center">
                  <img
                    src={cert.certificateImage || cert.logo}
                    alt={`${cert.title} Certificate`}
                    className="max-w-full max-h-96 mx-auto rounded-xl shadow-lg object-contain"
                  />
                </div>
                
                {/* Certificate Details Overlay */}
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <AcademicCapIcon className="w-4 h-4 mr-2" />
                    <span>Completed {cert.date}</span>
                  </div>
                </div>
              </div>

              {/* Certificate Info */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 mb-6">
                <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                  Certificate Details
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-600 dark:text-gray-300">Certificate:</span>
                    <p className="text-gray-900 dark:text-white">{cert.title}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600 dark:text-gray-300">Issued by:</span>
                    <p className="text-gray-900 dark:text-white">{cert.issuer}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600 dark:text-gray-300">Date:</span>
                    <p className="text-gray-900 dark:text-white">{cert.date}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600 dark:text-gray-300">Status:</span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      Verified
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button
                  onClick={handleDownload}
                  className="flex-1 flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
                  Download Certificate
                </motion.button>
                
                <motion.button
                  onClick={handleViewOriginal}
                  className="flex-1 flex items-center justify-center px-6 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-xl font-medium transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ArrowTopRightOnSquareIcon className="w-5 h-5 mr-2" />
                  View Original
                </motion.button>
                
                <motion.button
                  onClick={onClose}
                  className="sm:w-auto px-6 py-3 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-xl font-medium transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Close
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<{
    id: string;
    title: string;
    issuer: string;
    date: string;
    logo: string;
    certificateImage?: string;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewCertificate = (cert: {
    id: string;
    title: string;
    issuer: string;
    date: string;
    logo: string;
    certificateImage?: string;
  }) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCert(null);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-green-600 dark:from-white dark:to-green-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional certifications that validate my expertise
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-6 pb-4"
            initial={{ x: 0 }}
            animate={{ x: `-${certifications.length * 320}px` }}
            transition={{
              duration: certifications.length * 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ width: `${certifications.length * 640}px` }}
          >
            {[...certifications, ...certifications].map((cert, index) => (
              <motion.div
                key={`${cert.id}-${index}`}
                className="flex-shrink-0 w-80 p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={cert.logo}
                    alt={cert.issuer}
                    className="w-12 h-12 rounded-lg object-cover mr-4 shadow-md"
                  />
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white">
                      {cert.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 text-sm">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
                  <AcademicCapIcon className="w-4 h-4 mr-2" />
                  <span>Completed {cert.date}</span>
                </div>

                <motion.button
                  onClick={() => handleViewCertificate(cert)}
                  className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <EyeIcon className="w-4 h-4 mr-2" />
                  View Certificate
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="inline-block p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl backdrop-blur-sm border border-blue-200/20 dark:border-blue-700/20">
            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
              {certifications.length}+ Professional Certifications
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Continuously updating my skills with the latest industry standards
            </p>
          </div>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      <CertificationModal
        cert={selectedCert}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Certifications;