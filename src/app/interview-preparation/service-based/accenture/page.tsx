import {
  FaBrain,
  FaLaptopCode,
  FaUserTie,
  FaFileAlt,
  FaCheckCircle
} from 'react-icons/fa'

export default function TCSPreparation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50">

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
            border-cyan-100
            mb-8
          ">

            <span className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse" />

            <span className="text-sm font-semibold text-slate-700">
              TCS Placement Preparation
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
              from-cyan-500
              via-blue-500
              to-indigo-600
              bg-clip-text
              text-transparent
            ">
              TCS Preparation
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

            Complete preparation roadmap
            for TCS placement including aptitude,
            coding, technical interview,
            HR interview & resume tips.

          </p>

        </div>

        {/* Sections */}
        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
          gap-8
        ">

          {/* Aptitude */}
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

              <FaBrain className="text-4xl text-cyan-600" />

            </div>

            <h2 className="
              text-3xl
              font-black
              text-slate-800
              mb-6
            ">
              Aptitude
            </h2>

            <div className="
              space-y-4
              text-slate-600
              text-lg
            ">

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-cyan-500" />
                Quantitative Aptitude
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-cyan-500" />
                Logical Reasoning
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-cyan-500" />
                Verbal Ability
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

          {/* Coding */}
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

              <FaLaptopCode className="text-4xl text-emerald-600" />

            </div>

            <h2 className="
              text-3xl
              font-black
              text-slate-800
              mb-6
            ">
              Coding Round
            </h2>

            <div className="
              space-y-4
              text-slate-600
              text-lg
            ">

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-emerald-500" />
                Arrays & Strings
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-emerald-500" />
                Basic DSA
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-emerald-500" />
                Previous Questions
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

          {/* Technical */}
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

              <FaFileAlt className="text-4xl text-purple-600" />

            </div>

            <h2 className="
              text-3xl
              font-black
              text-slate-800
              mb-6
            ">
              Technical
            </h2>

            <div className="
              space-y-4
              text-slate-600
              text-lg
            ">

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-purple-500" />
                DBMS Questions
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-purple-500" />
                OOPs Concepts
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-purple-500" />
                CN & OS
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

          {/* HR */}
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
              HR Interview
            </h2>

            <div className="
              space-y-4
              text-slate-600
              text-lg
            ">

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-pink-500" />
                Tell me about yourself
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-pink-500" />
                Strengths & Weakness
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-pink-500" />
                Project Explanation
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