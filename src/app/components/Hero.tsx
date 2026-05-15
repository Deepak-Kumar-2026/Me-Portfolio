// 'use client'

// import Link from 'next/link';
// import Image from 'next/image';
// import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import { fadeInUp, fadeIn, scaleIn } from '@/utils/animations';

// export default function Hero() {
//   return (
//     <section className="py-28 bg-gradient-to-r from-indigo-100 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
//       <div className="container max-w-7xl mx-auto px-4">
//         <div className="max-w-3xl mx-auto text-center">
          
//           {/* Profile Image */}
//           <motion.div 
//             className="flex justify-center items-center mb-6"
//             {...scaleIn}
//             transition={{ delay: 0.2 }}
//           >
//             <Image 
//               src="/profile.avif" 
//               alt="Profile" 
//               width={120} 
//               height={120} 
//               className="rounded-full w-32 h-32 object-cover ring-4 ring-primary" 
//             />
//           </motion.div>

//           {/* Heading */}
//           <motion.h1 
//             className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-900 dark:text-white tracking-tight"
//             {...fadeInUp}
//             transition={{ delay: 0.3 }}
//           >
//             Hi, I&apos;m <motion.span 
//               className="text-primary"
//               {...fadeIn}
//               transition={{ delay: 0.8 }}
//             >
//               Deepak Kumar
//             </motion.span>
//           </motion.h1>

//           {/* Subheading */}
//           <motion.p 
//             className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
//             {...fadeInUp}
//             transition={{ delay: 0.4 }}
//           >
//             Full Stack Developer | MERN Stack Enthusiast | Data Science Learner
//           </motion.p>

//           {/* Social Media Icons */}
//           <motion.div 
//             className="flex justify-center space-x-4 mb-8"
//             {...fadeInUp}
//             transition={{ delay: 0.5 }}
//           >
//             {[ 
//               { icon: FaGithub, url: 'https://github.com/Deepak-Kumar-2026' },
//               { icon: FaLinkedin, url: 'https://www.linkedin.com/in/deepak-kumar-46b739322/' },
//               { icon: FaTwitter, url: 'https://twitter.com/yourusername' },
//               { icon: FaInstagram, url: 'https://www.instagram.com/deepak_joshi58408/' },
//               { icon: FaYoutube, url: 'https://github.com/Deepak-Kumar-2026' },
//             ].map((social, idx) => (
//               <motion.a
//                 key={idx}
//                 href={social.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary transition-transform transform hover:scale-110"
//                 whileHover={{ scale: 1.2 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <social.icon />
//               </motion.a>
//             ))}
//           </motion.div>

//           {/* Buttons */}
//           <motion.div 
//             className="flex flex-col md:flex-row justify-center gap-4"
//             {...fadeInUp}
//             transition={{ delay: 0.6 }}
//           >
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Link
//                 href="/projects"
//                 className="bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
//               >
//                 View Projects
//               </Link>
//             </motion.div>
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Link
//                 href="/contact"
//                 className="bg-gray-500 dark:bg-gray-700 inline-block w-full md:w-auto text-gray-800 dark:text-white px-8 py-3 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors font-medium"
//               >
//                 Contact Me
//               </Link>
//             </motion.div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }



'use client'

import Link from 'next/link'
import Image from 'next/image'

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa'

import { motion } from 'framer-motion'

import {
  fadeInUp,
  fadeIn,
  scaleIn
} from '@/utils/animations'

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-cyan-50 to-emerald-50">

      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 w-full">

        <div className="max-w-4xl mx-auto text-center">

          {/* Status Badge */}
          <motion.div
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-100 bg-white/70 backdrop-blur-xl shadow-sm mb-10"
            {...fadeIn}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />

            <span className="text-sm font-medium text-slate-600">
              Available for Freelance & Collaboration
            </span>
          </motion.div>

          {/* Profile */}
          <motion.div
            className="flex justify-center items-center mb-8"
            {...scaleIn}
            transition={{ delay: 0.2 }}
          >
            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 blur-2xl opacity-30 scale-110" />

              <Image
                src="/profile.avif"
                alt="Deepak Kumar"
                width={150}
                height={150}
                className="relative rounded-full w-36 h-36 md:w-44 md:h-44 object-cover border-4 border-white shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-slate-900"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >

            Hi, I&apos;m{' '}

            <motion.span
              className="bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent"
              {...fadeIn}
              transition={{ delay: 0.8 }}
            >
              Deepak Kumar
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl leading-relaxed text-slate-600 max-w-3xl mx-auto mb-10"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            Full Stack Developer specializing in{' '}
            <span className="font-semibold text-cyan-600">
              MERN Stack
            </span>{' '}
            applications, responsive UI/UX, and modern web technologies.

            <br className="hidden md:block" />

            Passionate about building scalable digital experiences and exploring{' '}
            <span className="font-semibold text-emerald-600">
              Data Science & AI
            </span>.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            className="flex justify-center gap-5 mb-12"
            {...fadeInUp}
            transition={{ delay: 0.5 }}
          >
            {[
              {
                icon: FaGithub,
                url: 'https://github.com/Deepak-Kumar-2026'
              },
              {
                icon: FaLinkedin,
                url: 'https://www.linkedin.com/in/deepak-kumar-46b739322/'
              },
              {
                icon: FaTwitter,
                url: 'https://twitter.com/yourusername'
              },
              {
                icon: FaInstagram,
                url: 'https://www.instagram.com/deepak_joshi58408/'
              },
              {
                icon: FaYoutube,
                url: 'https://youtube.com/yourchannel'
              }
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
              >

                <div className="w-14 h-14 rounded-2xl border border-white bg-white/70 backdrop-blur-xl flex items-center justify-center text-slate-600 shadow-lg hover:shadow-2xl hover:bg-gradient-to-r hover:from-cyan-500 hover:to-emerald-500 hover:text-white transition-all duration-300">

                  <social.icon className="text-2xl" />

                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-5"
            {...fadeInUp}
            transition={{ delay: 0.6 }}
          >

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold shadow-2xl hover:shadow-cyan-200 transition-all duration-300"
              >
                View Projects
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-4 rounded-full border border-slate-200 bg-white/80 backdrop-blur-xl text-slate-700 font-semibold shadow-lg hover:bg-white transition-all duration-300"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}