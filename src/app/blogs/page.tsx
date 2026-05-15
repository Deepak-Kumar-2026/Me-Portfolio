// 'use client'

// import { FaCode, FaBrain, FaGraduationCap, FaPaintBrush } from 'react-icons/fa'
// import { motion } from 'framer-motion'
// import { fadeInUp, fadeInDown, fadeIn, staggerContainer, cardHover } from '@/utils/animations'

// export default function Blogs() {
//   return (
//     <div className="container max-w-7xl mx-auto py-20 px-6">

//       {/* Heading */}
//       <motion.h1
//         className="text-5xl md:text-6xl font-extrabold mb-12 text-center text-gray-900 dark:text-white tracking-tight"
//         {...fadeInDown}
//       >
//         My Journey
//       </motion.h1>

//       {/* Introduction */}
//       <motion.section
//         className="mb-16"
//         {...fadeInUp}
//       >
//         <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto text-center">
//           Hello! I’m <span className="text-primary font-semibold">Deepak Kumar</span>, a 
//           <span className="text-primary font-semibold"> final-year B.Tech student</span> passionate about 
//           <span className="text-primary font-semibold"> Full Stack Web Development</span>. I specialize in the 
//           <span className="text-primary font-semibold"> MERN stack</span> and love building modern web applications. 
//           Currently, I'm also exploring 
//           <span className="text-primary font-semibold"> AI & Machine Learning</span> while enhancing my 
//           <span className="text-primary font-semibold"> UI/UX & Figma</span> skills.
//         </p>
//       </motion.section>

//       {/* Cards Section */}
//       <motion.section
//         {...fadeIn}
//         transition={{ delay: 0.3 }}
//       >
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
//           variants={staggerContainer}
//           initial="initial"
//           animate="animate"
//         >

//           {/* Full Stack */}
//           <motion.div
//             className="bg-white dark:bg-dark/60 border border-gray-200 dark:border-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 text-center"
//             variants={fadeInUp}
//             {...cardHover}
//           >
//             <FaCode className="h-12 w-12 text-primary mb-6 mx-auto" />
//             <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-800 dark:text-white">
//               Full Stack Development
//             </h3>
//             <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
//               Building powerful web apps using 
//               <span className="text-primary font-medium"> MERN Stack</span>.
//             </p>
//           </motion.div>

//           {/* AI & ML */}
//           <motion.div
//             className="bg-white dark:bg-dark/60 border border-gray-200 dark:border-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 text-center"
//             variants={fadeInUp}
//             {...cardHover}
//           >
//             <FaBrain className="h-12 w-12 text-primary mb-6 mx-auto" />
//             <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-800 dark:text-white">
//               AI & Machine Learning
//             </h3>
//             <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
//               Exploring <span className="text-primary font-medium">AI, ML & Python</span>.
//             </p>
//           </motion.div>

//           {/* Education */}
//           <motion.div
//             className="bg-white dark:bg-dark/60 border border-gray-200 dark:border-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 text-center"
//             variants={fadeInUp}
//             {...cardHover}
//           >
//             <FaGraduationCap className="h-12 w-12 text-primary mb-6 mx-auto" />
//             <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-800 dark:text-white">
//               Education
//             </h3>
//             <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
//               Pursuing <span className="text-primary font-medium">B.Tech CSE</span>.
//             </p>
//           </motion.div>

//           {/* UI / UX (Second Row Center Card) */}
//           <motion.div
//             className="md:col-span-3 flex justify-center"
//             variants={fadeInUp}
//           >
//             <div className="bg-white dark:bg-dark/60 border border-gray-200 dark:border-white/10 backdrop-blur-xl p-8 w-full md:w-1/2 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 text-center">
//               <FaPaintBrush className="h-12 w-12 text-primary mb-6 mx-auto" />
//               <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-800 dark:text-white">
//                 UI / UX & Figma
//               </h3>
//               <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
//                 Learning <span className="text-primary font-medium">Figma, wireframing & UX design</span>.
//               </p>
//             </div>
//           </motion.div>

//         </motion.div>
//       </motion.section>

//     </div>
//   )
// }




// 'use client'

// import {
//   FaCode,
//   FaBrain,
//   FaGraduationCap,
//   FaPaintBrush
// } from 'react-icons/fa'

// import { motion } from 'framer-motion'

// import {
//   fadeInUp,
//   fadeInDown,
//   fadeIn,
//   staggerContainer,
//   cardHover
// } from '@/utils/animations'

// export default function Blogs() {
//   return (
//     <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-cyan-50 to-emerald-50">

