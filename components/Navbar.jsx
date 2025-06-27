import React from 'react'
import { Button } from './ui/button'
import { ChartArea, StopCircle } from 'lucide-react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <main>
      <div className='grid grid-cols-2 items-center text-black'>
        <div className='justify-self-center pr-64 font-extrabold'>
            <ul>
                <li className='flex text-xl'>
                   <Image src='/Logo.png' alt='Logo' width={120} height={120} className='mr-2' />
                </li>
            </ul>
        </div>
        <div className='justify-self-center'>
            <ul className='flex gap-7 items-center cursor-pointer'>
                <li>Home</li>
                <li>Services</li>
                <li>About Us</li>
                <Button className='bg-[#1C1E53] hover:bg-[#C9DAF1] hover:text-black cursor-pointer'><li>Contact Us</li></Button>
            </ul>
        </div>
      </div>
    </main>
  )
}

export default Navbar