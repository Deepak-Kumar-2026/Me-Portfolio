// export default function CollegeNotes() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-cyan-50">

//       <section className="max-w-7xl mx-auto px-6 pt-32 pb-20">

//         {/* Heading */}
//         <div className="text-center mb-16">

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
//             border-emerald-100
//             mb-8
//           ">

//             <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />

//             <span className="text-sm font-semibold text-slate-700">
//               Semester Notes & Resources
//             </span>

//           </div>

//           <h1 className="
//             text-5xl
//             md:text-7xl
//             font-black
//             mb-6
//           ">

//             <span className="
//               bg-gradient-to-r
//               from-emerald-500
//               via-cyan-500
//               to-blue-600
//               bg-clip-text
//               text-transparent
//             ">
//               College Notes
//             </span>

//           </h1>

//           <p className="
//             max-w-3xl
//             mx-auto
//             text-lg
//             md:text-2xl
//             leading-relaxed
//             text-slate-600
//           ">

//             Access semester-wise notes, PDFs,
//             handwritten notes, previous year questions,
//             practical files, and university resources.

//           </p>

//         </div>

//         {/* Semester Cards */}
//         <div className="
//           grid
//           grid-cols-1
//           sm:grid-cols-2
//           lg:grid-cols-3
//           xl:grid-cols-4
//           gap-8
//           mt-20
//         ">

//           {/* Semester 1 */}
//           <div className="
//             group
//             bg-white/80
//             backdrop-blur-xl
//             rounded-3xl
//             p-8
//             shadow-xl
//             border
//             border-emerald-100
//             hover:-translate-y-3
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
//               text-2xl
//               font-black
//               text-emerald-600
//               mb-6
//             ">
//               1
//             </div>

//             <h2 className="text-3xl font-black text-slate-800 mb-4">
//               Semester 1
//             </h2>

//             <p className="text-slate-600 text-lg leading-relaxed mb-6">
//               Programming Fundamentals, Mathematics,
//               Physics & Communication Skills.
//             </p>

//             <button className="
//               px-5
//               py-3
//               rounded-2xl
//               bg-emerald-500
//               text-white
//               font-semibold
//               hover:bg-emerald-600
//               transition-all
//             ">
//               View Notes
//             </button>

//           </div>

//           {/* Semester 2 */}
//           <div className="
//             group
//             bg-white/80
//             backdrop-blur-xl
//             rounded-3xl
//             p-8
//             shadow-xl
//             border
//             border-cyan-100
//             hover:-translate-y-3
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
//               text-2xl
//               font-black
//               text-cyan-600
//               mb-6
//             ">
//               2
//             </div>

//             <h2 className="text-3xl font-black text-slate-800 mb-4">
//               Semester 2
//             </h2>

//             <p className="text-slate-600 text-lg leading-relaxed mb-6">
//               Data Structures, OOP Concepts,
//               Digital Electronics & Labs.
//             </p>

//             <button className="
//               px-5
//               py-3
//               rounded-2xl
//               bg-cyan-500
//               text-white
//               font-semibold
//               hover:bg-cyan-600
//               transition-all
//             ">
//               View Notes
//             </button>

//           </div>

//           {/* Semester 3 */}
//           <div className="
//             group
//             bg-white/80
//             backdrop-blur-xl
//             rounded-3xl
//             p-8
//             shadow-xl
//             border
//             border-blue-100
//             hover:-translate-y-3
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
//               text-2xl
//               font-black
//               text-blue-600
//               mb-6
//             ">
//               3
//             </div>

//             <h2 className="text-3xl font-black text-slate-800 mb-4">
//               Semester 3
//             </h2>

//             <p className="text-slate-600 text-lg leading-relaxed mb-6">
//               DBMS, Java, Operating System,
//               Web Development & Practical Notes.
//             </p>

//             <button className="
//               px-5
//               py-3
//               rounded-2xl
//               bg-blue-500
//               text-white
//               font-semibold
//               hover:bg-blue-600
//               transition-all
//             ">
//               View Notes
//             </button>

//           </div>

//           {/* Semester 4 */}
//           <div className="
//             group
//             bg-white/80
//             backdrop-blur-xl
//             rounded-3xl
//             p-8
//             shadow-xl
//             border
//             border-purple-100
//             hover:-translate-y-3
//             transition-all
//             duration-300
//           ">

//             <div className="
//               w-16
//               h-16
//               rounded-2xl
//               bg-purple-100
//               flex
//               items-center
//               justify-center
//               text-2xl
//               font-black
//               text-purple-600
//               mb-6
//             ">
//               4
//             </div>

//             <h2 className="text-3xl font-black text-slate-800 mb-4">
//               Semester 4
//             </h2>

//             <p className="text-slate-600 text-lg leading-relaxed mb-6">
//               Computer Networks, Python,
//               Software Engineering & Projects.
//             </p>

