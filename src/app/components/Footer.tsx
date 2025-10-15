import Link from 'next/link'
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          
          {/* Brand & Copyright */}
          <div className="text-center md:text-left">
            <Link href="/" className="text-2xl md:text-3xl font-extrabold text-primary">
              Meralokh&trade;
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              © {new Date().getFullYear()} Meralokh. All rights reserved.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            {[ 
              { icon: FaGithub, url: 'https://github.com/Deepak-Kumar-2026' },
              { icon: FaTwitter, url: 'https://twitter.com/yourusername' },
              { icon: FaLinkedin, url: 'https://linkedin.com/in/deepak-kumar-46b739322/' },
              { icon: FaInstagram, url: 'https://www.instagram.com/deepak_joshi58408/' },
              { icon: FaYoutube, url: 'https://youtube.com/yourchannel' },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-primary transition-transform transform hover:scale-110"
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Optional Footer Links */}
        <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4 text-gray-500 dark:text-gray-400 text-sm">
          <Link href="/about" className="hover:text-primary transition-colors">About</Link>
          <Link href="/projects" className="hover:text-primary transition-colors">Projects</Link>
          <Link href="/blogs" className="hover:text-primary transition-colors">My Journey</Link>
          <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  )
}
