// export default function LearningHub() {
//   return (
//     <div>
//       <h1>Learning Hub</h1>
//     </div>
//   );
// }

// import {
//   FaBookOpen,
//   FaLaptopCode,
//   FaFilePdf,
//   FaBriefcase
// } from 'react-icons/fa'

// export default function LearningHub() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-emerald-50">

//       {/* HERO SECTION */}
//       <section className="max-w-7xl mx-auto px-6 pt-32 pb-20">

//         <div className="text-center">

//           {/* Badge */}
//           <div className="
//             inline-flex
//             items-center
//             gap-3
//             px-5
//             py-2
//             rounded-full
//             bg-white
//             shadow-md
//             border
//             border-cyan-100
//             mb-8
//           ">

//             <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />

//             <span className="text-sm font-semibold text-slate-700">
//               Smart Learning Platform
//             </span>

//           </div>

//           {/* Heading */}
//           <h1 className="
//             text-5xl
//             md:text-7xl
//             font-black
//             leading-tight
//             mb-6
//           ">

//             <span className="
//               bg-gradient-to-r
//               from-cyan-500
//               via-blue-600
//               to-emerald-500
//               bg-clip-text
//               text-transparent
//             ">
//               Learning Hub
//             </span>

//           </h1>

//           {/* Description */}
//           <p className="
//             max-w-3xl
//             mx-auto
//             text-lg
//             md:text-2xl
//             leading-relaxed
//             text-slate-600
//             mb-12
//           ">

//             One place for
//             <span className="font-bold text-cyan-600">
//               {' '}Placement Preparation
//             </span>,
//             <span className="font-bold text-emerald-600">
//               {' '}College Notes
//             </span>,
//             Coding Resources, Interview Questions, PDFs, and Developer Roadmaps.

//           </p>

//         </div>

//         {/* FEATURE CARDS */}
//         <div className="
//           grid
//           grid-cols-1
//           md:grid-cols-2
//           xl:grid-cols-4
//           gap-8
//           mt-16
//         ">

//           {/* CARD 1 */}
//           <div className="
//             bg-white/80
//             backdrop-blur-xl
//             rounded-3xl
//             p-8
//             shadow-xl
//             border
//             border-cyan-100
//             hover:-translate-y-2
//             transition-all
//             duration-300
//           ">

//             <div className="
//               w-16
//               h-16
//               rounded-2xl
//               bg-cyan-100
//               flex
//               items-center
//               justify-center
//               mb-6
//             ">
//               <FaBriefcase className="text-3xl text-cyan-600" />
//             </div>

//             <h3 className="text-2xl font-bold text-slate-800 mb-4">
//               Placement Prep
//             </h3>

//             <p className="text-slate-600 leading-relaxed">
//               DSA, Aptitude, Interview Questions, Resume Tips & Company Preparation.
//             </p>

//           </div>

//           {/* CARD 2 */}
//           {/* <div className="
//             bg-white/80
//             backdrop-blur-xl
//             rounded-3xl
//             p-8
//             shadow-xl
//             border
//             border-emerald-100
//             hover:-translate-y-2
//             transition-all
//             duration-300
//           ">

//             <div className="
//               w-16
//               h-16
//               rounded-2xl
//               bg-emerald-100
//               flex
//               items-center
//               justify-center
//               mb-6
//             ">
//               <FaBookOpen className="text-3xl text-emerald-600" />
//             </div>

//             <h3 className="text-2xl font-bold text-slate-800 mb-4">
//               College Notes
//             </h3>

//             <p className="text-slate-600 leading-relaxed">
//               Semester-wise notes, PDFs, handwritten notes & university resources.
//             </p>

//           </div> */}

//           {/* CARD 2 */}
// <a
//   href="/learning-hub/college-notes"
//   className="
//     group
//     relative
//     overflow-hidden
//     bg-white/80
//     backdrop-blur-xl
//     rounded-[32px]
//     p-8
//     shadow-xl
//     border
//     border-emerald-100
//     hover:-translate-y-3
//     hover:shadow-emerald-300/40
//     transition-all
//     duration-500
//   "
// >

//   {/* Glow Effect */}
//   <div className="
//     absolute
//     top-0
//     right-0
//     w-32
//     h-32
//     bg-emerald-200/30
//     blur-3xl
//     rounded-full
//   " />

//   {/* Icon */}
//   <div className="
//     relative
//     z-10
//     w-20
//     h-20
//     rounded-3xl
//     bg-gradient-to-br
//     from-emerald-100
//     to-cyan-100
//     flex
//     items-center
//     justify-center
//     mb-8
//     group-hover:scale-110
//     transition-all
//     duration-300
//     shadow-md
//   ">