//       {/* Background Effects */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-200/30 blur-3xl rounded-full" />
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/30 blur-3xl rounded-full" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

//         {/* HERO */}
//         <motion.div
//           className="text-center mb-24"
//           {...fadeInDown}
//         >

//           <motion.div
//             className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-100 bg-white/70 backdrop-blur-xl shadow-sm mb-8"
//             {...fadeIn}
//           >
//             <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
//             <span className="text-sm font-medium text-slate-600">
//               My Learning Journey
//             </span>
//           </motion.div>

//           <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
//             My Journey
//           </h1>

//           <div className="max-w-4xl mx-auto rounded-[40px] border border-white/60 bg-white/70 backdrop-blur-2xl shadow-2xl p-8 md:p-12">

//             <p className="text-lg md:text-xl leading-relaxed text-slate-600">

//               Hello! I’m{' '}
//               <span className="font-bold text-cyan-600">
//                 Deepak Kumar
//               </span>
//               , a passionate final-year{' '}
//               <span className="font-bold text-emerald-600">
//                 B.Tech Computer Science
//               </span>{' '}
//               student focused on creating modern digital experiences.

//               <br />
//               <br />

//               I specialize in{' '}
//               <span className="font-bold text-blue-600">
//                 Full Stack Web Development
//               </span>{' '}
//               using the MERN stack and continuously improve my skills in{' '}
//               <span className="font-bold text-cyan-600">
//                 AI, Machine Learning, UI/UX
//               </span>{' '}
//               and scalable application development.

//               <br />
//               <br />

//               My goal is to build impactful, high-performance applications
//               with clean design and real-world usability.
//             </p>
//           </div>
//         </motion.div>

//         {/* CARDS */}
//         <motion.section
//           {...fadeIn}
//           transition={{ delay: 0.3 }}
//         >

//           <motion.div
//             className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
//             variants={staggerContainer}
//             initial="initial"
//             animate="animate"
//           >

//             {/* FULL STACK */}
//             <motion.div
//               className="group rounded-[32px] border border-white bg-white/70 backdrop-blur-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
//               variants={fadeInUp}
//               {...cardHover}
//             >

//               <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-all duration-300">
//                 <FaCode className="h-8 w-8 text-cyan-600" />
//               </div>

//               <h3 className="text-2xl font-bold mb-4 text-slate-800">
//                 Full Stack Development
//               </h3>

//               <p className="text-lg leading-relaxed text-slate-600">
//                 Building modern and scalable applications using{' '}
//                 <span className="font-semibold text-cyan-600">
//                   MERN Stack
//                 </span>.
//               </p>
//             </motion.div>

//             {/* AI */}
//             <motion.div
//               className="group rounded-[32px] border border-white bg-white/70 backdrop-blur-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
//               variants={fadeInUp}
//               {...cardHover}
//             >

//               <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-100 to-cyan-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-all duration-300">
//                 <FaBrain className="h-8 w-8 text-emerald-600" />
//               </div>

//               <h3 className="text-2xl font-bold mb-4 text-slate-800">
//                 AI & Machine Learning
//               </h3>

//               <p className="text-lg leading-relaxed text-slate-600">
//                 Exploring{' '}
//                 <span className="font-semibold text-emerald-600">
//                   AI, ML & Python
//                 </span>{' '}
//                 technologies.
//               </p>
//             </motion.div>

//             {/* EDUCATION */}
//             <motion.div
//               className="group rounded-[32px] border border-white bg-white/70 backdrop-blur-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
//               variants={fadeInUp}
//               {...cardHover}
//             >

//               <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-all duration-300">
//                 <FaGraduationCap className="h-8 w-8 text-blue-600" />
//               </div>

//               <h3 className="text-2xl font-bold mb-4 text-slate-800">
//                 Education
//               </h3>

//               <p className="text-lg leading-relaxed text-slate-600">
//                 Pursuing{' '}
//                 <span className="font-semibold text-blue-600">
//                   B.Tech CSE
//                 </span>{' '}
//                 with hands-on project experience.
//               </p>
//             </motion.div>

//             {/* UI UX */}
//             <motion.div
//               className="group rounded-[32px] border border-white bg-white/70 backdrop-blur-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
//               variants={fadeInUp}
//               {...cardHover}
//             >

//               <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-100 to-orange-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-all duration-300">
//                 <FaPaintBrush className="h-8 w-8 text-pink-600" />
//               </div>

//               <h3 className="text-2xl font-bold mb-4 text-slate-800">
//                 UI / UX & Figma
//               </h3>