//             <button className="
//               px-5
//               py-3
//               rounded-2xl
//               bg-purple-500
//               text-white
//               font-semibold
//               hover:bg-purple-600
//               transition-all
//             ">
//               View Notes
//             </button>

//           </div>

//           {/* Semester 5 */}
//           <div className="
//             group
//             bg-white/80
//             backdrop-blur-xl
//             rounded-3xl
//             p-8
//             shadow-xl
//             border
//             border-orange-100
//             hover:-translate-y-3
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
//               text-2xl
//               font-black
//               text-orange-600
//               mb-6
//             ">
//               5
//             </div>

//             <h2 className="text-3xl font-black text-slate-800 mb-4">
//               Semester 5
//             </h2>

//             <p className="text-slate-600 text-lg leading-relaxed mb-6">
//               Machine Learning, AI,
//               Cloud Computing & Advanced DSA.
//             </p>

//             <button className="
//               px-5
//               py-3
//               rounded-2xl
//               bg-orange-500
//               text-white
//               font-semibold
//               hover:bg-orange-600
//               transition-all
//             ">
//               View Notes
//             </button>

//           </div>

//           {/* Semester 6 */}
//           <div className="
//             group
//             bg-white/80
//             backdrop-blur-xl
//             rounded-3xl
//             p-8
//             shadow-xl
//             border
//             border-pink-100
//             hover:-translate-y-3
//             transition-all
//             duration-300
//           ">

//             <div className="
//               w-16
//               h-16
//               rounded-2xl
//               bg-pink-100
//               flex
//               items-center
//               justify-center
//               text-2xl
//               font-black
//               text-pink-600
//               mb-6
//             ">
//               6
//             </div>

//             <h2 className="text-3xl font-black text-slate-800 mb-4">
//               Semester 6
//             </h2>

//             <p className="text-slate-600 text-lg leading-relaxed mb-6">
//               Full Stack Development,
//               React.js, Node.js & MongoDB.
//             </p>

//             <button className="
//               px-5
//               py-3
//               rounded-2xl
//               bg-pink-500
//               text-white
//               font-semibold
//               hover:bg-pink-600
//               transition-all
//             ">
//               View Notes
//             </button>

//           </div>

//           {/* Semester 7 */}
//           <div className="
//             group
//             bg-white/80
//             backdrop-blur-xl
//             rounded-3xl
//             p-8
//             shadow-xl
//             border
//             border-yellow-100
//             hover:-translate-y-3
//             transition-all
//             duration-300
//           ">

//             <div className="
//               w-16
//               h-16
//               rounded-2xl
//               bg-yellow-100
//               flex
//               items-center
//               justify-center
//               text-2xl
//               font-black
//               text-yellow-600
//               mb-6
//             ">
//               7
//             </div>

//             <h2 className="text-3xl font-black text-slate-800 mb-4">
//               Semester 7
//             </h2>

//             <p className="text-slate-600 text-lg leading-relaxed mb-6">
//               Major Project, Internship Resources
//               & Placement Preparation.
//             </p>

//             <button className="
//               px-5
//               py-3
//               rounded-2xl
//               bg-yellow-500
//               text-white
//               font-semibold
//               hover:bg-yellow-600
//               transition-all
//             ">
//               View Notes
//             </button>

//           </div>

//           {/* Semester 8 */}
//           <div className="
//             group
//             bg-white/80
//             backdrop-blur-xl
//             rounded-3xl
//             p-8
//             shadow-xl
//             border
//             border-red-100
//             hover:-translate-y-3
//             transition-all
//             duration-300
//           ">

//             <div className="
//               w-16
//               h-16
//               rounded-2xl
//               bg-red-100
//               flex
//               items-center
//               justify-center
//               text-2xl
//               font-black
//               text-red-600
//               mb-6
//             ">
//               8
//             </div>

//             <h2 className="text-3xl font-black text-slate-800 mb-4">
//               Semester 8
//             </h2>

//             <p className="text-slate-600 text-lg leading-relaxed mb-6">
//               Final Year Project, Research Work
//               & Career Resources.
//             </p>

//             <button className="
//               px-5
//               py-3
//               rounded-2xl
//               bg-red-500
//               text-white
//               font-semibold
//               hover:bg-red-600
//               transition-all
//             ">
//               View Notes
//             </button>

//           </div>

//         </div>

//       </section>

//     </div>
//   )
// }


// export default function CollegeNotes() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-cyan-50">

//       <section className="max-w-7xl mx-auto px-6 pt-32 pb-20">

//         {/* Heading */}
//         <div className="text-center mb-16">

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
//             border-emerald-100
//             mb-8
//           ">

//             <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />

//             <span className="text-sm font-semibold text-slate-700">
//               Semester Notes & Resources
//             </span>

//           </div>

//           <h1 className="
//             text-5xl
//             md:text-7xl
//             font-black
//             mb-6
//           ">

