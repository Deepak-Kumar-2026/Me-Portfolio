// 'use client'

// import { projects } from '@/contents/projects'
// import Image from 'next/image'
// import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
// import { motion } from 'framer-motion'
// import { fadeInUp, staggerContainer, cardHoverSmall } from '@/utils/animations'

// export default function Projects() {
//   return (
//     <section className="py-20 bg-gray-50 dark:bg-dark">
//       <div className="container max-w-7xl mx-auto px-4">
//         {/* Section Header */}
//         <motion.h2 
//           className="text-4xl font-bold mb-4 text-center text-gray-900 dark:text-white"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           My Projects
//         </motion.h2>
//         <motion.p 
//           className="text-lg text-gray-600 dark:text-gray-300 mb-16 text-center max-w-2xl mx-auto"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           Here are some of my recent projects. Click on the links to view the code or live demo.
//         </motion.p>

//         {/* Project Grid */}
//         <motion.div 
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
//           variants={staggerContainer}
//           initial="initial"
//           animate="animate"
//         >
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               className="bg-white dark:bg-dark/50 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
//               variants={fadeInUp}
//               {...cardHoverSmall}
//             >
//               {/* Project Image */}
//               <motion.div 
//                 className="relative aspect-video w-full overflow-hidden"
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <Image
//                   src={project.image}
//                   alt={project.title}
//                   fill
//                   className="object-cover w-full h-full"
//                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                 />
//               </motion.div>

//               {/* Project Details */}
//               <div className="p-6">
//                 <motion.h3 
//                   className="text-xl font-semibold mb-2 text-gray-900 dark:text-white"
//                   whileHover={{ x: 5 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 >
//                   {project.title}
//                 </motion.h3>
//                 <motion.p 
//                   className="text-gray-600 dark:text-gray-300 mb-4"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.2 }}
//                 >
//                   {project.description}
//                 </motion.p>

//                 {/* Technologies */}
//                 <motion.div 
//                   className="flex flex-wrap gap-2 mb-4"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.3 }}
//                 >
//                   {project.technologies.map((tech, techIndex) => (
//                     <motion.span
//                       key={techIndex}
//                       className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       {tech}
//                     </motion.span>
//                   ))}
//                 </motion.div>

//                 {/* Links */}
//                 <motion.div 
//                   className="flex gap-4"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.4 }}
//                 >
//                   <motion.a
//                     href={project.githubLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors font-medium"
//                     whileHover={{ x: 5 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <FaGithub className="h-5 w-5" />
//                     <span>Code</span>
//                   </motion.a>
//                   <motion.a
//                     href={project.demoLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors font-medium"
//                     whileHover={{ x: 5 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <FaExternalLinkAlt className="h-5 w-5" />
//                     <span>Live Demo</span>
//                   </motion.a>
//                 </motion.div>
//               </div>
//             </motion.div>
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

        {/* Header */}
        <motion.div
          className="text-center mb-20"
          {...fadeInUp}
        >

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 mb-6">

            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />

            <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
              Featured Work
            </span>

          </div>

          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-6">

            My{' '}

            <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">
              Projects
            </span>

          </h2>

          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Explore some of my best projects built using
            modern technologies like React, Next.js,
            Node.js, MongoDB, and Tailwind CSS.
          </p>

        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >

          {projects.map((project, index) => (
            <motion.article
              key={index}
              variants={fadeInUp}
              {...cardHoverSmall}
              className="
                group
                relative
                overflow-hidden
                rounded-[30px]
                border border-white/20
                bg-white/70 dark:bg-slate-900/70
                backdrop-blur-2xl
                shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                hover:shadow-[0_20px_60px_rgba(6,182,212,0.18)]
                transition-all duration-500
              "
            >

              {/* Image */}
              <div className="relative h-60 overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="
                    object-cover
                    transition-transform duration-700
                    group-hover:scale-110
                  "
                  sizes="
                    (max-width:768px) 100vw,
                    (max-width:1200px) 50vw,
                    33vw
                  "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Floating Buttons */}
                <div className="absolute top-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition duration-500">

                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.1
                    }}
                    whileTap={{
                      scale: 0.95
                    }}
                    className="
                      w-11 h-11
                      rounded-full
                      bg-white/90
                      text-slate-800
                      flex items-center justify-center
                      shadow-lg
                      hover:bg-cyan-500
                      hover:text-white
                      transition-all duration-300
                    "
                  >
                    <FaGithub className="text-lg" />
                  </motion.a>

                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.1
                    }}
                    whileTap={{
                      scale: 0.95
                    }}
                    className="
                      w-11 h-11
                      rounded-full
                      bg-white/90
                      text-slate-800
                      flex items-center justify-center
                      shadow-lg
                      hover:bg-emerald-500
                      hover:text-white
                      transition-all duration-300
                    "
                  >
                    <FaExternalLinkAlt className="text-sm" />
                  </motion.a>

                </div>

                {/* Project Title */}
                <div className="absolute bottom-5 left-5 right-5">

                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>

                </div>
              </div>

              {/* Content */}
              <div className="p-7">

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">

                  {project.technologies.map(
                    (tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{
                          scale: 1.05
                        }}
                        whileTap={{
                          scale: 0.95
                        }}
                        className="
                          px-4 py-2
                          rounded-full
                          text-sm font-semibold
                          bg-gradient-to-r
                          from-cyan-500/10
                          to-emerald-500/10
                          text-cyan-700
                          dark:text-cyan-300
                          border border-cyan-200/50
                          dark:border-cyan-500/20
                        "
                      >
                        {tech}
                      </motion.span>
                    )
                  )}

                </div>

                {/* Buttons */}
                <div className="flex items-center gap-4">

                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.03
                    }}
                    whileTap={{
                      scale: 0.97
                    }}
                    className="
                      flex-1
                      flex items-center justify-center gap-2
                      px-5 py-3
                      rounded-2xl
                      border border-slate-200
                      dark:border-slate-700
                      bg-white dark:bg-slate-800
                      text-slate-700 dark:text-white
                      font-semibold
                      hover:border-cyan-400
                      hover:text-cyan-500
                      transition-all duration-300
                    "
                  >

                    <FaGithub />

                    Code

                  </motion.a>

                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.03
                    }}
                    whileTap={{
                      scale: 0.97
                    }}
                    className="
                      flex-1
                      flex items-center justify-center gap-2
                      px-5 py-3
                      rounded-2xl
                      bg-gradient-to-r
                      from-cyan-500
                      to-emerald-500
                      text-white
                      font-semibold
                      shadow-lg
                      hover:shadow-cyan-500/30
                      transition-all duration-300
                    "
                  >

                    <FaExternalLinkAlt />

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