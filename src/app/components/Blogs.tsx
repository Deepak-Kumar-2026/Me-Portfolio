'use client'

import Link from 'next/link'
import { FaCode, FaBrain, FaGraduationCap } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, cardHoverSmall } from '@/utils/animations'

const updates = [
  {
    title: "Mastering MERN Stack",
    excerpt: "Building full-stack applications using MongoDB, Express, React, and Node.js. Focused on creating responsive and performant web apps.",
    date: "2025-10-10",
    icon: <FaCode className="text-primary h-6 w-6" />
  },
  {
    title: "Learning Data Science",
    excerpt: "Exploring Python, Pandas, NumPy, and data visualization techniques to bring analytics into web development projects.",
    date: "2025-09-25",
    icon: <FaBrain className="text-primary h-6 w-6" />
  },
  {
    title: "B.Tech Projects & Achievements",
    excerpt: "Working on real-world projects during my final year, combining web technologies with problem-solving skills and modern frameworks.",
    date: "2025-08-15",
    icon: <FaGraduationCap className="text-primary h-6 w-6" />
  }
]

export default function Blogs() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-dark">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
          {...fadeInUp}
        >
          My Journey & Learning Updates
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {updates.map((update, index) => (
            <motion.article
              key={index}
              className="bg-white dark:bg-dark/50 rounded-2xl shadow-lg p-6 flex flex-col h-full hover:shadow-xl transition-all duration-300"
              variants={fadeInUp}
              {...cardHoverSmall}
            >
              <div className="flex items-center mb-4">
                {update.icon}
                <h3 className="text-xl font-semibold ml-3 text-gray-800 dark:text-white">
                  {update.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{update.excerpt}</p>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(update.date).toLocaleDateString()}
              </span>
            </motion.article>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/blogs"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              View All Updates
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
