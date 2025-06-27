import React from 'react'
import { Button } from './ui/button'
import { ChartArea, StopCircle } from 'lucide-react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <main>
      <div className='grid grid-cols-2 items-center bg-black text-white '> {/* Changed to text-white/90 for higher opacity */}
        
        <div className='justify-self-center font-extrabold'>
            <ul>
                <li className='flex'>
                   <Image src='/Dakhyabg.png' alt='Logo' width={150} height={150} className='' />
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