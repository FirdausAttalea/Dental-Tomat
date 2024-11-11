import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants}>
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80"
              alt="Modern dental equipment"
              className="rounded-2xl shadow-lg"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h2 
              variants={itemVariants}
              className="text-4xl font-bold text-gray-900 mb-6"
            >
              Why Choose Our Dental Clinic?
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 mb-8"
            >
              With over 20 years of experience, we combine cutting-edge technology 
              with compassionate care to deliver the best dental solutions for you 
              and your family.
            </motion.p>

            <motion.div variants={containerVariants} className="space-y-4">
              {[
                "State-of-the-art facilities and equipment",
                "Comprehensive dental care under one roof",
                "Experienced team of dental specialists",
                "Comfortable and relaxing environment",
                "Flexible scheduling and payment options"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-teal-500" />
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-3 rounded-full"
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}