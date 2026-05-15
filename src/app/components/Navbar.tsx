// 'use client'
// import Link from 'next/link'
// import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import { useTheme } from '../context/ThemeContext'
// import { motion, AnimatePresence } from 'framer-motion'
// import { useState } from 'react'

// export default function Navbar() {
//   const { theme, toggleTheme } = useTheme();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

//   const menuItems = [
//     { href: '/', label: 'Home' },
//     { href: '/about', label: 'About' },
//     { href: '/projects', label: 'Projects' },
//     { href: '/blogs', label: 'My Journey' },
//     { href: '/contact', label: 'Contact' },
//   ];

//   return (
//     <nav className="fixed w-full bg-white/70 dark:bg-dark/70 backdrop-blur-lg z-50 shadow-md">
//       <div className="container max-w-7xl mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
          
//           {/* Logo */}
//           <Link href="/" className="text-2xl md:text-3xl font-extrabold text-primary hover:text-primary/80 transition-colors">
//             NovaDev
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             {menuItems.map((item) => (
//               <Link 
//                 key={item.href}
//                 href={item.href} 
//                 className="text-gray-700 dark:text-gray-300 font-medium hover:text-primary transition-colors"
//               >
//                 {item.label}
//               </Link>
//             ))}
//             <motion.button
//               onClick={toggleTheme}
//               className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               {theme === 'dark' ? <SunIcon className="h-5 w-5 text-yellow-400" /> : <MoonIcon className="h-5 w-5 text-gray-800" />}
//             </motion.button>
//           </div>

//           {/* Mobile Menu Button */}
//           <motion.button
//             className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
//             onClick={toggleMobileMenu}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             {isMobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
//           </motion.button>
//         </div>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {isMobileMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3 }}
//               className="md:hidden bg-white dark:bg-dark/80 rounded-lg mt-2 shadow-lg overflow-hidden"
//             >
//               <div className="flex flex-col py-4 space-y-3 px-4">
//                 {menuItems.map((item, index) => (
//                   <motion.div
//                     key={item.href}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: index * 0.05 }}
//                   >
//                     <Link
//                       href={item.href}
//                       className="block text-gray-700 dark:text-gray-300 font-medium py-2 hover:text-primary transition-colors"
//                       onClick={() => setIsMobileMenuOpen(false)}
//                     >
//                       {item.label}
//                     </Link>
//                   </motion.div>
//                 ))}
//                 <motion.div
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: menuItems.length * 0.05 }}
//                 >
//                   <button
//                     onClick={() => {
//                       toggleTheme();
//                       setIsMobileMenuOpen(false);
//                     }}
//                     className="flex items-center justify-start py-2 text-gray-700 dark:text-gray-300 font-medium hover:text-primary transition-colors w-full"
//                   >
//                     {theme === 'dark' ? (
//                       <>
//                         <SunIcon className="h-5 w-5 mr-2 text-yellow-400" /> Light Mode
//                       </>
//                     ) : (
//                       <>
//                         <MoonIcon className="h-5 w-5 mr-2 text-gray-800" /> Dark Mode
//                       </>
//                     )}
//                   </button>
//                 </motion.div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </nav>
//   );
// }



'use client'

import Link from 'next/link'
import { useState } from 'react'

import {
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'

import { useTheme } from '../context/ThemeContext'

import {
  motion,
  AnimatePresence
} from 'framer-motion'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()

  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false)

  const toggleMobileMenu = () =>
    setIsMobileMenuOpen(!isMobileMenuOpen)

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/blogs', label: 'Journey' },
    { href: '/contact', label: 'Contact' }
  ]

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">

        <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)]">

          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-emerald-500/5" />

          <div className="relative flex items-center justify-between px-6 py-4">

            {/* LOGO */}
            <Link
              href="/"
              className="group"
            >
              <h1 className="text-2xl md:text-3xl font-black tracking-tight bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
                NovaDev
              </h1>

              <span className="block text-[10px] md:text-xs text-slate-500 font-medium tracking-[3px] uppercase">
                Portfolio
              </span>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-2">

              {menuItems.map((item) => (
                <motion.div
                  key={item.href}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    className="relative px-5 py-2 rounded-full text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 hover:bg-white/60 dark:hover:bg-slate-800/60"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              {/* THEME BUTTON */}
              <motion.button
                onClick={toggleTheme}
                className="ml-3 w-11 h-11 rounded-2xl bg-white/60 dark:bg-slate-800/70 border border-white/20 flex items-center justify-center shadow-lg text-slate-700 dark:text-slate-200 hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
              >
                {theme === 'dark' ? (
                  <SunIcon className="h-5 w-5 text-yellow-400" />
                ) : (
                  <MoonIcon className="h-5 w-5" />
                )}
              </motion.button>
            </div>

            {/* MOBILE BUTTON */}
            <motion.button
              className="md:hidden w-11 h-11 rounded-2xl bg-white/60 dark:bg-slate-800/70 border border-white/20 flex items-center justify-center shadow-lg"
              onClick={toggleMobileMenu}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.92 }}
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6 text-slate-700 dark:text-white" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-slate-700 dark:text-white" />
              )}
            </motion.button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              exit={{
                opacity: 0,
                y: -20
              }}
              transition={{
                duration: 0.25
              }}
              className="md:hidden mt-4 overflow-hidden rounded-3xl border border-white/20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl shadow-2xl"
            >

              <div className="flex flex-col p-5 gap-3">

                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{
                      opacity: 0,
                      x: -20
                    }}
                    animate={{
                      opacity: 1,
                      x: 0
                    }}
                    transition={{
                      delay: index * 0.05
                    }}
                  >
                    <Link
                      href={item.href}
                      className="block rounded-2xl px-5 py-3 text-slate-700 dark:text-slate-300 font-semibold hover:bg-cyan-50 dark:hover:bg-slate-800 transition-all duration-300"
                      onClick={() =>
                        setIsMobileMenuOpen(false)
                      }
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                {/* THEME BUTTON */}
                <motion.button
                  initial={{
                    opacity: 0,
                    x: -20
                  }}
                  animate={{
                    opacity: 1,
                    x: 0
                  }}
                  transition={{
                    delay:
                      menuItems.length * 0.05
                  }}
                  onClick={() => {
                    toggleTheme()
                    setIsMobileMenuOpen(false)
                  }}
                  className="flex items-center gap-3 rounded-2xl px-5 py-3 text-slate-700 dark:text-slate-300 font-semibold hover:bg-cyan-50 dark:hover:bg-slate-800 transition-all duration-300"
                >
                  {theme === 'dark' ? (
                    <>
                      <SunIcon className="h-5 w-5 text-yellow-400" />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <MoonIcon className="h-5 w-5" />
                      Dark Mode
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* SPACER */}
      <div className="h-24" />
    </>
  )
}