import React from 'react'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <main>
      <div className='grid grid-cols-2 p-6 items-center'>
        <div className='justify-self-center'>
            <ul>
                <li>
                    Dakhya Financial Consultancy
                </li>
            </ul>
        </div>
        <div className='justify-self-center'>
            <ul className='flex gap-7 items-center'>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <Button className='bg-green-800'><li>Contact Us</li></Button>
            </ul>
        </div>
      </div>
    </main>
  )
}

export default Navbar