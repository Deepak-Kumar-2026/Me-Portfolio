// 'use client'

// import { FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa'
// import { motion } from 'framer-motion'
// import {
//   fadeInUp,
//   fadeInDown,
//   fadeIn,
//   staggerContainer,
//   cardHover,
//   cardHoverSmall
// } from '@/utils/animations'

// export default function About() {
//   return (
//     <div className="container max-w-7xl mx-auto py-20 px-6">
//       {/* Header */}
//       <motion.h1
//         className="text-5xl md:text-6xl font-extrabold mb-12 text-center text-gray-900 dark:text-white tracking-tight"
//         {...fadeInDown}
//       >
//         About Me
//       </motion.h1>

//       {/* Bio Section */}
//       <motion.section
//         className="mb-24"
//         {...fadeInUp}
//       >
//         <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto text-center">
//           Hi, I’m <span className="text-primary font-semibold">Deepak Kumar</span>, a final-year
//           <span className="text-primary font-semibold"> B.Tech Computer Science</span> student from Bihar.
//           I build **modern web applications** using the <span className="text-primary font-semibold">MERN stack</span>,
//           creating seamless experiences for users while crafting robust backend systems.

//           Beyond web development, I’m diving into <span className="text-primary font-semibold">Data Science</span>
//           to explore the power of data and analytics in solving real-world problems.
//           I’m passionate about learning, experimenting, and turning ideas into functional digital solutions.
//         </p>
//       </motion.section>

//       {/* Skills Section */}
//       <motion.section
//         className="mb-20"
//         {...fadeIn}
//         transition={{ delay: 0.2 }}
//       >
//         <motion.h2
//           className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10"
//           {...fadeInUp}
//         >
//           Skills
//         </motion.h2>

//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
//           variants={staggerContainer}
//           initial="initial"
//           animate="animate"
//         >
//           {/* Frontend */}
//           <motion.div
//             className="bg-white dark:bg-dark/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
//             variants={fadeInUp}
//             {...cardHover}
//           >
//             <FaCode className="h-10 w-10 text-primary mb-5" />
//             <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Frontend</h3>
//             <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-lg">
//               <li>HTML, CSS, JavaScript</li>
//               <li>React.js, Next.js</li>
//               <li>Tailwind CSS, Bootstrap</li>
//               <li>Responsive Web Design</li>
//             </ul>
//           </motion.div>

//           {/* Backend */}
//           <motion.div
//             className="bg-white dark:bg-dark/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
//             variants={fadeInUp}
//             {...cardHover}
//           >
//             <FaLaptopCode className="h-10 w-10 text-primary mb-5" />
//             <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Backend</h3>
//             <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-lg">
//               <li>Node.js, Express.js</li>
//               <li>REST API Development</li>
//               <li>MongoDB, Mongoose, MySQL</li>
//               <li>Deployment (Netlify, Vercel, Render)</li>
//             </ul>
//           </motion.div>

//           {/* Programming & Tools */}
//           <motion.div
//             className="bg-white dark:bg-dark/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
//             variants={fadeInUp}
//             {...cardHover}
//           >
//             <FaGraduationCap className="h-10 w-10 text-primary mb-5" />
//             <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Programming & Tools</h3>
//             <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-lg">
//               <li>Core Java, DSA (Basic)</li>
//               <li>Git, GitHub, VS Code</li>
//               <li>Postman</li>
//               <li>Continuous Learning & Collaboration</li>
//             </ul>
//           </motion.div>
//         </motion.div>
//       </motion.section>

//       {/* Education Section */}
//       <motion.section
//         {...fadeIn}
//         transition={{ delay: 0.4 }}
//       >
//         <motion.h2
//           className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10"
//           {...fadeInUp}
//         >
//           Education
//         </motion.h2>
//         <motion.div
//           className="max-w-3xl mx-auto"
//           variants={staggerContainer}
//           initial="initial"
//           animate="animate"
//         >
//           <motion.div
//             className="bg-white dark:bg-dark/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
//             variants={fadeInUp}
//             {...cardHoverSmall}
//           >
//             <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
//               Bachelor of Technology in Computer Science
//             </h3>
//             <p className="text-primary font-medium mb-3">Your University • 2022 - 2026</p>
//             <p className="text-gray-600 dark:text-gray-300 text-lg">
//               Focused on software engineering, web development, and modern technologies, with hands-on experience in
//               MERN stack and ongoing learning in Data Science.
//             </p>
//           </motion.div>
//         </motion.div>
//       </motion.section>
//     </div>
//   )
// }


'use client'

