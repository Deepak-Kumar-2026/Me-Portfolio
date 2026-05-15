// 'use client'

// import Link from 'next/link'
// import { FaCode, FaBrain, FaGraduationCap } from 'react-icons/fa'
// import { motion } from 'framer-motion'
// import { fadeInUp, staggerContainer, cardHoverSmall } from '@/utils/animations'

// const updates = [
//   {
//     title: "Mastering MERN Stack",
//     excerpt: "Building full-stack applications using MongoDB, Express, React, and Node.js. Focused on creating responsive and performant web apps.",
//     date: "2025-10-10",
//     icon: <FaCode className="text-primary h-6 w-6" />
//   },
//   {
//     title: "Learning Data Science",
//     excerpt: "Exploring Python, Pandas, NumPy, and data visualization techniques to bring analytics into web development projects.",
//     date: "2025-09-25",
//     icon: <FaBrain className="text-primary h-6 w-6" />
//   },
//   {
//     title: "B.Tech Projects & Achievements",
//     excerpt: "Working on real-world projects during my final year, combining web technologies with problem-solving skills and modern frameworks.",
//     date: "2025-08-15",
//     icon: <FaGraduationCap className="text-primary h-6 w-6" />
//   }
// ]

// export default function Blogs() {
//   return (
//     <section className="py-20 bg-gray-50 dark:bg-dark">
//       <div className="container max-w-7xl mx-auto px-4">
//         <motion.h2 
//           className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
//           {...fadeInUp}
//         >
//           My Journey & Learning Updates
//         </motion.h2>

//         <motion.div 
//           className="grid grid-cols-1 md:grid-cols-3 gap-8"
//           variants={staggerContainer}
//           initial="initial"
//           animate="animate"
//         >
//           {updates.map((update, index) => (
//             <motion.article
//               key={index}
//               className="bg-white dark:bg-dark/50 rounded-2xl shadow-lg p-6 flex flex-col h-full hover:shadow-xl transition-all duration-300"
//               variants={fadeInUp}
//               {...cardHoverSmall}
//             >
//               <div className="flex items-center mb-4">
//                 {update.icon}
//                 <h3 className="text-xl font-semibold ml-3 text-gray-800 dark:text-white">
//                   {update.title}
//                 </h3>
//               </div>
//               <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{update.excerpt}</p>
//               <span className="text-sm text-gray-500 dark:text-gray-400">
//                 {new Date(update.date).toLocaleDateString()}
//               </span>
//             </motion.article>
//           ))}
//         </motion.div>

//         <motion.div 
//           className="text-center mt-12"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//         >
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Link
//               href="/blogs"
//               className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
//             >
//               View All Updates
//             </Link>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }



'use client'

import Link from 'next/link'
import {
  FaCode,
  FaBrain,
  FaGraduationCap
} from 'react-icons/fa'

import { motion } from 'framer-motion'

import {
  fadeInUp,
  staggerContainer,
  cardHoverSmall
} from '@/utils/animations'

const updates = [
  {
    title: "Mastering MERN Stack",
    excerpt:
      "Building scalable full-stack applications using MongoDB, Express, React, and Node.js with modern UI/UX practices.",
    date: "2025-10-10",
    icon: <FaCode className="h-7 w-7 text-cyan-600" />,
    color: "from-cyan-100 to-blue-100"
  },
  {
    title: "Learning Data Science",
    excerpt:
      "Exploring Python, Pandas, NumPy, machine learning concepts, and data visualization techniques.",
    date: "2025-09-25",
    icon: <FaBrain className="h-7 w-7 text-emerald-600" />,
    color: "from-emerald-100 to-cyan-100"
  },
  {
    title: "B.Tech Projects & Achievements",
    excerpt:
      "Building real-world applications and strengthening problem-solving skills through practical development projects.",
    date: "2025-08-15",
    icon: <FaGraduationCap className="h-7 w-7 text-blue-600" />,
    color: "from-blue-100 to-cyan-100"
  }
]

export default function Blogs() {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-slate-50 via-cyan-50 to-emerald-50">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-20"
          {...fadeInUp}
        >

          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-100 bg-white/70 backdrop-blur-xl shadow-sm mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-medium text-slate-600">
              Growth & Learning
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
            My Journey & Updates
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
            Documenting my journey in full-stack development,
            problem-solving, AI exploration, and modern web technologies.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {updates.map((update, index) => (
            <motion.article
              key={index}
              className="group rounded-[32px] border border-white bg-white/70 backdrop-blur-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 flex flex-col"
              variants={fadeInUp}
              {...cardHoverSmall}
            >

              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${update.color} flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-all duration-300`}
              >
                {update.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 text-slate-800">
                {update.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-lg leading-relaxed flex-grow">
                {update.excerpt}
              </p>

              {/* Footer */}
              <div className="mt-8 flex items-center justify-between">

                <span className="text-sm text-slate-500 font-medium">
                  {new Date(update.date).toLocaleDateString()}
                </span>

                <span className="text-cyan-600 font-semibold text-sm">
                  Update
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            <Link
              href="/blogs"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              View All Updates
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}