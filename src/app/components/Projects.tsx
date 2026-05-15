// 'use client'

// import { projects } from '@/contents/projects'
// import Image from 'next/image'
// import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
// import { motion } from 'framer-motion'
// import { fadeInUp, staggerContainer, cardHoverSmall } from '@/utils/animations'

// export default function Projects() {
//   return (
//     <section className="py-24 bg-gradient-to-b from-indigo-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
//       <div className="container max-w-7xl mx-auto px-4">
//         <motion.h2 
//           className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900 dark:text-white"
//           {...fadeInUp}
//         >
//           Featured Projects
//         </motion.h2>

//         <motion.div 
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
//           variants={staggerContainer}
//           initial="initial"
//           animate="animate"
//         >
//           {projects.map((project) => (
//             <motion.article
//               key={project.title}
//               className="bg-white dark:bg-dark/50 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300"
//               variants={fadeInUp}
//               {...cardHoverSmall}
//             >
//               {/* Project Image */}
//               <div className="relative aspect-video mb-4 rounded-xl overflow-hidden">
//                 <Image
//                   src={project.image}
//                   alt={project.title}
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                 />
//               </div>

//               {/* Title & Description */}
//               <motion.h3 
//                 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white hover:text-primary transition-colors"
//                 whileHover={{ x: 5 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 {project.title}
//               </motion.h3>
//               <motion.p 
//                 className="text-gray-600 dark:text-gray-300 mb-4 text-lg"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//               >
//                 {project.description}
//               </motion.p>

//               {/* Tech Badges */}
//               <motion.div 
//                 className="flex flex-wrap gap-2 mb-4"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.3 }}
//               >
//                 {project.technologies.map((tech) => (
//                   <motion.span
//                     key={tech}
//                     className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     {tech}
//                   </motion.span>
//                 ))}
//               </motion.div>

//               {/* Links */}
//               <motion.div 
//                 className="flex gap-4"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.4 }}
//               >
//                 <motion.a
//                   href={project.githubLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 text-secondary hover:text-primary font-medium transition-colors"
//                   whileHover={{ x: 5 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <FaGithub className="h-5 w-5" />
//                   Code
//                 </motion.a>
//                 <motion.a
//                   href={project.demoLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 text-secondary hover:text-primary font-medium transition-colors"
//                   whileHover={{ x: 5 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <FaExternalLinkAlt className="h-5 w-5" />
//                   Live Demo
//                 </motion.a>
//               </motion.div>
//             </motion.article>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }



'use client'

import { projects } from '@/contents/projects'

import Image from 'next/image'

import {
  FaGithub,
  FaExternalLinkAlt
} from 'react-icons/fa'

import { motion } from 'framer-motion'

import {
  fadeInUp,
  staggerContainer,
  cardHoverSmall
} from '@/utils/animations'

export default function Projects() {
  return (
    <section className="relative overflow-hidden py-28 bg-gradient-to-br from-slate-50 via-cyan-50 to-emerald-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-400/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/20 blur-3xl rounded-full" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="container relative z-10 max-w-7xl mx-auto px-4">

        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          {...fadeInUp}
        >

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />

            <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
              Portfolio Showcase
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-6">

            Featured{' '}

            <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            A collection of modern full-stack applications,
            scalable systems, and interactive web experiences
            crafted with performance and clean UI in mind.
          </p>

        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >

          {projects.map((project) => (

            <motion.article
              key={project.title}
              variants={fadeInUp}
              {...cardHoverSmall}
              className="group relative overflow-hidden rounded-[30px] border border-white/20 bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-500"
            >

              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-cyan-500/10 via-transparent to-emerald-500/10 transition-all duration-500" />

              {/* Image */}
              <div className="relative overflow-hidden">

                <div className="relative aspect-video overflow-hidden">

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />

                </div>

                {/* Floating Badge */}
                <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/20 shadow-lg">
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
                    Featured
                  </span>
                </div>

              </div>

              {/* Content */}
              <div className="relative p-7">

                {/* Title */}
                <motion.h3
                  className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  {project.title}
                </motion.h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3 mb-7">

                  {project.technologies.map((tech) => (

                    <motion.span
                      key={tech}
                      whileHover={{
                        scale: 1.08
                      }}
                      whileTap={{
                        scale: 0.95
                      }}
                      className="
                        px-4 py-2
                        rounded-full
                        text-sm
                        font-semibold
                        bg-cyan-50 dark:bg-cyan-500/10
                        text-cyan-700 dark:text-cyan-300
                        border border-cyan-100 dark:border-cyan-500/20
                      "
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-4">

                  {/* Github */}
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.05
                    }}
                    whileTap={{
                      scale: 0.95
                    }}
                    className="
                      flex items-center gap-2
                      px-5 py-3
                      rounded-2xl
                      bg-slate-900 dark:bg-slate-800
                      text-white
                      font-semibold
                      shadow-lg
                      hover:shadow-2xl
                      transition-all duration-300
                    "
                  >
                    <FaGithub className="text-lg" />
                    Code
                  </motion.a>

                  {/* Live Demo */}
                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.05
                    }}
                    whileTap={{
                      scale: 0.95
                    }}
                    className="
                      flex items-center gap-2
                      px-5 py-3
                      rounded-2xl
                      bg-gradient-to-r from-cyan-500 to-emerald-500
                      text-white
                      font-semibold
                      shadow-xl
                      hover:shadow-cyan-500/30
                      transition-all duration-300
                    "
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    Live Demo
                  </motion.a>

                </div>

              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}