//     <FaBookOpen className="text-4xl text-emerald-600" />

//   </div>

//   {/* Title */}
//   <h3 className="
//     relative
//     z-10
//     text-3xl
//     font-black
//     text-slate-800
//     mb-5
//     group-hover:text-emerald-600
//     transition-colors
//   ">
//     College Notes
//   </h3>

//   {/* Description */}
//   <p className="
//     relative
//     z-10
//     text-lg
//     leading-relaxed
//     text-slate-600
//   ">

//     Semester-wise notes, PDFs,
//     handwritten notes, PYQs,
//     practical files & university resources.

//   </p>

//   {/* Bottom Badge */}
//   <div className="
//     relative
//     z-10
//     mt-8
//     inline-flex
//     items-center
//     gap-2
//     px-4
//     py-2
//     rounded-full
//     bg-emerald-50
//     text-emerald-700
//     font-semibold
//     text-sm
//   ">

//     Explore Notes →

//   </div>

// </a>

//           {/* CARD 3 */}
//           <div className="
//             bg-white/80
//             backdrop-blur-xl
//             rounded-3xl
//             p-8
//             shadow-xl
//             border
//             border-blue-100
//             hover:-translate-y-2
//             transition-all
//             duration-300
//           ">

//             <div className="
//               w-16
//               h-16
//               rounded-2xl
//               bg-blue-100
//               flex
//               items-center
//               justify-center
//               mb-6
//             ">
//               <FaLaptopCode className="text-3xl text-blue-600" />
//             </div>

//             <h3 className="text-2xl font-bold text-slate-800 mb-4">
//               Coding Notes
//             </h3>

//             <p className="text-slate-600 leading-relaxed">
//               React, Next.js, Node.js, MongoDB, Tailwind CSS & Full Stack Notes.
//             </p>

//           </div>

//           {/* CARD 4 */}
//           <div className="
//             bg-white/80
//             backdrop-blur-xl
//             rounded-3xl
//             p-8
//             shadow-xl
//             border
//             border-orange-100
//             hover:-translate-y-2
//             transition-all
//             duration-300
//           ">

//             <div className="
//               w-16
//               h-16
//               rounded-2xl
//               bg-orange-100
//               flex
//               items-center
//               justify-center
//               mb-6
//             ">
//               <FaFilePdf className="text-3xl text-orange-600" />
//             </div>

//             <h3 className="text-2xl font-bold text-slate-800 mb-4">
//               PDFs & Resources
//             </h3>

//             <p className="text-slate-600 leading-relaxed">
//               Premium PDFs, Cheat Sheets, Developer Roadmaps & Learning Resources.
//             </p>

//           </div>

//         </div>

//       </section>

//     </div>
//   )
// }


import {
  FaBookOpen,
  FaLaptopCode,
  FaFilePdf,
  FaBriefcase
} from 'react-icons/fa'

