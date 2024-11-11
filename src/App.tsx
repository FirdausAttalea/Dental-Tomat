import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Stethoscope } from 'lucide-react';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-screen flex items-center justify-center bg-gradient-to-br from-teal-500/10 to-blue-500/10"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000"
            alt="Modern dental office"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white/90" />
        </div>

        <div className="relative text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center mb-6"
          >
            <Stethoscope className="w-12 h-12 text-teal-600 mr-4" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              DentalCare
            </h1>
          </motion.div>
          
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6"
          >
            Your Smile, Our Passion
          </motion.h2>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Experience exceptional dental care with our team of expert professionals using cutting-edge technology.
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg font-medium shadow-lg"
            >
              Book Appointment
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-gray-900 rounded-lg font-medium shadow-lg"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </motion.header>

      <Services />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;