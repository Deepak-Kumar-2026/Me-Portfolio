

'use client'

import { useState } from 'react'

export default function Semester1() {

  const [search, setSearch] = useState('')
  const [downloading, setDownloading] = useState<number | null>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const semester1Subjects = [
  {
    code: 'BTAM-102',
    title: 'Mathematics-II',
    pdf: '/pdfs/maths-2.pdf',
    color: 'cyan',
    available: true
  },

  {
    code: 'BTCH-101',
    title: 'Chemistry-I',
    pdf: '/pdfs/chemistry.pdf',
    color: 'emerald',
    available: false
  },

  {
    code: 'BTCH-102',
    title: 'Chemistry-I Lab',
    pdf: '/pdfs/chemistry-lab.pdf',
    color: 'orange',
    available: false
  },

  {
    code: 'BTHU-101',
    title: 'English',
    pdf: '/pdfs/english.pdf',
    color: 'blue',
    available: false
  },

  {
    code: 'BTHU-102',
    title: 'English Lab',
    pdf: '/pdfs/english-lab.pdf',
    color: 'purple',
    available: false
  },

  {
    code: 'BTME-102',
    title: 'Workshop / Manufacturing Practices',
    pdf: '/pdfs/workshop.pdf',
    color: 'pink',
    available: false
  },

  {
    code: 'BTCS-101',
    title: 'Programming for Problem Solving',
    pdf: '/pdfs/programming.pdf',
    color: 'yellow',
    available: true
  },

  {
    code: 'BTCS-102',
    title: 'Programming for Problem Solving Lab',
    pdf: '/pdfs/programming-lab.pdf',
    color: 'emerald',
    available: false
  }
]

  const filteredNotes = semester1Subjects.filter((subject) =>
    subject.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-cyan-50">

      <section className="max-w-7xl mx-auto px-6 pt-32 pb-20">

        {/* Heading */}
        <div className="text-center mb-20">

          <div className="
            inline-flex
            items-center
            gap-3
            px-5
            py-2
            rounded-full
            bg-white
            shadow-md
            border
            border-emerald-100
            mb-8
          ">

            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />

            <span className="text-sm font-semibold text-slate-700">
              Semester 1 Resources
            </span>

          </div>

          <h1 className="
            text-5xl
            md:text-7xl
            font-black
            mb-6
          ">

            <span className="
              bg-gradient-to-r
              from-emerald-500
              via-cyan-500
              to-blue-600
              bg-clip-text
              text-transparent
            ">
              Semester 1 Notes
            </span>

          </h1>

          <p className="
            max-w-3xl
            mx-auto
            text-lg
            md:text-2xl
            leading-relaxed
            text-slate-600
          ">

            Access notes, handwritten PDFs,
            assignments, PYQs, and study resources
            for Semester 1.

          </p>

        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-16">

          <input
            type="text"
            placeholder="Search subjects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              px-6
              py-4
              rounded-3xl
              bg-white
              shadow-lg
              border
              border-emerald-100
              outline-none
              text-lg
            "
          />

        </div>

        {/* Notes Cards */}
        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
        ">

          {filteredNotes.map((subject, index) => (

            <div
              key={index}
              className="
                bg-white/80
                backdrop-blur-xl
                rounded-3xl
                p-8
                shadow-xl
                border
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >

              <p className="text-sm font-semibold text-slate-500 mb-2">
                {subject.code}
              </p>

              <h2 className="text-2xl font-black text-slate-800 mb-6">
                {subject.title}
              </h2>

              {/* IF NOTES AVAILABLE */}
              {subject.available ? (

                <button
                  onClick={() => {

                    if (activeIndex !== null) return

                    setActiveIndex(index)
                    setDownloading(10)

                    let count = 10

                    const interval = setInterval(() => {

                      count--

                      setDownloading(count)

                      if (count === 0) {

                        clearInterval(interval)

                        window.open(subject.pdf, '_blank')

                        setDownloading(null)
                        setActiveIndex(null)

                      }

                    }, 1000)

                  }}

                  className={`
                    relative
                    overflow-hidden
                    inline-flex
                    items-center
                    justify-center
                    px-6
                    py-3
                    rounded-2xl
                    text-white
                    font-bold
                    text-lg
                    shadow-xl
                    transition-all
                    duration-300
                    hover:scale-105
                    active:scale-95
                    ${
                      subject.color === 'emerald'
                        ? 'bg-gradient-to-r from-emerald-500 to-emerald-700'
                        : subject.color === 'cyan'
                        ? 'bg-gradient-to-r from-cyan-500 to-cyan-700'
                        : subject.color === 'yellow'
                        ? 'bg-gradient-to-r from-yellow-500 to-yellow-700'
                        : subject.color === 'orange'
                        ? 'bg-gradient-to-r from-orange-500 to-orange-700'
                        : subject.color === 'blue'
                        ? 'bg-gradient-to-r from-blue-500 to-blue-700'
                        : subject.color === 'purple'
                        ? 'bg-gradient-to-r from-purple-500 to-purple-700'
                        : 'bg-gradient-to-r from-pink-500 to-pink-700'
                    }
                  `}
                >

                  <span className="relative z-10">

                    {
                      activeIndex === index
                        ? `Downloading in ${downloading}s`
                        : 'Download PDF'
                    }

                  </span>

                </button>

              ) : (

                <div className="
                  inline-flex
                  items-center
                  justify-center
                  px-6
                  py-3
                  rounded-2xl
                  bg-slate-200
                  text-slate-600
                  font-bold
                  text-lg
                ">

                  🚧 Coming Soon

                </div>

              )}

            </div>

          ))}

        </div>

      </section>

    </div>
  )
}