'use client'

import Link from 'next/link'
import {
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'

import { useTheme } from '../context/ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()

  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false)

  const toggleMobileMenu = () =>
    setIsMobileMenuOpen(!isMobileMenuOpen)

//   const menuItems = [
//   { href: '/', label: 'Home' },
//   { href: '/about', label: 'About' },
//   { href: '/projects', label: 'Projects' },
//   { href: '/blogs', label: 'Experience' },
//   { href: '/achievements', label: 'Achievements' },
//   { href: '/certificates', label: 'Certificates' },
//   { href: '/contact', label: 'Contact' },
// ]

const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/learning-hub', label: 'Learning Hub' },
  { href: '/blogs', label: 'Experience' },
  { href: '/achievements', label: 'Achievements' },
  { href: '/certificates', label: 'Certificates' },
  { href: '/contact', label: 'Contact' },
]

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">

      <nav
        className="
          bg-white/70 dark:bg-slate-900/70
          backdrop-blur-2xl
          border border-white/20 dark:border-slate-700/40
          rounded-2xl
          shadow-[0_8px_32px_rgba(0,0,0,0.08)]
          transition-all duration-300
        "
      >
        <div className="px-5 lg:px-8">

          <div className="flex items-center justify-between h-18">

            {/* Logo */}
            <Link
              href="/"
              className="
                text-2xl md:text-3xl
                font-black
                tracking-tight
                bg-gradient-to-r
                from-cyan-500
                to-emerald-500
                bg-clip-text
                text-transparent
                hover:scale-105
                transition-transform duration-300
              "
            >
              NovaDev
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-3">

              {menuItems.map((item) => (
                <motion.div
                  key={item.href}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    className="
                      relative
                      px-4 py-2
                      rounded-xl
                      text-sm font-semibold
                      text-slate-700 dark:text-slate-200
                      hover:text-cyan-500
                      hover:bg-cyan-50
                      dark:hover:bg-slate-800
                      transition-all duration-300
                    "
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className="
                  ml-2
                  p-3
                  rounded-xl
                  bg-slate-100 dark:bg-slate-800
                  text-slate-700 dark:text-slate-200
                  hover:bg-cyan-100
                  dark:hover:bg-slate-700
                  transition-all duration-300
                "
                whileHover={{
                  scale: 1.08,
                  rotate: 8
                }}
                whileTap={{
                  scale: 0.92
                }}
              >
                {theme === 'dark' ? (
                  <SunIcon className="h-5 w-5 text-yellow-400" />
                ) : (
                  <MoonIcon className="h-5 w-5" />
                )}
              </motion.button>

            </div>

            {/* Mobile Button */}
            <motion.button
              className="
                md:hidden
                p-3
                rounded-xl
                bg-slate-100 dark:bg-slate-800
                text-slate-700 dark:text-slate-200
                hover:bg-cyan-100
                dark:hover:bg-slate-700
                transition-all duration-300
              "
              onClick={toggleMobileMenu}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </motion.button>

          </div>
        </div>

        {/* Mobile Menu */}
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
              className="
                md:hidden
                px-5 pb-5
              "
            >

              <div
                className="
                  mt-3
                  rounded-2xl
                  bg-white/80 dark:bg-slate-900/80
                  backdrop-blur-xl
                  border border-white/20 dark:border-slate-700/30
                  shadow-xl
                  overflow-hidden
                "
              >

                <div className="flex flex-col p-4 gap-2">

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
                        className="
                          block
                          px-4 py-3
                          rounded-xl
                          font-medium
                          text-slate-700 dark:text-slate-200
                          hover:bg-cyan-50
                          dark:hover:bg-slate-800
                          hover:text-cyan-500
                          transition-all duration-300
                        "
                        onClick={() =>
                          setIsMobileMenuOpen(false)
                        }
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}

                  {/* Theme Button */}
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
                    className="
                      flex items-center
                      gap-3
                      px-4 py-3
                      rounded-xl
                      font-medium
                      text-slate-700 dark:text-slate-200
                      hover:bg-cyan-50
                      dark:hover:bg-slate-800
                      hover:text-cyan-500
                      transition-all duration-300
                    "
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
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>
    </header>
  )
}