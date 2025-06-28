"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Command, X } from 'lucide-react'
import Image from 'next/image'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <main>
      {/* Desktop Navbar */}
      <div className='flex justify-evenly lg:grid grid-cols-2 items-center text-white mx-4 xl:mx-48'>
        <div className='justify-self-start font-extrabold'> 
          <ul>
            <li className='flex items-center'>
              <Image src='/Dakhyabg.png' alt='Logo' width={200} height={200} className='-ml-8' />
              <span className='text-sm xl:text-xl mb-12'>
                Dakhya Financial Consultancy
              </span>
            </li>
          </ul>
        </div>
        <div className='justify-self-end'>
          <ul className='flex gap-4 xl:gap-7 mb-10 cursor-pointer text-sm xl:text-base items-center'>
            <li className='hover:text-[#71A9F7] transition-colors duration-300'>Home</li>
            <li className='hover:text-[#71A9F7] transition-colors duration-300'>Services</li>
            <li className='hover:text-[#71A9F7] transition-colors duration-300'>About Us</li>
            <Button className='bg-[#1C1E53] mb-7 mt-5 hover:bg-[#C9DAF1] hover:text-black cursor-pointer transition-all duration-300 text-sm xl:text-base px-4 xl:px-6'>
              Contact Us
            </Button>
            <SignedOut>
              <SignInButton>
                <Button className='bg-[#1C1E53] mb-7 hover:bg-[#C9DAF1] hover:text-black cursor-pointer transition-all duration-300 text-sm xl:text-base px-4 xl:px-6 mt-5'>
                  Sign In
                </Button>
              </SignInButton>
              {/* <SignUpButton>
                <Button className='bg-[#6c47ff] text-white rounded-full font-medium text-sm xl:text-base h-10 xl:h-12 px-4 xl:px-5 cursor-pointer mb-7'>
                  Sign Up
                </Button>
              </SignUpButton> */}
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </ul>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className='lg:hidden flex items-center justify-between text-white px-4 py-4'>
        <div className='flex items-center'>
          <Image 
            src='/DakhyabgCopy.png' 
            alt='Logo' 
            width={100} 
            height={100} 
            className='-ml-3' 
          />
        </div>
        <button 
          onClick={toggleMobileMenu}
          className='p-2 hover:bg-white/10 rounded-lg transition-colors duration-300'
        >
          {isMobileMenuOpen ? <X size={24} /> : <Command size={24} />}
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={toggleMobileMenu}
      />

      {/* Mobile Sidebar */}
      <div 
        className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-[#131314] z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex items-center justify-between p-6'>
          <div className='flex items-center -ml-10'>
            <Image 
              src='/Dakhyabg.png' 
              alt='Logo' 
              width={120} 
              height={120} 
            />
          </div>
          <button 
            onClick={toggleMobileMenu}
            className='p-2 hover:bg-white/10 rounded-lg transition-colors duration-300'
          >
            <X size={30} className='text-white mb-8' />
          </button>
        </div>
        
        <nav className='p-6'>
          <ul className='space-y-6'>
            <li>
              <a 
                href="#" 
                className='block text-white text-lg hover:text-[#71A9F7] transition-colors duration-300 py-2'
                onClick={toggleMobileMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className='block text-white text-lg hover:text-[#71A9F7] transition-colors duration-300 py-2'
                onClick={toggleMobileMenu}
              >
                Services
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className='block text-white text-lg hover:text-[#71A9F7] transition-colors duration-300 py-2'
                onClick={toggleMobileMenu}
              >
                About Us
              </a>
            </li>
            <li className='pt-4'>
              <Button 
                className='w-full bg-[#1C1E53] hover:bg-[#C9DAF1] hover:text-black cursor-pointer transition-all duration-300 py-3'
                onClick={toggleMobileMenu}
              >
                Contact Us
              </Button>
            </li>
            <SignedOut>
              <li className='pt-4'>
                <SignInButton>
                  <Button 
                    className='w-full bg-[#1C1E53] hover:bg-[#C9DAF1] hover:text-black cursor-pointer transition-all duration-300 py-3'
                    onClick={toggleMobileMenu}
                  >
                    Sign In
                  </Button>
                </SignInButton>
              </li>
            </SignedOut>
            <SignedIn>
              <li className='pt-4'>
                <UserButton />
              </li>
            </SignedIn>
          </ul>
        </nav>
      </div>
    </main>
  )
}

export default Navbar