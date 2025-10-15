'use client'

import { FaCode, FaBrain, FaGraduationCap } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeInUp, fadeInDown, fadeIn, staggerContainer, cardHover } from '@/utils/animations'

export default function Blogs() {
  return (
    <div className="container max-w-7xl mx-auto py-20 px-6">
      {/* Heading */}
      <motion.h1 
        className="text-5xl md:text-6xl font-extrabold mb-12 text-center text-gray-900 dark:text-white tracking-tight"
        {...fadeInDown}
      >
        My Journey
      </motion.h1>

      {/* Introduction */}
      <motion.section 
        className="mb-16"
        {...fadeInUp}
      >
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto text-center">
          Hello! I’m <span className="text-primary font-semibold">Deepak Kumar</span>, a 
          <span className="text-primary font-semibold"> final-year B.Tech student</span> with a strong passion for 
          <span className="text-primary font-semibold"> Full Stack Web Development</span>.  
          I specialize in the <span className="text-primary font-semibold">MERN stack</span> and love creating 
          modern, responsive web applications.  
          Currently, I’m also expanding my skills in 
          <span className="text-primary font-semibold"> Data Science</span> to combine web technology with data-driven insights.
        </p>
      </motion.section>

      {/* Cards Section */}
      <motion.section 
        {...fadeIn}
        transition={{ delay: 0.3 }}
      >
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Full Stack */}
          <motion.div 
            className="bg-white dark:bg-dark/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaCode className="h-10 w-10 text-primary mb-5 mx-auto" />
            <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Full Stack Development</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Skilled in building full-fledged web applications using 
              <span className="text-primary font-medium"> React, Node.js, Express, and MongoDB</span>.
              I enjoy designing clean UIs and crafting robust backends.
            </p>
          </motion.div>

          {/* Data Science */}
          <motion.div 
            className="bg-white dark:bg-dark/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaBrain className="h-10 w-10 text-primary mb-5 mx-auto" />
            <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Data Science</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Currently learning <span className="text-primary font-medium">Python, Pandas, NumPy</span> and 
              exploring how data analytics can enhance decision-making and web applications.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div 
            className="bg-white dark:bg-dark/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaGraduationCap className="h-10 w-10 text-primary mb-5 mx-auto" />
            <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Education</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Pursuing <span className="text-primary font-medium">B.Tech in Computer Science</span>,  
              focusing on web development, software engineering, and emerging technologies.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  )
}