//               <p className="text-lg leading-relaxed text-slate-600">
//                 Learning modern{' '}
//                 <span className="font-semibold text-pink-600">
//                   UI/UX Design
//                 </span>{' '}
//                 and Figma workflows.
//               </p>
//             </motion.div>

//           </motion.div>
//         </motion.section>
//       </div>
//     </div>
//   )
// }



'use client'

import {
  FaCode,
  FaBrain,
  FaWordpress,
  FaTools
} from 'react-icons/fa'

import { motion } from 'framer-motion'

import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer,
  cardHover
} from '@/utils/animations'

export default function Blogs() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-cyan-50 to-emerald-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-300/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/20 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        {/* HERO */}
        <motion.div
          className="text-center mb-24"
          {...fadeInDown}
        >

          <motion.div
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-100 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-sm mb-8"
            {...fadeIn}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />

            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
              My Professional Journey
            </span>

          </motion.div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h1>

          <div className="max-w-4xl mx-auto rounded-[40px] border border-white/60 bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl shadow-2xl p-8 md:p-12">

            <p className="text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-300">

              Hi, I’m{' '}

              <span className="font-bold text-cyan-600">
                Deepak Kumar
              </span>

              , a passionate{' '}

              <span className="font-bold text-emerald-600">
                Full Stack Developer
              </span>{' '}

              focused on creating scalable, modern, and user-friendly digital products.

              <br />
              <br />

              I specialize in{' '}

              <span className="font-bold text-blue-600">
                MERN Stack Development
              </span>{' '}

              while also exploring{' '}

              <span className="font-bold text-cyan-600">
                AI Development, Automation, and WordPress Solutions
              </span>.

              <br />
              <br />

              My mission is to build high-performance applications with clean UI, strong backend systems, and real-world impact.

            </p>

          </div>

        </motion.div>

        {/* SKILL CARDS */}
        <motion.section
          {...fadeIn}
          transition={{ delay: 0.3 }}
        >

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >

            {/* FULL STACK */}
            <motion.div
              className="group rounded-[32px] border border-white bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl p-8 shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-3 transition-all duration-500"
              variants={fadeInUp}
              {...cardHover}
            >

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-all duration-300">

                <FaCode className="h-8 w-8 text-cyan-600" />

              </div>

              <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">
                Full Stack Developer
              </h3>

              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">

                Building scalable web applications using{' '}

                <span className="font-semibold text-cyan-600">
                  React.js, Next.js, Node.js, Express.js & MongoDB
                </span>.

              </p>

            </motion.div>

            {/* AI */}
            <motion.div
              className="group rounded-[32px] border border-white bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl p-8 shadow-xl hover:shadow-emerald-500/20 hover:-translate-y-3 transition-all duration-500"
              variants={fadeInUp}
              {...cardHover}
            >

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-100 to-cyan-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-all duration-300">

                <FaBrain className="h-8 w-8 text-emerald-600" />

              </div>

              <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">
                AI Developer
              </h3>

              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">

                Exploring modern{' '}

                <span className="font-semibold text-emerald-600">
                  AI tools, Machine Learning, Python, APIs & Automation
                </span>{' '}

                for smart applications.

              </p>

            </motion.div>

            {/* WORDPRESS */}
            <motion.div
              className="group rounded-[32px] border border-white bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl p-8 shadow-xl hover:shadow-blue-500/20 hover:-translate-y-3 transition-all duration-500"
              variants={fadeInUp}
              {...cardHover}
            >

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-all duration-300">

                <FaWordpress className="h-8 w-8 text-blue-600" />

              </div>

              <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">
                WordPress Developer
              </h3>

              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">

                Creating professional{' '}

                <span className="font-semibold text-blue-600">
                  WordPress websites, landing pages, themes & responsive business sites
                </span>.

              </p>

            </motion.div>

            {/* TOOLS */}
            <motion.div
              className="group rounded-[32px] border border-white bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl p-8 shadow-xl hover:shadow-orange-500/20 hover:-translate-y-3 transition-all duration-500"
              variants={fadeInUp}
              {...cardHover}
            >

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-all duration-300">

                <FaTools className="h-8 w-8 text-orange-600" />

              </div>

              <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">
                Tools & Technologies
              </h3>

              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">

                VS Code, GitHub, Postman, Figma, Firebase, Vercel, Netlify, Tailwind CSS, Framer Motion & modern developer workflows.

              </p>

            </motion.div>

          </motion.div>

        </motion.section>

      </div>
    </div>
  )
}