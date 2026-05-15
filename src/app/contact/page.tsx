// 'use client'

// import { useState } from 'react'
// import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
// import { motion } from 'framer-motion'
// import { fadeInUp, fadeIn, slideInLeft, slideInRight } from '@/utils/animations'

// interface FormData {
//   name: string;
//   email: string;
//   message: string;
// }

// type FormStatus = 'idle' | 'loading' | 'success' | 'error';

// export default function Contact() {
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     email: '',
//     message: ''
//   })
//   const [status, setStatus] = useState<FormStatus>('idle')

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setStatus('loading')

//     try {
//       const response = await fetch('/api/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       })

//       if (!response.ok) throw new Error('Failed to send message')
      
//       setStatus('success')
//       setFormData({ name: '', email: '', message: '' })
//     } catch {
//       setStatus('error')
//     }
//   }

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
//   }

//   return (
//     <section className="py-24 bg-gradient-to-b from-indigo-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
//       <div className="container max-w-7xl mx-auto px-4">
//         <motion.h1 
//           className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-gray-900 dark:text-white"
//           {...fadeInUp}
//         >
//           Get in Touch
//         </motion.h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
//           {/* Contact Info */}
//           <motion.div className="space-y-10" {...slideInLeft}>
//             <motion.div {...fadeInUp}>
//               <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
//               <p className="text-gray-600 dark:text-gray-300">
//                 Feel free to reach out for collaborations, project inquiries, or just a friendly chat.
//               </p>
//             </motion.div>

//             <div className="space-y-6">
//               <motion.div className="flex items-center gap-4" {...fadeInUp} whileHover={{ x: 10 }}>
//                 <FaEnvelope className="h-6 w-6 text-primary" />
//                 <div>
//                   <h3 className="font-semibold">Email</h3>
//                   <a href="mailto:your.email@example.com" className="text-secondary hover:text-primary transition-colors">
//                     dk6558417@gmail.com
//                   </a>
//                 </div>
//               </motion.div>

//               <motion.div className="flex items-center gap-4" {...fadeInUp} whileHover={{ x: 10 }}>
//                 <FaPhone className="h-6 w-6 text-primary" />
//                 <div>
//                   <h3 className="font-semibold">Phone</h3>
//                   <a href="tel:+1234567890" className="text-secondary hover:text-primary transition-colors">
//                     +91 (732) 220-58408
//                   </a>
//                 </div>
//               </motion.div>

//               <motion.div className="flex items-center gap-4" {...fadeInUp} whileHover={{ x: 10 }}>
//                 <FaMapMarkerAlt className="h-6 w-6 text-primary" />
//                 <div>
//                   <h3 className="font-semibold">Location</h3>
//                   <p className="text-secondary">Punjab Currently</p>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div className="bg-white dark:bg-dark/50 p-8 rounded-2xl shadow-lg" {...slideInRight}>
//             <motion.form onSubmit={handleSubmit} className="space-y-6" {...fadeIn}>
              
//               <motion.input 
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
//               />

//               <motion.input 
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
//               />

//               <motion.textarea
//                 name="message"
//                 placeholder="Your Message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 rows={5}
//                 className="w-full px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
//               />

//               <motion.button
//                 type="submit"
//                 disabled={status === 'loading'}
//                 className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 font-semibold transition-colors"
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 {status === 'loading' ? 'Sending...' : 'Send Message'}
//               </motion.button>

//               {status === 'success' && (
//                 <motion.p 
//                   className="text-green-500 text-center mt-2"
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                 >
//                   Message sent successfully!
//                 </motion.p>
//               )}

//               {status === 'error' && (
//                 <motion.p 
//                   className="text-red-500 text-center mt-2"
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                 >
//                   Failed to send message. Please try again.
//                 </motion.p>
//               )}

//             </motion.form>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   )
// }



'use client'

import { useState } from 'react'

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane
} from 'react-icons/fa'

import { motion } from 'framer-motion'

import {
  fadeInUp,
  fadeIn,
  slideInLeft,
  slideInRight
} from '@/utils/animations'

interface FormData {
  name: string
  email: string
  message: string
}

type FormStatus =
  | 'idle'
  | 'loading'
  | 'success'
  | 'error'