//             <span className="
//               bg-gradient-to-r
//               from-emerald-500
//               via-cyan-500
//               to-blue-600
//               bg-clip-text
//               text-transparent
//             ">
//               College Notes
//             </span>

//           </h1>

//           <p className="
//             max-w-3xl
//             mx-auto
//             text-lg
//             md:text-2xl
//             leading-relaxed
//             text-slate-600
//           ">

//             Access semester-wise notes, PDFs,
//             handwritten notes, previous year questions,
//             practical files, and university resources.

//           </p>

//         </div>

//         {/* Semester Cards */}
//         <div className="
//           grid
//           grid-cols-1
//           sm:grid-cols-2
//           lg:grid-cols-3
//           xl:grid-cols-4
//           gap-8
//           mt-20
//         ">

//           {/* Semester 1 */}
//           <div className="
//             group
//             bg-white/80
//             backdrop-blur-xl
//             rounded-3xl
//             p-8
//             shadow-xl
//             border
//             border-emerald-100
//             hover:-translate-y-3
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
//               text-2xl
//               font-black
//               text-emerald-600
//               mb-6
//             ">
//               1
//             </div>

//             <h2 className="text-3xl font-black text-slate-800 mb-4">
//               Semester 1
//             </h2>

//             <p className="text-slate-600 text-lg leading-relaxed mb-6">
//               Programming Fundamentals, Mathematics,
//               Physics & Communication Skills.
//             </p>

//             <a
//               href="/learning-hub/college-notes/semester-1"
//               className="
//                 inline-block
//                 px-5
//                 py-3
//                 rounded-2xl
//                 bg-emerald-500
//                 text-white
//                 font-semibold
//                 hover:bg-emerald-600
//                 transition-all
//               "
//             >
//               View Notes
//             </a>

//           </div>

//           {/* Semester 2 */}
//           <div className="
//             group
//             bg-white/80
//             backdrop-blur-xl
//             rounded-3xl
//             p-8
//             shadow-xl
//             border
//             border-cyan-100
//             hover:-translate-y-3
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
//               text-2xl
//               font-black
//               text-cyan-600
//               mb-6
//             ">
//               2
//             </div>

//             <h2 className="text-3xl font-black text-slate-800 mb-4">
//               Semester 2
//             </h2>

//             <p className="text-slate-600 text-lg leading-relaxed mb-6">
//               Data Structures, OOP Concepts,
//               Digital Electronics & Labs.
//             </p>

//             <button
//               className="
//                 inline-block
//                 px-5
//                 py-3
//                 rounded-2xl
//                 bg-cyan-500
//                 text-white
//                 font-semibold
//                 hover:bg-cyan-600
//                 transition-all
//               "
//             >
//               View Notes
//             </button>

//           </div>

//           {/* Semester 3 */}
//           <div className="
//             group
//             bg-white/80
//             backdrop-blur-xl
//             rounded-3xl
//             p-8
//             shadow-xl
//             border
//             border-blue-100
//             hover:-translate-y-3
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
//               text-2xl
//               font-black
//               text-blue-600
//               mb-6
//             ">
//               3
//             </div>

//             <h2 className="text-3xl font-black text-slate-800 mb-4">
//               Semester 3
//             </h2>

//             <p className="text-slate-600 text-lg leading-relaxed mb-6">
//               DBMS, Java, Operating System,
//               Web Development & Practical Notes.
//             </p>

//             <button
//               className="
//                 inline-block
//                 px-5
//                 py-3
//                 rounded-2xl
//                 bg-blue-500
//                 text-white
//                 font-semibold
//                 hover:bg-blue-600
//                 transition-all
//               "
//             >
//               View Notes
//             </button>

//           </div>

//           {/* Semester 4 */}
//           <div className="
//             group
//             bg-white/80
//             backdrop-blur-xl
//             rounded-3xl
//             p-8
//             shadow-xl
//             border
//             border-purple-100
//             hover:-translate-y-3
//             transition-all
//             duration-300
//           ">

//             <div className="
//               w-16
//               h-16
//               rounded-2xl
//               bg-purple-100
//               flex
//               items-center
//               justify-center
//               text-2xl
//               font-black
//               text-purple-600
//               mb-6
//             ">
//               4
//             </div>

//             <h2 className="text-3xl font-black text-slate-800 mb-4">
//               Semester 4
//             </h2>

//             <p className="text-slate-600 text-lg leading-relaxed mb-6">
//               Computer Networks, Python,
//               Software Engineering & Projects.
//             </p>

//             <button
//               className="
//                 inline-block
//                 px-5
//                 py-3
//                 rounded-2xl
//                 bg-purple-500
//                 text-white
//                 font-semibold
//                 hover:bg-purple-600
//                 transition-all
//               "
//             >
//               View Notes
//             </button>

//           </div>

