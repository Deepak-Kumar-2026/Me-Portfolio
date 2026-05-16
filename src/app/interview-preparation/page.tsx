import {
  FaLaptopCode,
  FaBuilding,
  FaCode,
  FaUserTie,
  FaFileAlt,
  FaBrain
} from 'react-icons/fa'

export default function InterviewPreparation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">

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
            border-blue-100
            mb-8
          ">

            <span className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />

            <span className="text-sm font-semibold text-slate-700">
              Crack Your Dream Company 🚀
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
              from-blue-500
              via-cyan-500
              to-indigo-600
              bg-clip-text
              text-transparent
            ">
              Interview Preparation
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

            Complete placement preparation platform
            for Service Based & Product Based companies,
            including DSA, aptitude, HR interview,
            resume building & coding resources.

          </p>

        </div>

        {/* Cards */}
        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-8
        ">

          {/* Service Based */}
          <a
            href="/interview-preparation/service-based"
            className="
              group
              relative
              overflow-hidden
              bg-white/80
              backdrop-blur-xl
              rounded-3xl
              p-8
              shadow-xl
              border
              border-cyan-100
              hover:-translate-y-3
              hover:shadow-cyan-300/40
              transition-all
              duration-500
            "
          >

            <div className="
              absolute
              top-0
              right-0
              w-32
              h-32
              bg-cyan-200/30
              blur-3xl
              rounded-full
            " />

            <div className="
              relative
              z-10
              w-20
              h-20
              rounded-3xl
              bg-gradient-to-br
              from-cyan-100
              to-blue-100
              flex
              items-center
              justify-center
              mb-8
              group-hover:scale-110
              transition-all
            ">

              <FaBuilding className="text-4xl text-cyan-600" />

            </div>

            <h2 className="
              relative
              z-10
              text-3xl
              font-black
              text-slate-800
              mb-5
              group-hover:text-cyan-600
              transition-all
            ">
              Service Based
            </h2>

            <p className="
              relative
              z-10
              text-lg
              leading-relaxed
              text-slate-600
            ">

              TCS, Infosys, Wipro,
              Capgemini, Accenture,
              Cognizant & more.

            </p>

            <div className="
              relative
              z-10
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

              Start Preparation →

            </div>

          </a>

          {/* Product Based */}
          <a
            href="/interview-preparation/product-based"
            className="
              group
              relative
              overflow-hidden
              bg-white/80
              backdrop-blur-xl
              rounded-3xl
              p-8
              shadow-xl
              border
              border-purple-100
              hover:-translate-y-3
              hover:shadow-purple-300/40
              transition-all
              duration-500
            "
          >

            <div className="
              absolute
              top-0
              right-0
              w-32
              h-32
              bg-purple-200/30
              blur-3xl
              rounded-full
            " />

            <div className="
              relative
              z-10
              w-20
              h-20
              rounded-3xl
              bg-gradient-to-br
              from-purple-100
              to-pink-100
              flex
              items-center
              justify-center
              mb-8
              group-hover:scale-110
              transition-all
            ">

              <FaLaptopCode className="text-4xl text-purple-600" />

            </div>

            <h2 className="
              relative
              z-10
              text-3xl
              font-black
              text-slate-800
              mb-5
              group-hover:text-purple-600
              transition-all
            ">
              Product Based
            </h2>

            <p className="
              relative
              z-10
              text-lg
              leading-relaxed
              text-slate-600
            ">

              Google, Amazon,
              Microsoft, Adobe,
              Flipkart & more.

            </p>

            <div className="
              relative
              z-10
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

              Explore DSA →

            </div>

          </a>

          {/* DSA Sheet */}
          <div
            className="
              group
              relative
              overflow-hidden
              bg-white/80
              backdrop-blur-xl
              rounded-3xl
              p-8
              shadow-xl
              border
              border-emerald-100
              hover:-translate-y-3
              hover:shadow-emerald-300/40
              transition-all
              duration-500
            "
          >

            <div className="
              absolute
              top-0
              right-0
              w-32
              h-32
              bg-emerald-200/30
              blur-3xl
              rounded-full
            " />

            <div className="
              relative
              z-10
              w-20
              h-20
              rounded-3xl
              bg-gradient-to-br
              from-emerald-100
              to-cyan-100
              flex
              items-center
              justify-center
              mb-8
              group-hover:scale-110
              transition-all
            ">

              <FaCode className="text-4xl text-emerald-600" />

            </div>

            <h2 className="
              relative
              z-10
              text-3xl
              font-black
              text-slate-800
              mb-5
            ">
              DSA Sheet
            </h2>

            <p className="
              relative
              z-10
              text-lg
              leading-relaxed
              text-slate-600
            ">

              Arrays, Strings,
              Trees, Graphs,
              Dynamic Programming & more.

            </p>

            <div className="
              relative
              z-10
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

          {/* HR Interview */}
          <div
            className="
              group
              relative
              overflow-hidden
              bg-white/80
              backdrop-blur-xl
              rounded-3xl
              p-8
              shadow-xl
              border
              border-pink-100
              hover:-translate-y-3
              hover:shadow-pink-300/40
              transition-all
              duration-500
            "
          >

            <div className="
              absolute
              top-0
              right-0
              w-32
              h-32
              bg-pink-200/30
              blur-3xl
              rounded-full
            " />

            <div className="
              relative
              z-10
              w-20
              h-20
              rounded-3xl
              bg-gradient-to-br
              from-pink-100
              to-rose-100
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
              relative
              z-10
              text-3xl
              font-black
              text-slate-800
              mb-5
            ">
              HR Interview
            </h2>

            <p className="
              relative
              z-10
              text-lg
              leading-relaxed
              text-slate-600
            ">

              Tell me about yourself,
              strengths, weaknesses,
              project explanation & more.

            </p>

            <div className="
              relative
              z-10
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

          {/* Resume Building */}
          <div
            className="
              group
              relative
              overflow-hidden
              bg-white/80
              backdrop-blur-xl
              rounded-3xl
              p-8
              shadow-xl
              border
              border-orange-100
              hover:-translate-y-3
              hover:shadow-orange-300/40
              transition-all
              duration-500
            "
          >

            <div className="
              absolute
              top-0
              right-0
              w-32
              h-32
              bg-orange-200/30
              blur-3xl
              rounded-full
            " />

            <div className="
              relative
              z-10
              w-20
              h-20
              rounded-3xl
              bg-gradient-to-br
              from-orange-100
              to-yellow-100
              flex
              items-center
              justify-center
              mb-8
              group-hover:scale-110
              transition-all
            ">

              <FaFileAlt className="text-4xl text-orange-600" />

            </div>

            <h2 className="
              relative
              z-10
              text-3xl
              font-black
              text-slate-800
              mb-5
            ">
              Resume Building
            </h2>

            <p className="
              relative
              z-10
              text-lg
              leading-relaxed
              text-slate-600
            ">

              ATS resume templates,
              portfolio tips,
              GitHub & LinkedIn optimization.

            </p>

            <div className="
              relative
              z-10
              mt-8
              inline-flex
              items-center
              gap-2
              px-5
              py-3
              rounded-full
              bg-orange-50
              text-orange-700
              font-bold
              text-sm
            ">

              Coming Soon 🚧

            </div>

          </div>

          {/* Aptitude */}
          <div
            className="
              group
              relative
              overflow-hidden
              bg-white/80
              backdrop-blur-xl
              rounded-3xl
              p-8
              shadow-xl
              border
              border-indigo-100
              hover:-translate-y-3
              hover:shadow-indigo-300/40
              transition-all
              duration-500
            "
          >

            <div className="
              absolute
              top-0
              right-0
              w-32
              h-32
              bg-indigo-200/30
              blur-3xl
              rounded-full
            " />

            <div className="
              relative
              z-10
              w-20
              h-20
              rounded-3xl
              bg-gradient-to-br
              from-indigo-100
              to-blue-100
              flex
              items-center
              justify-center
              mb-8
              group-hover:scale-110
              transition-all
            ">

              <FaBrain className="text-4xl text-indigo-600" />

            </div>

            <h2 className="
              relative
              z-10
              text-3xl
              font-black
              text-slate-800
              mb-5
            ">
              Aptitude
            </h2>

            <p className="
              relative
              z-10
              text-lg
              leading-relaxed
              text-slate-600
            ">

              Quantitative Aptitude,
              Reasoning,
              Verbal Ability &
              Mock Tests.

            </p>

            <div className="
              relative
              z-10
              mt-8
              inline-flex
              items-center
              gap-2
              px-5
              py-3
              rounded-full
              bg-indigo-50
              text-indigo-700
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