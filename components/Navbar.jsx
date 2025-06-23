import React from 'react'
import { Button } from './ui/button'
import { ChartArea, StopCircle } from 'lucide-react'

const Navbar = () => {
  return (
    <main>
      <div className='grid grid-cols-2 p-6 items-center text-black'>
        <div className='justify-self-center pr-64 font-extrabold'>
            <ul>
                <l className='flex text-xl'>
                   Dakhya Financial Consultancy
                </l>
            </ul>
        </div>
        <div className='justify-self-center'>
            <ul className='flex gap-7 items-center cursor-pointer'>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <Button className='bg-[#1C1E53] hover:bg-[#C9DAF1] hover:text-black cursor-pointer'><li>Contact Us</li></Button>
            </ul>
        </div>
      </div>
    </main>
  )
}

export default Navbar