//           {/* Semester 5 */}
//           <div className="
//             group
//             bg-white/80
//             backdrop-blur-xl
//             rounded-3xl
//             p-8
//             shadow-xl
//             border
//             border-orange-100
//             hover:-translate-y-3
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
//               text-2xl
//               font-black
//               text-orange-600
//               mb-6
//             ">
//               5
//             </div>

//             <h2 className="text-3xl font-black text-slate-800 mb-4">
//               Semester 5
//             </h2>

//             <p className="text-slate-600 text-lg leading-relaxed mb-6">
//               Machine Learning, AI,
//               Cloud Computing & Advanced DSA.
//             </p>

//             <button
//               className="
//                 inline-block
//                 px-5
//                 py-3
//                 rounded-2xl
//                 bg-orange-500
//                 text-white
//                 font-semibold
//                 hover:bg-orange-600
//                 transition-all
//               "
//             >
//               View Notes
//             </button>

//           </div>

//           {/* Semester 6 */}
//           <div className="
//             group
//             bg-white/80
//             backdrop-blur-xl
//             rounded-3xl
//             p-8
//             shadow-xl
//             border
//             border-pink-100
//             hover:-translate-y-3
//             transition-all
//             duration-300
//           ">

//             <div className="
//               w-16
//               h-16
//               rounded-2xl
//               bg-pink-100
//               flex
//               items-center
//               justify-center
//               text-2xl
//               font-black
//               text-pink-600
//               mb-6
//             ">
//               6
//             </div>

//             <h2 className="text-3xl font-black text-slate-800 mb-4">
//               Semester 6
//             </h2>

//             <p className="text-slate-600 text-lg leading-relaxed mb-6">
//               Full Stack Development,
//               React.js, Node.js & MongoDB.
//             </p>

//             <button
//               className="
//                 inline-block
//                 px-5
//                 py-3
//                 rounded-2xl
//                 bg-pink-500
//                 text-white
//                 font-semibold
//                 hover:bg-pink-600
//                 transition-all
//               "
//             >
//               View Notes
//             </button>

//           </div>

//         </div>

//       </section>

//     </div>
//   )
// }


// export default function CollegeNotes() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-cyan-50">

//       <section className="max-w-7xl mx-auto px-6 pt-32 pb-20">

//         {/* Heading */}
//         <div className="text-center mb-16">

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
//             border-emerald-100
//             mb-8
//           ">

//             <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />

//             <span className="text-sm font-semibold text-slate-700">
//               Semester Notes & Resources
//             </span>

//           </div>

//           <h1 className="
//             text-5xl
//             md:text-7xl
//             font-black
//             mb-6
//           ">

//             <span className="
//               bg-gradient-to-r
//               from-emerald-500
//               via-cyan-500
//               to-blue-600
//               bg-clip-text
//               text-transparent
//             ">
//               College Notes
//             </span>

//           </h1>

//           <p className="
//             max-w-3xl
//             mx-auto
//             text-lg
//             md:text-2xl
//             leading-relaxed
//             text-slate-600
//           ">

//             Access semester-wise notes, PDFs,
//             handwritten notes, previous year questions,
//             practical files, and university resources.

//           </p>

//         </div>

//         {/* Semester Cards */}
//         <div className="
//           grid
//           grid-cols-1
//           sm:grid-cols-2
//           lg:grid-cols-3
//           xl:grid-cols-4
//           gap-8
//           mt-20
//         ">

//           {/* Semester 1 */}
//           <div className="
//             group
//             bg-white/80
//             backdrop-blur-xl
//             rounded-3xl
//             p-8
//             shadow-xl
//             border
//             border-emerald-100
//             hover:-translate-y-3
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
//               text-2xl
//               font-black
//               text-emerald-600
//               mb-6
//             ">
//               1
//             </div>

//             <h2 className="text-3xl font-black text-slate-800 mb-4">
//               Semester 1
//             </h2>

//             <p className="text-slate-600 text-lg leading-relaxed mb-6">
//               Mathematics, Physics, Electrical Engineering
//               & Engineering Graphics.
//             </p>

//             <a
//               href="/learning-hub/college-notes/semester-1"
//               className="
//                 inline-block
//                 px-5
//                 py-3
//                 rounded-2xl
//                 bg-emerald-500
//                 text-white
//                 font-semibold
//                 hover:bg-emerald-600
//                 transition-all
//               "
//             >
//               View Notes
//             </a>

//           </div>

//           {/* Semester 2 */}
//           <div className="
//             group
//             bg-white/80
//             backdrop-blur-xl
//             rounded-3xl
//             p-8
//             shadow-xl
//             border
//             border-cyan-100
//             hover:-translate-y-3
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
//               text-2xl
//               font-black
//               text-cyan-600
//               mb-6
//             ">
//               2
//             </div>

//             <h2 className="text-3xl font-black text-slate-800 mb-4">
//               Semester 2
//             </h2>

