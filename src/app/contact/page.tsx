'use client'

import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeInUp, fadeIn, slideInLeft, slideInRight } from '@/utils/animations'

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Failed to send message')
      
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section className="py-24 bg-gradient-to-b from-indigo-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.h1 
          className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-gray-900 dark:text-white"
          {...fadeInUp}
        >
          Get in Touch
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <motion.div className="space-y-10" {...slideInLeft}>
            <motion.div {...fadeInUp}>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Feel free to reach out for collaborations, project inquiries, or just a friendly chat.
              </p>
            </motion.div>

            <div className="space-y-6">
              <motion.div className="flex items-center gap-4" {...fadeInUp} whileHover={{ x: 10 }}>
                <FaEnvelope className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:your.email@example.com" className="text-secondary hover:text-primary transition-colors">
                    dk6558417@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div className="flex items-center gap-4" {...fadeInUp} whileHover={{ x: 10 }}>
                <FaPhone className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <a href="tel:+1234567890" className="text-secondary hover:text-primary transition-colors">
                    +91 (732) 220-58408
                  </a>
                </div>
              </motion.div>

              <motion.div className="flex items-center gap-4" {...fadeInUp} whileHover={{ x: 10 }}>
                <FaMapMarkerAlt className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-secondary">Punjab Currently</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div className="bg-white dark:bg-dark/50 p-8 rounded-2xl shadow-lg" {...slideInRight}>
            <motion.form onSubmit={handleSubmit} className="space-y-6" {...fadeIn}>
              
              <motion.input 
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
              />

              <motion.input 
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
              />

              <motion.textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
              />

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 font-semibold transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </motion.button>

              {status === 'success' && (
                <motion.p 
                  className="text-green-500 text-center mt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Message sent successfully!
                </motion.p>
              )}

              {status === 'error' && (
                <motion.p 
                  className="text-red-500 text-center mt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
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
