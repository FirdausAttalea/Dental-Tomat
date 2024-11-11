import { motion } from 'framer-motion';
import { Calendar, Shield, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-20 overflow-hidden">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-r from-teal-500/90 to-blue-600/90 z-10"
        />
        <img
          src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80"
          alt="Modern dental clinic"
          className="w-full h-[90vh] object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Advanced Dental Care for Your Perfect Smile
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl text-white/90 mb-8"
              >
                Experience state-of-the-art dentistry in a comfortable and caring environment.
                Your smile is our masterpiece.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-teal-600 px-8 py-4 rounded-full hover:bg-gray-100 font-semibold flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Schedule Consultation</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 font-semibold"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Safe & Certified",
                description: "All procedures follow strict safety protocols"
              },
              {
                icon: Award,
                title: "Expert Team",
                description: "Highly qualified dental professionals"
              },
              {
                icon: Calendar,
                title: "Easy Booking",
                description: "Online scheduling available 24/7"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-slate-50 p-8 rounded-2xl"
              >
                <feature.icon className="w-10 h-10 text-teal-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}