import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Smile, Shield, Heart, Activity } from 'lucide-react';

const services = [
  {
    icon: Smile,
    title: 'General Dentistry',
    description: 'Comprehensive dental care for your entire family, including cleanings and check-ups.'
  },
  {
    icon: Shield,
    title: 'Preventive Care',
    description: 'Stop dental problems before they start with our preventive treatments.'
  },
  {
    icon: Heart,
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with our advanced cosmetic dental procedures.'
  },
  {
    icon: Activity,
    title: 'Emergency Care',
    description: '24/7 emergency dental services when you need immediate attention.'
  }
];

function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive dental care services to keep your smile healthy and beautiful.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-6 mx-auto">
                  <Icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;