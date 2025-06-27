import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#131314] text-gray-300 py-6">
      <div className="flex justify-around max-w-5xl mx-auto flex-wrap mt-20">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Dakhya Consultancy</h3>
          <p className="text-sm">Your trusted partner in financial excellence and strategic growth.</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:underline">Financial Planning</a></li>
            <li><a href="#" className="text-gray-400 hover:underline">Business Consulting</a></li>
            <li><a href="#" className="text-gray-400 hover:underline">Risk Management</a></li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:underline">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:underline">Contact</a></li>
            <li><a href="#" className="text-gray-400 hover:underline">Careers</a></li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.026-3.06-1.863-3.06-1.865 0-2.149 1.451-2.149 2.953v5.711h-3v-11h2.881v1.524h.041c.4-.762 1.381-1.863 2.841-1.863 3.038 0 3.6 2.001 3.6 4.603v6.236z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.732-.666 1.585-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14.002-7.496 14.002-13.986 0-.209 0-.42-.015-.63.961-.695 1.8-1.562 2.46-2.549l-.001-.011z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Facebook</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.41c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796V23.927C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-4 text-xs">
        <p>© 2024 Dakhya Consultancy. All rights reserved.</p>
        <p>Developed by <Link href={"https://saya-delta.vercel.app/"} className='hover:underline'>Saya</Link></p>
      </div>
    </footer>
  )
}

export default Footer
Footer