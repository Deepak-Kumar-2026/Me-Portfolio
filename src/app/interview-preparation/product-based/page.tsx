import {
  FaGoogle,
  FaAmazon,
  FaMicrosoft
} from 'react-icons/fa'

export default function ProductBased() {
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
              Product Based Company Preparation 🚀
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
              Product Based
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

            Prepare for top product based companies
            with DSA, system design,
            coding interview questions,
            interview experiences & more.

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

          {/* Google */}
          <a
            href="/interview-preparation/product-based/google"
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

            {/* Glow */}
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

            {/* Icon */}
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

              <FaGoogle className="text-4xl text-purple-600" />

            </div>

            {/* Title */}
            <h2 className="
              relative
              z-10
              text-4xl
              font-black
              text-slate-800
              mb-5
              group-hover:text-purple-600
              transition-all
            ">
              Google
            </h2>

            {/* Description */}
            <p className="
              relative
              z-10
              text-lg
              leading-relaxed
              text-slate-600
              mb-8
            ">

              DSA, System Design,
              LeetCode Questions,
              Interview Experience & more.

            </p>

            {/* Tags */}
            <div className="
              relative
              z-10
              flex
              flex-wrap
              gap-3
              mb-8
            ">

              <span className="
                px-4
                py-2
                rounded-full
                bg-emerald-100
                text-emerald-700
                text-sm
                font-bold
              ">
                DSA
              </span>

              <span className="
                px-4
                py-2
                rounded-full
                bg-cyan-100
                text-cyan-700
                text-sm
                font-bold
              ">
                System Design
              </span>

            </div>

            {/* Button */}
            <div className="
              relative
              z-10
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

              Start Preparation →

            </div>

          </a>

          {/* Amazon */}
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
              animate-pulse
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
            ">

              <FaAmazon className="text-4xl text-orange-600" />

            </div>

            <h2 className="
              relative
              z-10
              text-4xl
              font-black
              text-slate-800
              mb-5
            ">
              Amazon
            </h2>

            <p className="
              relative
              z-10
              text-lg
              text-slate-600
              leading-relaxed
              mb-8
            ">

              Leadership Principles,
              DSA, OA Questions,
              coding interview & more.

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
              bg-orange-100
              text-orange-700
              font-bold
              text-sm
              animate-bounce
            ">

              🚧 Coming Soon

            </div>

          </div>

          {/* Microsoft */}
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
              to-cyan-100
              flex
              items-center
              justify-center
              mb-8
            ">

              <FaMicrosoft className="text-4xl text-blue-600" />

            </div>

            <h2 className="
              relative
              z-10
              text-4xl
              font-black
              text-slate-800
              mb-5
            ">
              Microsoft
            </h2>

            <p className="
              relative
              z-10
              text-lg
              text-slate-600
              leading-relaxed
              mb-8
            ">

              Coding rounds,
              DSA preparation,
              system design & interviews.

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

        </div>

      </section>

    </div>
  )
}