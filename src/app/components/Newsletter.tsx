'use client'

import { motion } from 'framer-motion';
import { fadeInUp, scaleIn } from '@/utils/animations';

export default function Newsletter() {
  return (
    <section className="py-24 bg-gradient-to-r from-indigo-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div 
          className="bg-white dark:bg-dark/50 rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6"
          {...fadeInUp}
        >
          {/* Text Section */}
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
              Subscribe to My Newsletter
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Get the latest updates on my <span className="font-semibold text-primary">projects</span>, <span className="font-semibold text-primary">blog posts</span>, and <span className="font-semibold text-primary">tech insights</span> delivered straight to your inbox.
            </p>
          </div>

          {/* Form Section */}
          <form className="flex flex-col sm:flex-row w-full md:w-auto gap-4">
            <motion.input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-lg border dark:text-white border-gray-300 dark:border-gray-600 bg-white dark:bg-dark text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              required
              {...scaleIn}
            />
            <motion.button
              type="submit"
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-all font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
