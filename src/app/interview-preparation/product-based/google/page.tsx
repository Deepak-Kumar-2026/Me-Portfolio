import {
  FaCode,
  FaLaptopCode,
  FaProjectDiagram,
  FaUserTie,
  FaCheckCircle
} from 'react-icons/fa'

export default function GooglePreparation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">

      <section className="max-w-7xl mx-auto px-6 pt-32 pb-20">

        {/* Heading */}
        <div className="text-center mb-20">

          {/* Badge */}
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
            border-purple-100
            mb-8
          ">

            <span className="w-3 h-3 rounded-full bg-purple-500 animate-pulse" />

            <span className="text-sm font-semibold text-slate-700">
              Google Interview Preparation 🚀
            </span>

          </div>

          {/* Heading */}
          <h1 className="
            text-5xl
            md:text-7xl
            font-black
            mb-6
          ">

            <span className="
              bg-gradient-to-r
              from-purple-500
              via-pink-500
              to-indigo-600
              bg-clip-text
              text-transparent
            ">
              Google Preparation
            </span>

          </h1>

          {/* Description */}
          <p className="
            max-w-4xl
            mx-auto
            text-lg
            md:text-2xl
            leading-relaxed
            text-slate-600
          ">

            Complete roadmap for cracking Google
            including DSA, system design,
            coding interview, projects,
            resume & behavioral interview.

          </p>

        </div>

        {/* Cards */}
        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
          gap-8
        ">

          {/* DSA */}
          <div className="
            group
            bg-white/80
            backdrop-blur-xl
            rounded-3xl
            p-8
            shadow-xl
            border
            border-purple-100
            hover:-translate-y-3
            transition-all
            duration-500
          ">

            <div className="
              w-20
              h-20
              rounded-3xl
              bg-purple-100
              flex
              items-center
              justify-center
              mb-8
              group-hover:scale-110
              transition-all
            ">

              <FaCode className="text-4xl text-purple-600" />

            </div>

            <h2 className="
              text-3xl
              font-black
              text-slate-800
              mb-6
            ">
              DSA
            </h2>

            <div className="
              space-y-4
              text-slate-600
              text-lg
            ">

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-purple-500" />
                Arrays & Strings
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-purple-500" />
                Trees & Graphs
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-purple-500" />
                Dynamic Programming
              </div>

            </div>

            <div className="
              mt-8
              inline-flex
              items-center
              gap-2
              px-5
              py-3
              rounded-full
              bg-purple-50
              text-purple-700
              font-bold
              text-sm
            ">

              Coming Soon 🚧

            </div>

          </div>

          {/* Coding Interview */}
          <div className="
            group
            bg-white/80
            backdrop-blur-xl
            rounded-3xl
            p-8
            shadow-xl
            border
            border-cyan-100
            hover:-translate-y-3
            transition-all
            duration-500
          ">

            <div className="
              w-20
              h-20
              rounded-3xl
              bg-cyan-100
              flex
              items-center
              justify-center
              mb-8
              group-hover:scale-110
              transition-all
            ">

              <FaLaptopCode className="text-4xl text-cyan-600" />

            </div>

            <h2 className="
              text-3xl
              font-black
              text-slate-800
              mb-6
            ">
              Coding Interview
            </h2>

            <div className="
              space-y-4
              text-slate-600
              text-lg
            ">

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-cyan-500" />
                LeetCode Questions
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-cyan-500" />
                Mock Interviews
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-cyan-500" />
                Problem Solving
              </div>

            </div>

            <div className="
              mt-8
              inline-flex
              items-center
              gap-2
              px-5
              py-3
              rounded-full
              bg-cyan-50
              text-cyan-700
              font-bold
              text-sm
            ">

              Coming Soon 🚧

            </div>

          </div>

          {/* System Design */}
          <div className="
            group
            bg-white/80
            backdrop-blur-xl
            rounded-3xl
            p-8
            shadow-xl
            border
            border-emerald-100
            hover:-translate-y-3
            transition-all
            duration-500
          ">

            <div className="
              w-20
              h-20
              rounded-3xl
              bg-emerald-100
              flex
              items-center
              justify-center
              mb-8
              group-hover:scale-110
              transition-all
            ">

              <FaProjectDiagram className="text-4xl text-emerald-600" />

            </div>

            <h2 className="
              text-3xl
              font-black
              text-slate-800
              mb-6
            ">
              System Design
            </h2>

            <div className="
              space-y-4
              text-slate-600
              text-lg
            ">

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-emerald-500" />
                HLD Concepts
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-emerald-500" />
                LLD Concepts
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-emerald-500" />
                Scalability
              </div>

            </div>

            <div className="
              mt-8
              inline-flex
              items-center
              gap-2
              px-5
              py-3
              rounded-full
              bg-emerald-50
              text-emerald-700
              font-bold
              text-sm
            ">

              Coming Soon 🚧

            </div>

          </div>

          {/* HR / Behavioral */}
          <div className="
            group
            bg-white/80
            backdrop-blur-xl
            rounded-3xl
            p-8
            shadow-xl
            border
            border-pink-100
            hover:-translate-y-3
            transition-all
            duration-500
          ">

            <div className="
              w-20
              h-20
              rounded-3xl
              bg-pink-100
              flex
              items-center
              justify-center
              mb-8
              group-hover:scale-110
              transition-all
            ">

              <FaUserTie className="text-4xl text-pink-600" />

            </div>

            <h2 className="
              text-3xl
              font-black
              text-slate-800
              mb-6
            ">
              Behavioral
            </h2>

            <div className="
              space-y-4
              text-slate-600
              text-lg
            ">

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-pink-500" />
                Leadership Questions
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-pink-500" />
                Project Discussion
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-pink-500" />
                Communication Skills
              </div>

            </div>

            <div className="
              mt-8
              inline-flex
              items-center
              gap-2
              px-5
              py-3
              rounded-full
              bg-pink-50
              text-pink-700
              font-bold
              text-sm
            ">

              Coming Soon 🚧

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}