'use client'

import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn, scaleIn } from '@/utils/animations';

export default function Hero() {
  return (
    <section className="py-28 bg-gradient-to-r from-indigo-100 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Profile Image */}
          <motion.div 
            className="flex justify-center items-center mb-6"
            {...scaleIn}
            transition={{ delay: 0.2 }}
          >
            <Image 
              src="/profile.avif" 
              alt="Profile" 
              width={120} 
              height={120} 
              className="rounded-full w-32 h-32 object-cover ring-4 ring-primary" 
            />
          </motion.div>

          {/* Heading */}
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-900 dark:text-white tracking-tight"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            Hi, I&apos;m <motion.span 
              className="text-primary"
              {...fadeIn}
              transition={{ delay: 0.8 }}
            >
              Deepak Kumar
            </motion.span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            Full Stack Developer | MERN Stack Enthusiast | Data Science Learner
          </motion.p>

          {/* Social Media Icons */}
          <motion.div 
            className="flex justify-center space-x-4 mb-8"
            {...fadeInUp}
            transition={{ delay: 0.5 }}
          >
            {[ 
              { icon: FaGithub, url: 'https://github.com/Deepak-Kumar-2026' },
              { icon: FaLinkedin, url: 'https://www.linkedin.com/in/deepak-kumar-46b739322/' },
              { icon: FaTwitter, url: 'https://twitter.com/yourusername' },
              { icon: FaInstagram, url: 'https://www.instagram.com/deepak_joshi58408/' },
              { icon: FaYoutube, url: 'https://github.com/Deepak-Kumar-2026' },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary transition-transform transform hover:scale-110"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div 
            className="flex flex-col md:flex-row justify-center gap-4"
            {...fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/projects"
                className="bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                View Projects
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="bg-gray-500 dark:bg-gray-700 inline-block w-full md:w-auto text-gray-800 dark:text-white px-8 py-3 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors font-medium"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
