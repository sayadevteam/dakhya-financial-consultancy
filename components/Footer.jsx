import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-[#131314] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Dakhya Consultancy
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
                <span>info@dakhyaconsultancy.com</span>
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

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Our Services</h3>
            <ul className="space-y-4">
              {[
                { name: "Financial Planning" },
                { name: "Business Consulting" },
                { name: "Risk Management" },
                { name: "Investment Advisory" },
                { name: "Tax Planning" }
              ].map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {service.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              {[
                "About Us",
                "Our Team",
                "Case Studies",
                "Resources",
                "Contact Us",
                "Careers"
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-gray-700/50 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Newsletter */}
            <div className="flex-1 max-w-md">
              <h4 className="text-lg font-semibold mb-3 text-white">Stay Updated</h4>
              <div className="flex rounded-lg overflow-hidden bg-gray-800/50 border border-gray-700">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium transition-all duration-300 hover:shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-300 mr-4">Follow Us:</span>
              {[
                { 
                  name: "LinkedIn", 
                  icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.026-3.06-1.863-3.06-1.865 0-2.149 1.451-2.149 2.953v5.711h-3v-11h2.881v1.524h.041c.4-.762 1.381-1.863 2.841-1.863 3.038 0 3.6 2.001 3.6 4.603v6.236z",
                  color: "hover:bg-pink-600"
                },
                { 
                  name: "Twitter", 
                  icon: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.732-.666 1.585-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14.002-7.496 14.002-13.986 0-.209 0-.42-.015-.63.961-.695 1.8-1.562 2.46-2.549l-.001-.011z",
                  color: "hover:bg-sky-500"
                },
                { 
                  name: "Facebook", 
                  icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.41c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796V23.927C19.612 23.027 24 18.062 24 12.073z",
                  color: "hover:bg-blue-700"
                }
              ].map((social, index) => (
                <a 
                  key={index}
                  href="#" 
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
            <p>© 2024 Dakhya Consultancy. All rights reserved.</p>
            <div className="flex space-x-4">
              {/* <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</a> */}
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