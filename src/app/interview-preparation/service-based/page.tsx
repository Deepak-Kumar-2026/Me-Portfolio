import {
  FaBuilding,
  FaLaptopCode,
  FaUserTie,
  FaBrain
} from 'react-icons/fa'

export default function ServiceBased() {
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
              Service Based Company Preparation
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
              Service Based
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

            Complete preparation resources
            for service based companies
            including aptitude, coding,
            HR interview & technical interview.

          </p>

        </div>

        {/* Company Cards */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-8
        ">

          {/* TCS */}
          <a
            href="/interview-preparation/service-based/tcs"
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

            {/* Glow */}
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

            {/* Icon */}
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

            {/* Title */}
            <h2 className="
              relative
              z-10
              text-4xl
              font-black
              text-slate-800
              mb-5
              group-hover:text-cyan-600
              transition-all
            ">
              TCS
            </h2>

            {/* Features */}
            <div className="
              relative
              z-10
              space-y-4
              text-slate-600
              text-lg
            ">

              <div className="flex items-center gap-3">
                <FaBrain className="text-cyan-500" />
                Aptitude Preparation
              </div>

              <div className="flex items-center gap-3">
                <FaLaptopCode className="text-cyan-500" />
                Coding Questions
              </div>

              <div className="flex items-center gap-3">
                <FaUserTie className="text-cyan-500" />
                HR Interview
              </div>

            </div>

            {/* Button */}
            <div className="
              relative
              z-10
              mt-10
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

          {/* Infosys */}
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
              border-blue-100
              hover:-translate-y-3
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
              bg-blue-200/30
              blur-3xl
              rounded-full
              animate-pulse
            " />

            <div className="
              relative
              z-10
              w-20
              h-20
              rounded-3xl
              bg-gradient-to-br
              from-blue-100
              to-indigo-100
              flex
              items-center
              justify-center
              mb-8
            ">

              <FaBuilding className="text-4xl text-blue-600" />

            </div>

            <h2 className="
              relative
              z-10
              text-4xl
              font-black
              text-slate-800
              mb-5
            ">
              Infosys
            </h2>

            <p className="
              relative
              z-10
              text-lg
              text-slate-600
              leading-relaxed
              mb-8
            ">

              Aptitude, coding,
              interview preparation
              & placement resources.

            </p>

            <div className="
              relative
              z-10
              inline-flex
              items-center
              gap-2
              px-5
              py-3
              rounded-full
              bg-blue-100
              text-blue-700
              font-bold
              text-sm
              animate-bounce
            ">

              🚧 Coming Soon

            </div>

          </div>

          {/* Wipro */}
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
              border-purple-100
              hover:-translate-y-3
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
              animate-pulse
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
            ">

              <FaBuilding className="text-4xl text-purple-600" />

            </div>

            <h2 className="
              relative
              z-10
              text-4xl
              font-black
              text-slate-800
              mb-5
            ">
              Wipro
            </h2>

            <p className="
              relative
              z-10
              text-lg
              text-slate-600
              leading-relaxed
              mb-8
            ">

              Coding round,
              aptitude preparation,
              technical & HR interview.

            </p>

            <div className="
              relative
              z-10
              inline-flex
              items-center
              gap-2
              px-5
              py-3
              rounded-full
              bg-purple-100
              text-purple-700
              font-bold
              text-sm
              animate-bounce
            ">

              🚧 Coming Soon

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}