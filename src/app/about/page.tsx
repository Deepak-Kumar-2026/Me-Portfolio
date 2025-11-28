'use client'

import { FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa'
import { motion } from 'framer-motion'
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer,
  cardHover,
  cardHoverSmall
} from '@/utils/animations'

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-20 px-6">
      {/* Header */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold mb-12 text-center text-gray-900 dark:text-white tracking-tight"
        {...fadeInDown}
      >
        About Me
      </motion.h1>

      {/* Bio Section */}
      <motion.section
        className="mb-24"
        {...fadeInUp}
      >
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto text-center">
          Hi, I’m <span className="text-primary font-semibold">Deepak Kumar</span>, a final-year
          <span className="text-primary font-semibold"> B.Tech Computer Science</span> student from Bihar.
          I build **modern web applications** using the <span className="text-primary font-semibold">MERN stack</span>,
          creating seamless experiences for users while crafting robust backend systems.

          Beyond web development, I’m diving into <span className="text-primary font-semibold">Data Science</span>
          to explore the power of data and analytics in solving real-world problems.
          I’m passionate about learning, experimenting, and turning ideas into functional digital solutions.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="mb-20"
        {...fadeIn}
        transition={{ delay: 0.2 }}
      >
        <motion.h2
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10"
          {...fadeInUp}
        >
          Skills
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Frontend */}
          <motion.div
            className="bg-white dark:bg-dark/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaCode className="h-10 w-10 text-primary mb-5" />
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Frontend</h3>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-lg">
              <li>HTML, CSS, JavaScript</li>
              <li>React.js, Next.js</li>
              <li>Tailwind CSS, Bootstrap</li>
              <li>Responsive Web Design</li>
            </ul>
          </motion.div>

          {/* Backend */}
          <motion.div
            className="bg-white dark:bg-dark/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaLaptopCode className="h-10 w-10 text-primary mb-5" />
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Backend</h3>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-lg">
              <li>Node.js, Express.js</li>
              <li>REST API Development</li>
              <li>MongoDB, Mongoose, MySQL</li>
              <li>Deployment (Netlify, Vercel, Render)</li>
            </ul>
          </motion.div>

          {/* Programming & Tools */}
          <motion.div
            className="bg-white dark:bg-dark/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaGraduationCap className="h-10 w-10 text-primary mb-5" />
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Programming & Tools</h3>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-lg">
              <li>Core Java, DSA (Basic)</li>
              <li>Git, GitHub, VS Code</li>
              <li>Postman</li>
              <li>Continuous Learning & Collaboration</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        {...fadeIn}
        transition={{ delay: 0.4 }}
      >
        <motion.h2
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10"
          {...fadeInUp}
        >
          Education
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
              Bachelor of Technology in Computer Science
            </h3>
            <p className="text-primary font-medium mb-3">Your University • 2022 - 2026</p>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Focused on software engineering, web development, and modern technologies, with hands-on experience in
              MERN stack and ongoing learning in Data Science.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  )
}