export default function LearningHub() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-emerald-50">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-20">

        <div className="text-center">

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

            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />

            <span className="text-sm font-semibold text-slate-700">
              Smart Learning Platform
            </span>

          </div>

          {/* Heading */}
          <h1 className="
            text-5xl
            md:text-7xl
            font-black
            leading-tight
            mb-6
          ">

            <span className="
              bg-gradient-to-r
              from-cyan-500
              via-blue-600
              to-emerald-500
              bg-clip-text
              text-transparent
            ">
              Learning Hub
            </span>

          </h1>

          {/* Description */}
          <p className="
            max-w-3xl
            mx-auto
            text-lg
            md:text-2xl
            leading-relaxed
            text-slate-600
            mb-12
          ">

            One place for
            <span className="font-bold text-cyan-600">
              {' '}Premium Tech Courses
            </span>,
            <span className="font-bold text-emerald-600">
              {' '}College Notes
            </span>,
            Coding Resources, Interview Questions, PDFs, and Developer Roadmaps.

          </p>

        </div>

        {/* FEATURE CARDS */}
        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
          gap-8
          mt-16
        ">

          {/* CARD 1 */}
          <div className="
            group
            relative
            overflow-hidden
            bg-white/80
            backdrop-blur-xl
            rounded-[32px]
            p-8
            shadow-xl
            border
            border-cyan-100
            hover:-translate-y-3
            hover:shadow-cyan-300/40
            transition-all
            duration-500
          ">

            {/* Glow Effect */}
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
              duration-300
              shadow-md
            ">

              <FaBriefcase className="text-4xl text-cyan-600" />

            </div>

            {/* Title */}
            <h3 className="
              relative
              z-10
              text-3xl
              font-black
              text-slate-800
              mb-5
              group-hover:text-cyan-600
              transition-colors
            ">
              Premium Tech Courses
            </h3>

            {/* Description */}
            <p className="
              relative
              z-10
              text-lg
              leading-relaxed
              text-slate-600
            ">

              MERN Stack, Java Developer,
              WordPress Developer &
              Data Science courses
              with projects & roadmap.

            </p>

            {/* Bottom Badge */}
            <div className="
              relative
              z-10
              mt-8
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-cyan-50
              text-cyan-700
              font-semibold
              text-sm
            ">

              Explore Courses →

            </div>

          </div>

          {/* CARD 2 */}
          <a
            href="/learning-hub/college-notes"
            className="
              group
              relative
              overflow-hidden
              bg-white/80
              backdrop-blur-xl
              rounded-[32px]
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

            {/* Glow Effect */}
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

            {/* Icon */}
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
              duration-300
              shadow-md
            ">

              <FaBookOpen className="text-4xl text-emerald-600" />

            </div>

            {/* Title */}
            <h3 className="
              relative
              z-10
              text-3xl
              font-black
              text-slate-800
              mb-5
              group-hover:text-emerald-600
              transition-colors
            ">
              College Notes
            </h3>

            {/* Description */}
            <p className="
              relative
              z-10
              text-lg
              leading-relaxed
              text-slate-600
            ">

              Semester-wise notes, PDFs,
              handwritten notes, PYQs,
              practical files & university resources.

            </p>

            {/* Bottom Badge */}
            <div className="
              relative
              z-10
              mt-8
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-emerald-50
              text-emerald-700
              font-semibold
              text-sm
            ">

              Explore Notes →

            </div>

          </a>

          {/* CARD 3 */}
          {/* <div className="
            bg-white/80
            backdrop-blur-xl
            rounded-3xl
            p-8
            shadow-xl
            border
            border-blue-100
            hover:-translate-y-2
            transition-all
            duration-300
          ">

            <div className="
              w-16
              h-16
              rounded-2xl
              bg-blue-100
              flex
              items-center
              justify-center
              mb-6
            ">
              <FaLaptopCode className="text-3xl text-blue-600" />
            </div>

            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Coding Notes
            </h3>

            <p className="text-slate-600 leading-relaxed">
              React, Next.js, Node.js, MongoDB, Tailwind CSS & Full Stack Notes.
            </p>

          </div> */}

          {/* CARD 3 */}
<div className="
  group
  relative
  overflow-hidden
  bg-white/80
  backdrop-blur-xl
  rounded-[32px]
  p-8
  shadow-xl
  border
  border-blue-100
  hover:-translate-y-3
  hover:shadow-blue-300/40
  transition-all
  duration-500
">

  {/* Glow Effect */}
  <div className="
    absolute
    top-0
    right-0
    w-32
    h-32
    bg-blue-200/30
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
    from-blue-100
    to-cyan-100
    flex
    items-center
    justify-center
    mb-8
    group-hover:scale-110
    transition-all
    duration-300
    shadow-md
  ">

    <FaLaptopCode className="text-4xl text-blue-600" />

  </div>

  {/* Title */}
  <h3 className="
    relative
    z-10
    text-3xl
    font-black
    text-slate-800
    mb-5
    group-hover:text-blue-600
    transition-colors
  ">
    Interview Preparation
  </h3>

  {/* Description */}
  <p className="
    relative
    z-10
    text-lg
    leading-relaxed
    text-slate-600
  ">

    DSA Questions, HR Interview,
    Technical Interview, Resume Tips
    & Company-wise Preparation.

  </p>

  {/* Bottom Badge */}
  <div className="
    relative
    z-10
    mt-8
    inline-flex
    items-center
    gap-2
    px-4
    py-2
    rounded-full
    bg-blue-50
    text-blue-700
    font-semibold
    text-sm
  ">

    Start Preparation →

  </div>

</div>

          {/* CARD 4 */}
          <div className="
            bg-white/80
            backdrop-blur-xl
            rounded-3xl
            p-8
            shadow-xl
            border
            border-orange-100
            hover:-translate-y-2
            transition-all
            duration-300
          ">

            <div className="
              w-16
              h-16
              rounded-2xl
              bg-orange-100
              flex
              items-center
              justify-center
              mb-6
            ">
              <FaFilePdf className="text-3xl text-orange-600" />
            </div>

            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              PDFs & Resources
            </h3>

            <p className="text-slate-600 leading-relaxed">
              Premium PDFs, Cheat Sheets, Developer Roadmaps & Learning Resources.
            </p>

          </div>

        </div>

      </section>

    </div>
  )
}