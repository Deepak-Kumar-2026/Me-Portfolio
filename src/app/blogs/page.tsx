'use client'

import { FaCode, FaBrain, FaGraduationCap, FaPaintBrush } from 'react-icons/fa'
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
          <span className="text-primary font-semibold"> final-year B.Tech student</span> passionate about 
          <span className="text-primary font-semibold"> Full Stack Web Development</span>. I specialize in the 
          <span className="text-primary font-semibold"> MERN stack</span> and love building modern web applications. 
          Currently, I'm also exploring 
          <span className="text-primary font-semibold"> AI & Machine Learning</span> while enhancing my 
          <span className="text-primary font-semibold"> UI/UX & Figma</span> skills.
        </p>
      </motion.section>

      {/* Cards Section */}
      <motion.section
        {...fadeIn}
        transition={{ delay: 0.3 }}
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >

          {/* Full Stack */}
          <motion.div
            className="bg-white dark:bg-dark/60 border border-gray-200 dark:border-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 text-center"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaCode className="h-12 w-12 text-primary mb-6 mx-auto" />
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-800 dark:text-white">
              Full Stack Development
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
              Building powerful web apps using 
              <span className="text-primary font-medium"> MERN Stack</span>.
            </p>
          </motion.div>

          {/* AI & ML */}
          <motion.div
            className="bg-white dark:bg-dark/60 border border-gray-200 dark:border-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 text-center"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaBrain className="h-12 w-12 text-primary mb-6 mx-auto" />
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-800 dark:text-white">
              AI & Machine Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
              Exploring <span className="text-primary font-medium">AI, ML & Python</span>.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div
            className="bg-white dark:bg-dark/60 border border-gray-200 dark:border-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 text-center"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaGraduationCap className="h-12 w-12 text-primary mb-6 mx-auto" />
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-800 dark:text-white">
              Education
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
              Pursuing <span className="text-primary font-medium">B.Tech CSE</span>.
            </p>
          </motion.div>

          {/* UI / UX (Second Row Center Card) */}
          <motion.div
            className="md:col-span-3 flex justify-center"
            variants={fadeInUp}
          >
            <div className="bg-white dark:bg-dark/60 border border-gray-200 dark:border-white/10 backdrop-blur-xl p-8 w-full md:w-1/2 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 text-center">
              <FaPaintBrush className="h-12 w-12 text-primary mb-6 mx-auto" />
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-800 dark:text-white">
                UI / UX & Figma
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                Learning <span className="text-primary font-medium">Figma, wireframing & UX design</span>.
              </p>
            </div>
          </motion.div>

        </motion.div>
      </motion.section>

    </div>
  )
}
