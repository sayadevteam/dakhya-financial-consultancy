"use client";
import React from 'react'
import Link from 'next/link'

const Footer = () => {
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#131314] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 justify-center">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-3xl font-bold bg-white bg-clip-text text-transparent mb-4">
                <span className='text-[#71A9F7]'>Dakhya</span> Financial Consultancy
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Your trusted partner in financial excellence and strategic growth. We deliver innovative solutions that drive sustainable business success.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span>dakhyafinancialconsultancy@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Mumbai, Maharashtra</span>
              </div>
            </div>
          </div>

          

          {/* Quick Links */}
          <div className='flex-col justify-end'>
            <h3 className="text-xl font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: "Home", id: "home" },
                { name: "Services", id: "services" },
                { name: "About Us", id: "about" },
                { name: "Contact Us", id: "contact" },
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleScroll(link.id)}
                    className="relative hover:text-[#71A9F7] transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#71A9F7] after:transition-all after:duration-300 cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-gray-700/50 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            

            {/* Social Media */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-300 mr-4">Follow Us:</span>
              {[
                { 
                  name: "LinkedIn", 
                  icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.026-3.06-1.863-3.06-1.865 0-2.149 1.451-2.149 2.953v5.711h-3v-11h2.881v1.524h.041c.4-.762 1.381-1.863 2.841-1.863 3.038 0 3.6 2.001 3.6 4.603v6.236z",
                  color: "hover:bg-blue-600",
                  url: "https://www.linkedin.com/company/dakhya-financial-consultancy/"
                },
                { 
                  name: "LinkedIn", 
                  icon: "M12 2.5c3.25 0 3.625.012 4.875.07 1.25.057 2.375.288 3.25 1.163.875.875 1.106 2 1.163 3.25.058 1.25.07 1.625.07 4.875s-.012 3.625-.07 4.875c-.057 1.25-.288 2.375-1.163 3.25-.875.875-2 1.106-3.25 1.163-1.25.058-1.625.07-4.875.07s-3.625-.012-4.875-.07c-1.25-.057-2.375-.288-3.25-1.163-.875-.875-1.106-2-1.163-3.25-.058-1.25-.07-1.625-.07-4.875s.012-3.625.07-4.875c.057-1.25.288-2.375 1.163-3.25.875-.875 2-1.106 3.25-1.163 1.25-.058 1.625-.07 4.875-.07zm0-2.5c-3.375 0-3.75.014-5.063.073-1.563.072-2.938.406-4.063 1.531-1.125 1.125-1.469 2.5-1.531 4.063-.059 1.313-.073 1.688-.073 5.063s.014 3.75.073 5.063c.072 1.563.406 2.938 1.531 4.063 1.125 1.125 2.5 1.469 4.063 1.531 1.313.059 1.688.073 5.063.073s3.75-.014 5.063-.073c1.563-.072 2.938-.406 4.063-1.531 1.125-1.125 1.469-2.5 1.531-4.063.059-1.313.073-1.688.073-5.063s-.014-3.75-.073-5.063c-.072-1.563-.406-2.938-1.531-4.063-1.125-1.125-2.5-1.469-4.063-1.531-1.313-.059-1.688-.073-5.063-.073zm0 5.75c-3.313 0-6 2.688-6 6s2.688 6 6 6 6-2.688 6-6-2.688-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm6.5-10.5c-.828 0-1.5.672-1",
                  url: "https://www.instagram.com/dakhyafinancialconsultancy?igsh=MTdva2x4cjJzZGk2cw%3D%3D&utm_source=qr"
                },
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-gray-700/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color} group`}
                  aria-label={social.name}
                >
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon}/>
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p>© 2025 Dakhya Financial Consultancy. All rights reserved.</p>
            <div className="flex space-x-4">
              
            </div>
          </div>
            <p className="mt-4 md:mt-0">
              <span>Developed by <Link href={"https://saya-delta.vercel.app/"} className='hover:underline'>Saya</Link></span>
            </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer