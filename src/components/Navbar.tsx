import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: 'easeOut'
      }
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 bg-white/80 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center space-x-2"
          >
            <span className="text-3xl font-bold bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
              DentalCare
            </span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Services', 'Team', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="text-gray-600 hover:text-teal-500 transition-colors"
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-2 rounded-full flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Book Now</span>
            </motion.button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          {['Home', 'About', 'Services', 'Team', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-3 py-2 text-gray-600 hover:text-teal-500"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="w-full mt-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-2 rounded-full flex items-center justify-center space-x-2">
            <Phone className="w-4 h-4" />
            <span>Book Now</span>
          </button>
        </div>
      </motion.div>
    </motion.nav>
  );
}