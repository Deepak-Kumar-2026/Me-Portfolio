// import Link from 'next/link'
// import { FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa'

// export default function Footer() {
//   return (
//     <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
//       <div className="container max-w-7xl mx-auto px-4 py-12">
//         <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          
//           {/* Brand & Copyright */}
//           <div className="text-center md:text-left">
//             <Link href="/" className="text-2xl md:text-3xl font-extrabold text-primary">
//               Meralokh&trade;
//             </Link>
//             <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
//               © {new Date().getFullYear()} Meralokh. All rights reserved.
//             </p>
//           </div>

//           {/* Social Media Links */}
//           <div className="flex space-x-6">
//             {[ 
//               { icon: FaGithub, url: 'https://github.com/Deepak-Kumar-2026' },
//               { icon: FaTwitter, url: 'https://twitter.com/yourusername' },
//               { icon: FaLinkedin, url: 'https://linkedin.com/in/deepak-kumar-46b739322/' },
//               { icon: FaInstagram, url: 'https://www.instagram.com/deepak_joshi58408/' },
//               { icon: FaYoutube, url: 'https://youtube.com/yourchannel' },
//             ].map((social, idx) => (
//               <a
//                 key={idx}
//                 href={social.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-500 dark:text-gray-400 hover:text-primary transition-transform transform hover:scale-110"
//               >
//                 <social.icon className="h-6 w-6" />
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Optional Footer Links */}
//         <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4 text-gray-500 dark:text-gray-400 text-sm">
//           <Link href="/about" className="hover:text-primary transition-colors">About</Link>
//           <Link href="/projects" className="hover:text-primary transition-colors">Projects</Link>
//           <Link href="/blogs" className="hover:text-primary transition-colors">My Journey</Link>
//           <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
//         </div>
//       </div>
//     </footer>
//   )
// }



import Link from 'next/link'

import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Brand */}
          <div className="text-center lg:text-left">

            <Link
              href="/"
              className="text-4xl font-black tracking-tight bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent"
            >
              Meralokh™
            </Link>

            <p className="mt-4 max-w-md text-slate-300 leading-relaxed">
              Building modern web experiences with clean UI,
              scalable backend systems, and premium frontend design.
            </p>

            <p className="mt-5 text-sm text-slate-400">
              © {new Date().getFullYear()} Meralokh. All rights reserved.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5">

            {[
              {
                icon: FaGithub,
                url: 'https://github.com/Deepak-Kumar-2026'
              },
              {
                icon: FaTwitter,
                url: 'https://twitter.com/yourusername'
              },
              {
                icon: FaLinkedin,
                url: 'https://linkedin.com/in/deepak-kumar-46b739322/'
              },
              {
                icon: FaInstagram,
                url: 'https://www.instagram.com/deepak_joshi58408/'
              },
              {
                icon: FaYoutube,
                url: 'https://youtube.com/yourchannel'
              }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >

                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-emerald-500 hover:scale-110 transition-all duration-300 shadow-lg">

                  <social.icon className="h-5 w-5" />

                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">

            <Link
              href="/about"
              className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
            >
              About
            </Link>

            <Link
              href="/projects"
              className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
            >
              Projects
            </Link>

            <Link
              href="/blogs"
              className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
            >
              My Journey
            </Link>

            <Link
              href="/contact"
              className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Status */}
          <div className="flex items-center gap-3 text-sm text-slate-400">

            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />

            Available for freelance & collaborations

          </div>
        </div>
      </div>
    </footer>
  )
}