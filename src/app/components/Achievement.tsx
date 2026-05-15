'use client'

import Image from 'next/image'
import { achievements } from '@/contents/achievements'

import { motion } from 'framer-motion'

export default function Achievements() {
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-br from-slate-50 via-cyan-50 to-emerald-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">

      {/* Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-400/20 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/20 blur-3xl rounded-full" />

      <div className="container relative z-10 max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-20">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 mb-6">

            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />

            <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
              My Achievements
            </span>

          </div>

          <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white">

            Achievements &{' '}

            <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">
              Rewards
            </span>

          </h2>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {achievements.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -10
              }}
              className="
                group
                rounded-[30px]
                overflow-hidden
                border border-white/20
                bg-white/70 dark:bg-slate-900/70
                backdrop-blur-2xl
                shadow-xl
                hover:shadow-cyan-500/20
                transition-all duration-500
              "
            >

              {/* Image */}
              <div className="relative h-60 overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="
                    object-cover
                    transition-transform duration-700
                    group-hover:scale-110
                  "
                />

                {/* Badge */}
                <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-white/90 text-slate-800 text-sm font-bold shadow-lg">
                  {item.badge}
                </div>

              </div>

              {/* Content */}
              <div className="p-7">

                <div className="flex items-center justify-between mb-3">

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <span className="text-cyan-500 font-semibold">
                    {item.year}
                  </span>

                </div>

                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>

              </div>

            </motion.div>

          ))}
        </div>
      </div>
    </section>
  )
}