//             <p className="text-slate-600 text-lg leading-relaxed mb-6">
//               Chemistry, English,
//               Programming for Problem Solving & Labs.
//             </p>

//             <button
//               className="
//                 inline-block
//                 px-5
//                 py-3
//                 rounded-2xl
//                 bg-cyan-500
//                 text-white
//                 font-semibold
//                 cursor-not-allowed
//                 opacity-80
//               "
//             >
//               Coming Soon
//             </button>

//           </div>

//           {/* Semester 3 */}
//           <div className="
//             group
//             bg-white/80
//             backdrop-blur-xl
//             rounded-3xl
//             p-8
//             shadow-xl
//             border
//             border-blue-100
//             hover:-translate-y-3
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
//               text-2xl
//               font-black
//               text-blue-600
//               mb-6
//             ">
//               3
//             </div>

//             <h2 className="text-3xl font-black text-slate-800 mb-4">
//               Semester 3
//             </h2>

//             <p className="text-slate-600 text-lg leading-relaxed mb-6">
//               Data Structures, OOP,
//               Digital Electronics & Labs.
//             </p>

//             <button
//               className="
//                 inline-block
//                 px-5
//                 py-3
//                 rounded-2xl
//                 bg-blue-500
//                 text-white
//                 font-semibold
//                 cursor-not-allowed
//                 opacity-80
//               "
//             >
//               Coming Soon
//             </button>

//           </div>

//           {/* Semester 4 */}
//           <div className="
//             group
//             bg-white/80
//             backdrop-blur-xl
//             rounded-3xl
//             p-8
//             shadow-xl
//             border
//             border-purple-100
//             hover:-translate-y-3
//             transition-all
//             duration-300
//           ">

//             <div className="
//               w-16
//               h-16
//               rounded-2xl
//               bg-purple-100
//               flex
//               items-center
//               justify-center
//               text-2xl
//               font-black
//               text-purple-600
//               mb-6
//             ">
//               4
//             </div>

//             <h2 className="text-3xl font-black text-slate-800 mb-4">
//               Semester 4
//             </h2>

//             <p className="text-slate-600 text-lg leading-relaxed mb-6">
//               Operating Systems, DAA,
//               COA & Environmental Sciences.
//             </p>

//             <button
//               className="
//                 inline-block
//                 px-5
//                 py-3
//                 rounded-2xl
//                 bg-purple-500
//                 text-white
//                 font-semibold
//                 cursor-not-allowed
//                 opacity-80
//               "
//             >
//               Coming Soon
//             </button>

//           </div>

//           {/* Semester 5 */}
//           <div className="
//             group
//             bg-white/80
//             backdrop-blur-xl
//             rounded-3xl
//             p-8
//             shadow-xl
//             border
//             border-orange-100
//             hover:-translate-y-3
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
//               text-2xl
//               font-black
//               text-orange-600
//               mb-6
//             ">
//               5
//             </div>

//             <h2 className="text-3xl font-black text-slate-800 mb-4">
//               Semester 5
//             </h2>

//             <p className="text-slate-600 text-lg leading-relaxed mb-6">
//               Advanced Computer Science subjects,
//               projects & placement preparation.
//             </p>

//             <button
//               className="
//                 inline-block
//                 px-5
//                 py-3
//                 rounded-2xl
//                 bg-orange-500
//                 text-white
//                 font-semibold
//                 cursor-not-allowed
//                 opacity-80
//               "
//             >
//               Coming Soon
//             </button>

//           </div>

//           {/* Semester 6 */}
//           <div className="
//             group
//             bg-white/80
//             backdrop-blur-xl
//             rounded-3xl
//             p-8
//             shadow-xl
//             border
//             border-pink-100
//             hover:-translate-y-3
//             transition-all
//             duration-300
//           ">

//             <div className="
//               w-16
//               h-16
//               rounded-2xl
//               bg-pink-100
//               flex
//               items-center
//               justify-center
//               text-2xl
//               font-black
//               text-pink-600
//               mb-6
//             ">
//               6
//             </div>

//             <h2 className="text-3xl font-black text-slate-800 mb-4">
//               Semester 6
//             </h2>

//             <p className="text-slate-600 text-lg leading-relaxed mb-6">
//               Full Stack Development,
//               AI/ML & Industry Projects.
//             </p>

//             <button
//               className="
//                 inline-block
//                 px-5
//                 py-3
//                 rounded-2xl
//                 bg-pink-500
//                 text-white
//                 font-semibold
//                 cursor-not-allowed
//                 opacity-80
//               "
//             >
//               Coming Soon
//             </button>

//           </div>

//           {/* Semester 7 */}
//           <div className="
//             group
//             bg-white/80
//             backdrop-blur-xl
//             rounded-3xl
//             p-8
//             shadow-xl
//             border
//             border-cyan-100
//             hover:-translate-y-3
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
//               text-2xl
//               font-black
//               text-cyan-600
//               mb-6
//             ">
//               7
//             </div>

