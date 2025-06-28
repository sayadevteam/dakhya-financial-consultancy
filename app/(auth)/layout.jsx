import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <div className='flex justify-center pt-32 bg-[#131314] min-h-screen' >
        {children}
    </div>
  )
}

export default AuthLayout