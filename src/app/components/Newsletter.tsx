// 'use client'

// import { motion } from 'framer-motion';
// import { fadeInUp, scaleIn } from '@/utils/animations';

// export default function Newsletter() {
//   return (
//     <section className="py-24 bg-gradient-to-r from-indigo-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
//       <div className="container max-w-7xl mx-auto px-4">
//         <motion.div 
//           className="bg-white dark:bg-dark/50 rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6"
//           {...fadeInUp}
//         >
//           {/* Text Section */}
//           <div className="max-w-xl text-center md:text-left">
//             <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
//               Subscribe to My Newsletter
//             </h2>
//             <p className="text-gray-600 dark:text-gray-300 text-lg">
//               Get the latest updates on my <span className="font-semibold text-primary">projects</span>, <span className="font-semibold text-primary">blog posts</span>, and <span className="font-semibold text-primary">tech insights</span> delivered straight to your inbox.
//             </p>
//           </div>

//           {/* Form Section */}
//           <form className="flex flex-col sm:flex-row w-full md:w-auto gap-4">
//             <motion.input
//               type="email"
//               placeholder="Enter your email"
//               className="flex-1 px-5 py-3 rounded-lg border dark:text-white border-gray-300 dark:border-gray-600 bg-white dark:bg-dark text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
//               required
//               {...scaleIn}
//             />
//             <motion.button
//               type="submit"
//               className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-all font-medium"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Subscribe
//             </motion.button>
//           </form>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



'use client'

import { motion } from 'framer-motion'
import { fadeInUp, scaleIn } from '@/utils/animations'
import { FiSend } from 'react-icons/fi'

export default function Newsletter() {
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-br from-slate-50 via-cyan-50 to-emerald-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-400/20 blur-3xl rounded-full" />

      <div className="container max-w-7xl mx-auto px-4 relative z-10">

        <motion.div
          className="relative overflow-hidden rounded-[32px] border border-white/20 bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
          {...fadeInUp}
        >

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-emerald-500/5" />

          <div className="relative px-8 py-14 md:px-16 md:py-16 flex flex-col lg:flex-row items-center justify-between gap-10">

            {/* LEFT CONTENT */}
            <div className="max-w-2xl text-center lg:text-left">

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
                  Weekly Developer Insights
                </span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-black leading-tight text-slate-900 dark:text-white mb-5">
                Subscribe to My
                <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                  {' '}Newsletter
                </span>
              </h2>

              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                Get the latest updates on my
                <span className="font-semibold text-cyan-600 dark:text-cyan-400">
                  {' '}projects
                </span>,
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  {' '}tech blogs
                </span>,
                and
                <span className="font-semibold text-cyan-600 dark:text-cyan-400">
                  {' '}developer insights
                </span>{' '}
                delivered directly to your inbox.
              </p>
            </div>

            {/* RIGHT FORM */}
            <motion.form
              className="w-full max-w-xl"
              {...scaleIn}
            >

              <div className="flex flex-col sm:flex-row items-center gap-4">

                <div className="relative w-full">

                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="
                      w-full
                      px-6 py-4
                      rounded-2xl
                      border border-slate-200 dark:border-slate-700
                      bg-white/80 dark:bg-slate-800/80
                      backdrop-blur-xl
                      text-slate-800 dark:text-white
                      placeholder:text-slate-400
                      outline-none
                      focus:ring-4 focus:ring-cyan-500/20
                      focus:border-cyan-400
                      transition-all duration-300
                      shadow-lg
                    "
                    required
                  />

                </div>

                <motion.button
                  type="submit"
                  className="
                    group
                    flex items-center justify-center gap-2
                    whitespace-nowrap
                    px-8 py-4
                    rounded-2xl
                    bg-gradient-to-r from-cyan-500 to-emerald-500
                    text-white
                    font-semibold
                    shadow-xl
                    hover:shadow-cyan-500/30
                    transition-all duration-300
                  "
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                  <FiSend className="group-hover:translate-x-1 transition-transform" />
                </motion.button>

              </div>

              <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 text-center sm:text-left">
                No spam. Unsubscribe anytime.
              </p>

            </motion.form>

          </div>
        </motion.div>
      </div>
    </section>
  )
}