//             <h2 className="text-3xl font-black text-slate-800 mb-4">
//               Semester 7
//             </h2>

//             <p className="text-slate-600 text-lg leading-relaxed mb-6">
//               Major projects, internships,
//               placement preparation & development.
//             </p>

//             <button
//               className="
//                 inline-block
//                 px-5
//                 py-3
//                 rounded-2xl
//                 bg-cyan-500
//                 text-white
//                 font-semibold
//                 cursor-not-allowed
//                 opacity-80
//               "
//             >
//               Coming Soon
//             </button>

//           </div>

//           {/* Semester 8 */}
//           <div className="
//             group
//             bg-white/80
//             backdrop-blur-xl
//             rounded-3xl
//             p-8
//             shadow-xl
//             border
//             border-emerald-100
//             hover:-translate-y-3
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
//               text-2xl
//               font-black
//               text-emerald-600
//               mb-6
//             ">
//               8
//             </div>

//             <h2 className="text-3xl font-black text-slate-800 mb-4">
//               Semester 8
//             </h2>

//             <p className="text-slate-600 text-lg leading-relaxed mb-6">
//               Industrial Training, Final Year Project,
//               Internship Reports & Documentation.
//             </p>

//             <button
//               className="
//                 inline-block
//                 px-5
//                 py-3
//                 rounded-2xl
//                 bg-emerald-500
//                 text-white
//                 font-semibold
//                 cursor-not-allowed
//                 opacity-80
//               "
//             >
//               Training & Project
//             </button>

//           </div>

//         </div>

//       </section>

//     </div>
//   )
// }



// export default function CollegeNotes() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-cyan-50">

//       <section className="max-w-7xl mx-auto px-6 pt-32 pb-20">

//         {/* Heading */}
//         <div className="text-center mb-20">

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
//             border-emerald-100
//             mb-8
//           ">

//             <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />

//             <span className="text-sm font-semibold text-slate-700">
//               All Branch Notes & Resources
//             </span>

//           </div>

//           <h1 className="
//             text-5xl
//             md:text-7xl
//             font-black
//             mb-6
//           ">

//             <span className="
//               bg-gradient-to-r
//               from-emerald-500
//               via-cyan-500
//               to-blue-600
//               bg-clip-text
//               text-transparent
//             ">
//               College Notes
//             </span>

//           </h1>

//           <p className="
//             max-w-4xl
//             mx-auto
//             text-lg
//             md:text-2xl
//             leading-relaxed
//             text-slate-600
//           ">

//             Explore semester-wise notes, PDFs,
//             handwritten notes, PYQs, practical files,
//             lab manuals, and university resources
//             for all engineering and computer application branches.

//           </p>

//         </div>

//         {/* Branch Cards */}
//         <div className="
//           grid
//           grid-cols-1
//           sm:grid-cols-2
//           lg:grid-cols-3
//           xl:grid-cols-4
//           gap-8
//         ">

//           {/* B.Tech CSE */}
//           <a
//             href="/learning-hub/college-notes/btech-cse"
//             className="
//               group
//               bg-white/80
//               backdrop-blur-xl
//               rounded-3xl
//               p-8
//               shadow-xl
//               border
//               border-emerald-100
//               hover:-translate-y-3
//               transition-all
//               duration-300
//             "
//           >

//             <div className="
//               w-20
//               h-20
//               rounded-3xl
//               bg-emerald-100
//               flex
//               items-center
//               justify-center
//               text-4xl
//               mb-8
//               group-hover:scale-110
//               transition-all
//             ">
//               💻
//             </div>

//             <h2 className="
//               text-3xl
//               font-black
//               text-slate-800
//               mb-4
//               group-hover:text-emerald-600
//               transition-all
//             ">
//               B.Tech CSE
//             </h2>

//             <p className="
//               text-slate-600
//               text-lg
//               leading-relaxed
//               mb-8
//             ">

//               Computer Science notes,
//               DSA, OOPs, OS, DBMS,
//               CN, AI & placement preparation.

//             </p>

//             <div className="
//               inline-flex
//               items-center
//               gap-2
//               px-5
//               py-3
//               rounded-full
//               bg-emerald-50
//               text-emerald-700
//               font-bold
//               text-sm
//             ">

//               Explore Notes →

//             </div>

//           </a>

//           {/* Mechanical */}
//           <a
//             href="/learning-hub/college-notes/mechanical"
//             className="
//               group
//               bg-white/80
//               backdrop-blur-xl
//               rounded-3xl
//               p-8
//               shadow-xl
//               border
//               border-orange-100
//               hover:-translate-y-3
//               transition-all
//               duration-300
//             "
//           >

//             <div className="
//               w-20
//               h-20
//               rounded-3xl
//               bg-orange-100
//               flex
//               items-center
//               justify-center
//               text-4xl
//               mb-8
//               group-hover:scale-110
//               transition-all
//             ">
//               ⚙️
//             </div>