export default function Contact() {
  const [formData, setFormData] =
    useState<FormData>({
      name: '',
      email: '',
      message: ''
    })

  const [status, setStatus] =
    useState<FormStatus>('idle')

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault()

    setStatus('loading')

    try {
      const response = await fetch(
        '/api/contact',
        {
          method: 'POST',
          headers: {
            'Content-Type':
              'application/json'
          },
          body: JSON.stringify(formData)
        }
      )

      if (!response.ok)
        throw new Error(
          'Failed to send message'
        )

      setStatus('success')

      setFormData({
        name: '',
        email: '',
        message: ''
      })
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section className="relative overflow-hidden py-28 bg-gradient-to-br from-slate-50 via-cyan-50 to-emerald-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-400/20 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/20 blur-3xl rounded-full" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="container relative z-10 max-w-7xl mx-auto px-4">

        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          {...fadeInUp}
        >

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 mb-6">

            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />

            <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
              Let&apos;s Work Together
            </span>

          </div>

          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-6">

            Get In{' '}

            <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">
              Touch
            </span>

          </h1>

          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Have a project idea, freelance opportunity,
            or collaboration in mind?
            Let&apos;s connect and create something amazing.
          </p>

        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* LEFT SIDE */}
          <motion.div
            className="space-y-8"
            {...slideInLeft}
          >

            {/* Intro Card */}
            <div className="rounded-[30px] border border-white/20 bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-8">

              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Contact Information
              </h2>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                I&apos;m always open to discussing
                new opportunities, creative ideas,
                and innovative projects.
              </p>

            </div>

            {/* Info Cards */}
            <div className="space-y-5">

              {/* Email */}
              <motion.div
                whileHover={{
                  x: 8
                }}
                className="group flex items-center gap-5 rounded-3xl border border-white/20 bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 flex items-center justify-center text-white shadow-lg">

                  <FaEnvelope className="text-xl" />

                </div>

                <div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Email
                  </h3>

                  <a
                    href="mailto:dk6558417@gmail.com"
                    className="text-slate-600 dark:text-slate-300 hover:text-cyan-500 transition-colors"
                  >
                    dk6558417@gmail.com
                  </a>

                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                whileHover={{
                  x: 8
                }}
                className="group flex items-center gap-5 rounded-3xl border border-white/20 bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 flex items-center justify-center text-white shadow-lg">

                  <FaPhone className="text-xl" />

                </div>

                <div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Phone
                  </h3>

                  <a
                    href="tel:+9173222058408"
                    className="text-slate-600 dark:text-slate-300 hover:text-cyan-500 transition-colors"
                  >
                    +91 73222058408
                  </a>

                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                whileHover={{
                  x: 8
                }}
                className="group flex items-center gap-5 rounded-3xl border border-white/20 bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 flex items-center justify-center text-white shadow-lg">

                  <FaMapMarkerAlt className="text-xl" />

                </div>

                <div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Location
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300">
                    Punjab, India
                  </p>

                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            {...slideInRight}
            className="rounded-[30px] border border-white/20 bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-8 md:p-10"
          >

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              {...fadeIn}
            >

              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="
                    w-full
                    px-5 py-4
                    rounded-2xl
                    border border-slate-200 dark:border-slate-700
                    bg-white/80 dark:bg-slate-800/80
                    text-slate-800 dark:text-white
                    placeholder:text-slate-400
                    outline-none
                    focus:ring-4 focus:ring-cyan-500/20
                    focus:border-cyan-400
                    transition-all duration-300
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="
                    w-full
                    px-5 py-4
                    rounded-2xl
                    border border-slate-200 dark:border-slate-700
                    bg-white/80 dark:bg-slate-800/80
                    text-slate-800 dark:text-white
                    placeholder:text-slate-400
                    outline-none
                    focus:ring-4 focus:ring-cyan-500/20
                    focus:border-cyan-400
                    transition-all duration-300
                  "
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="
                    w-full
                    px-5 py-4
                    rounded-2xl
                    border border-slate-200 dark:border-slate-700
                    bg-white/80 dark:bg-slate-800/80
                    text-slate-800 dark:text-white
                    placeholder:text-slate-400
                    outline-none
                    resize-none
                    focus:ring-4 focus:ring-cyan-500/20
                    focus:border-cyan-400
                    transition-all duration-300
                  "
                />
              </div>

              {/* Button */}
              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{
                  scale: 1.02
                }}
                whileTap={{
                  scale: 0.98
                }}
                className="
                  w-full
                  flex items-center justify-center gap-3
                  px-6 py-4
                  rounded-2xl
                  bg-gradient-to-r from-cyan-500 to-emerald-500
                  text-white
                  font-semibold
                  shadow-xl
                  hover:shadow-cyan-500/30
                  transition-all duration-300
                "
              >

                <FaPaperPlane />

                {status === 'loading'
                  ? 'Sending...'
                  : 'Send Message'}

              </motion.button>

              {/* Success */}
              {status === 'success' && (
                <motion.p
                  className="text-emerald-500 text-center font-medium"
                  initial={{
                    opacity: 0,
                    y: 10
                  }}
                  animate={{
                    opacity: 1,
                    y: 0
                  }}
                >
                  Message sent successfully 🚀
                </motion.p>
              )}

              {/* Error */}
              {status === 'error' && (
                <motion.p
                  className="text-rose-500 text-center font-medium"
                  initial={{
                    opacity: 0,
                    y: 10
                  }}
                  animate={{
                    opacity: 1,
                    y: 0
                  }}
                >
                  Failed to send message. Please try again.
                </motion.p>
              )}

            </motion.form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}