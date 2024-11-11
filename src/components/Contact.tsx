import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

function Contact() {
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're here to help! Reach out to us for any questions or to schedule an appointment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-teal-600 mt-1 mr-4" />
                <div>
                  <h4 className="font-medium text-gray-900">Location</h4>
                  <p className="text-gray-600">123 Dental Street, Medical District, City, 12345</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-teal-600 mt-1 mr-4" />
                <div>
                  <h4 className="font-medium text-gray-900">Phone</h4>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-teal-600 mt-1 mr-4" />
                <div>
                  <h4 className="font-medium text-gray-900">Email</h4>
                  <p className="text-gray-600">info@dentalcare.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-teal-600 mt-1 mr-4" />
                <div>
                  <h4 className="font-medium text-gray-900">Hours</h4>
                  <p className="text-gray-600">Mon-Fri: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Sat: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ x: 20, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;