//             <h2 className="
//               text-3xl
//               font-black
//               text-slate-800
//               mb-4
//               group-hover:text-orange-600
//               transition-all
//             ">
//               Mechanical
//             </h2>

//             <p className="
//               text-slate-600
//               text-lg
//               leading-relaxed
//               mb-8
//             ">

//               Thermodynamics, SOM,
//               Machine Design, CAD/CAM,
//               manufacturing & workshop notes.

//             </p>

//             <div className="
//               inline-flex
//               items-center
//               gap-2
//               px-5
//               py-3
//               rounded-full
//               bg-orange-50
//               text-orange-700
//               font-bold
//               text-sm
//             ">

//               Explore Notes →

//             </div>

//           </a>

//           {/* Electrical */}
//           <a
//             href="/learning-hub/college-notes/electrical"
//             className="
//               group
//               bg-white/80
//               backdrop-blur-xl
//               rounded-3xl
//               p-8
//               shadow-xl
//               border
//               border-yellow-100
//               hover:-translate-y-3
//               transition-all
//               duration-300
//             "
//           >

//             <div className="
//               w-20
//               h-20
//               rounded-3xl
//               bg-yellow-100
//               flex
//               items-center
//               justify-center
//               text-4xl
//               mb-8
//               group-hover:scale-110
//               transition-all
//             ">
//               ⚡
//             </div>

//             <h2 className="
//               text-3xl
//               font-black
//               text-slate-800
//               mb-4
//               group-hover:text-yellow-600
//               transition-all
//             ">
//               Electrical
//             </h2>

//             <p className="
//               text-slate-600
//               text-lg
//               leading-relaxed
//               mb-8
//             ">

//               Electrical machines,
//               power systems, circuits,
//               control systems & lab manuals.

//             </p>

//             <div className="
//               inline-flex
//               items-center
//               gap-2
//               px-5
//               py-3
//               rounded-full
//               bg-yellow-50
//               text-yellow-700
//               font-bold
//               text-sm
//             ">

//               Explore Notes →

//             </div>

//           </a>

//           {/* Electronics */}
//           <a
//             href="/learning-hub/college-notes/electronics"
//             className="
//               group
//               bg-white/80
//               backdrop-blur-xl
//               rounded-3xl
//               p-8
//               shadow-xl
//               border
//               border-purple-100
//               hover:-translate-y-3
//               transition-all
//               duration-300
//             "
//           >

//             <div className="
//               w-20
//               h-20
//               rounded-3xl
//               bg-purple-100
//               flex
//               items-center
//               justify-center
//               text-4xl
//               mb-8
//               group-hover:scale-110
//               transition-all
//             ">
//               📡
//             </div>

//             <h2 className="
//               text-3xl
//               font-black
//               text-slate-800
//               mb-4
//               group-hover:text-purple-600
//               transition-all
//             ">
//               Electronics
//             </h2>

//             <p className="
//               text-slate-600
//               text-lg
//               leading-relaxed
//               mb-8
//             ">

//               Analog electronics,
//               digital systems, VLSI,
//               communication & embedded systems.

//             </p>

//             <div className="
//               inline-flex
//               items-center
//               gap-2
//               px-5
//               py-3
//               rounded-full
//               bg-purple-50
//               text-purple-700
//               font-bold
//               text-sm
//             ">

//               Explore Notes →

//             </div>

//           </a>

//           {/* BCA */}
//           <a
//             href="/learning-hub/college-notes/bca"
//             className="
//               group
//               bg-white/80
//               backdrop-blur-xl
//               rounded-3xl
//               p-8
//               shadow-xl
//               border
//               border-cyan-100
//               hover:-translate-y-3
//               transition-all
//               duration-300
//             "
//           >

//             <div className="
//               w-20
//               h-20
//               rounded-3xl
//               bg-cyan-100
//               flex
//               items-center
//               justify-center
//               text-4xl
//               mb-8
//               group-hover:scale-110
//               transition-all
//             ">
//               🖥️
//             </div>

//             <h2 className="
//               text-3xl
//               font-black
//               text-slate-800
//               mb-4
//               group-hover:text-cyan-600
//               transition-all
//             ">
//               BCA
//             </h2>

//             <p className="
//               text-slate-600
//               text-lg
//               leading-relaxed
//               mb-8
//             ">

//               Programming, web development,
//               DBMS, networking,
//               software engineering & projects.

//             </p>

//             <div className="
//               inline-flex
//               items-center
//               gap-2
//               px-5
//               py-3
//               rounded-full
//               bg-cyan-50
//               text-cyan-700
//               font-bold
//               text-sm
//             ">

//               Explore Notes →

//             </div>

//           </a>

//         </div>

//       </section>

//     </div>
//   )
// }