import {
  FaCode,
  FaLaptopCode,
  FaGraduationCap
} from 'react-icons/fa'

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
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-emerald-50">

      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        {/* HERO */}
        <motion.div
          className="text-center mb-28"
          {...fadeInDown}
        >

          <motion.div
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-100 bg-white/70 backdrop-blur-xl shadow-sm mb-8"
            {...fadeIn}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-medium text-slate-600">
              Full Stack Developer
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
            About Me
          </h1>

          <div className="max-w-4xl mx-auto rounded-[40px] border border-white/60 bg-white/70 backdrop-blur-2xl shadow-2xl p-8 md:p-12">

            <p className="text-lg md:text-xl leading-relaxed text-slate-600">
              Hi, I’m{' '}
              <span className="font-bold text-cyan-600">
                Deepak Kumar
              </span>
              , a passionate final-year{' '}
              <span className="font-bold text-emerald-600">
                B.Tech Computer Science
              </span>{' '}
              student from Bihar.

              <br />
              <br />

              I specialize in building modern, scalable, and responsive web applications using the{' '}
              <span className="font-bold text-blue-600">
                MERN Stack
              </span>{' '}
              with strong attention to clean UI/UX and performance optimization.

              <br />
              <br />

              Beyond development, I’m actively exploring{' '}
              <span className="font-bold text-cyan-600">
                Data Science
              </span>{' '}
              and continuously improving my backend, problem-solving, and system design skills.
            </p>
          </div>
        </motion.div>

        {/* SKILLS */}
        <motion.section
          className="mb-28"
          {...fadeIn}
          transition={{ delay: 0.2 }}
        >

          <motion.h2
            className="text-4xl md:text-5xl font-black text-center mb-16 text-slate-800"
            {...fadeInUp}
          >
            Skills & Expertise
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >

            {/* FRONTEND */}
            <motion.div
              className="group rounded-[32px] border border-white bg-white/70 backdrop-blur-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
              variants={fadeInUp}
              {...cardHover}
            >

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-all duration-300">
                <FaCode className="h-8 w-8 text-cyan-600" />
              </div>

              <h3 className="text-2xl font-bold mb-5 text-slate-800">
                Frontend
              </h3>

              <ul className="space-y-3 text-lg text-slate-600">
                <li>HTML, CSS, JavaScript</li>
                <li>React.js & Next.js</li>
                <li>Tailwind CSS & Bootstrap</li>
                <li>Responsive UI/UX Design</li>
              </ul>
            </motion.div>

            {/* BACKEND */}
            <motion.div
              className="group rounded-[32px] border border-white bg-white/70 backdrop-blur-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
              variants={fadeInUp}
              {...cardHover}
            >

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-100 to-cyan-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-all duration-300">
                <FaLaptopCode className="h-8 w-8 text-emerald-600" />
              </div>

              <h3 className="text-2xl font-bold mb-5 text-slate-800">
                Backend
              </h3>

              <ul className="space-y-3 text-lg text-slate-600">
                <li>Node.js & Express.js</li>
                <li>REST API Development</li>
                <li>MongoDB, MySQL</li>
                <li>Deployment & Hosting</li>
              </ul>
            </motion.div>

            {/* TOOLS */}
            <motion.div
              className="group rounded-[32px] border border-white bg-white/70 backdrop-blur-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
              variants={fadeInUp}
              {...cardHover}
            >

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-all duration-300">
                <FaGraduationCap className="h-8 w-8 text-blue-600" />
              </div>

              <h3 className="text-2xl font-bold mb-5 text-slate-800">
                Programming & Tools
              </h3>

              <ul className="space-y-3 text-lg text-slate-600">
                <li>Core Java & DSA</li>
                <li>Git & GitHub</li>
                <li>VS Code & Postman</li>
                <li>Continuous Learning</li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* EDUCATION */}
        <motion.section
          {...fadeIn}
          transition={{ delay: 0.4 }}
        >

          <motion.h2
            className="text-4xl md:text-5xl font-black text-center mb-16 text-slate-800"
            {...fadeInUp}
          >
            Education
          </motion.h2>

          <motion.div
            className="max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >

            <motion.div
              className="rounded-[36px] border border-white bg-white/70 backdrop-blur-2xl p-10 shadow-2xl text-center hover:-translate-y-2 transition-all duration-500"
              variants={fadeInUp}
              {...cardHoverSmall}
            >

              <h3 className="text-3xl font-bold mb-4 text-slate-800">
                Bachelor of Technology in Computer Science
              </h3>

              <p className="text-cyan-600 font-semibold text-lg mb-5">
                Your University • 2022 - 2026
              </p>

              <p className="text-lg leading-relaxed text-slate-600">
                Focused on software engineering, full-stack development,
                modern web technologies, and real-world project building
                using the MERN stack ecosystem.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  )
}