export default function CollegeNotes() {
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
              All Branch Notes & Resources
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
              College Notes
            </span>

          </h1>

          <p className="
            max-w-4xl
            mx-auto
            text-lg
            md:text-2xl
            leading-relaxed
            text-slate-600
          ">

            Explore semester-wise notes,
            PDFs, handwritten notes,
            PYQs, practical files,
            lab manuals & university resources.

          </p>

        </div>

        {/* Branch Cards */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-8
        ">

          {/* B.Tech CSE */}
          <a
            href="/learning-hub/college-notes/btech-cse"
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
              duration-300
            "
          >

            {/* Glow */}
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
              w-20
              h-20
              rounded-3xl
              bg-emerald-100
              flex
              items-center
              justify-center
              text-4xl
              mb-8
              group-hover:scale-110
              transition-all
            ">
              💻
            </div>

            <h2 className="
              text-3xl
              font-black
              text-slate-800
              mb-4
              group-hover:text-emerald-600
              transition-all
            ">
              B.Tech CSE
            </h2>

            <p className="
              text-slate-600
              text-lg
              leading-relaxed
              mb-8
            ">

              Computer Science notes,
              DSA, OOPs, OS, DBMS,
              CN, AI & placement preparation.

            </p>

            <div className="
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

              Explore Notes →

            </div>

          </a>

          {/* Mechanical */}
          <div
            className="
              relative
              overflow-hidden
              group
              bg-white/80
              backdrop-blur-xl
              rounded-3xl
              p-8
              shadow-xl
              border
              border-orange-100
              hover:-translate-y-3
              transition-all
              duration-300
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
              w-20
              h-20
              rounded-3xl
              bg-orange-100
              flex
              items-center
              justify-center
              text-4xl
              mb-8
              group-hover:scale-110
              transition-all
            ">
              ⚙️
            </div>

            <h2 className="
              text-3xl
              font-black
              text-slate-800
              mb-4
            ">
              Mechanical
            </h2>

            <p className="
              text-slate-600
              text-lg
              leading-relaxed
              mb-8
            ">

              Thermodynamics, SOM,
              CAD/CAM, machine design,
              manufacturing & workshop notes.

            </p>

            <div className="
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

          {/* Electrical */}
          <div
            className="
              relative
              overflow-hidden
              group
              bg-white/80
              backdrop-blur-xl
              rounded-3xl
              p-8
              shadow-xl
              border
              border-yellow-100
              hover:-translate-y-3
              transition-all
              duration-300
            "
          >

            <div className="
              absolute
              top-0
              right-0
              w-32
              h-32
              bg-yellow-200/30
              blur-3xl
              rounded-full
              animate-pulse
            " />

            <div className="
              w-20
              h-20
              rounded-3xl
              bg-yellow-100
              flex
              items-center
              justify-center
              text-4xl
              mb-8
              group-hover:scale-110
              transition-all
            ">
              ⚡
            </div>

            <h2 className="
              text-3xl
              font-black
              text-slate-800
              mb-4
            ">
              Electrical
            </h2>

            <p className="
              text-slate-600
              text-lg
              leading-relaxed
              mb-8
            ">

              Electrical machines,
              power systems, circuits,
              control systems & labs.

            </p>

            <div className="
              inline-flex
              items-center
              gap-2
              px-5
              py-3
              rounded-full
              bg-yellow-100
              text-yellow-700
              font-bold
              text-sm
              animate-bounce
            ">

              🚧 Coming Soon

            </div>

          </div>

          {/* Electronics */}
          <div
            className="
              relative
              overflow-hidden
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
              duration-300
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
              w-20
              h-20
              rounded-3xl
              bg-purple-100
              flex
              items-center
              justify-center
              text-4xl
              mb-8
              group-hover:scale-110
              transition-all
            ">
              📡
            </div>

            <h2 className="
              text-3xl
              font-black
              text-slate-800
              mb-4
            ">
              Electronics
            </h2>

            <p className="
              text-slate-600
              text-lg
              leading-relaxed
              mb-8
            ">

              Analog electronics,
              communication systems,
              VLSI & embedded systems.

            </p>

            <div className="
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

          {/* BCA */}
          <div
            className="
              relative
              overflow-hidden
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
              duration-300
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
              animate-pulse
            " />

            <div className="
              w-20
              h-20
              rounded-3xl
              bg-cyan-100
              flex
              items-center
              justify-center
              text-4xl
              mb-8
              group-hover:scale-110
              transition-all
            ">
              🖥️
            </div>

            <h2 className="
              text-3xl
              font-black
              text-slate-800
              mb-4
            ">
              BCA
            </h2>

            <p className="
              text-slate-600
              text-lg
              leading-relaxed
              mb-8
            ">

              Programming, DBMS,
              networking, web development
              & software engineering.

            </p>

            <div className="
              inline-flex
              items-center
              gap-2
              px-5
              py-3
              rounded-full
              bg-cyan-100
              text-cyan-700
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