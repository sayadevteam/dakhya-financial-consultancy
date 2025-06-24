"use client"
import React, { useState, useEffect } from 'react'

const HomePage = () => {
  const [counts, setCounts] = useState({ clients: 0, years: 0, success: 0 })
  const [hasAnimated, setHasAnimated] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // Ensure components show up immediately on load
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Counting animation effect
  useEffect(() => {
    if (!isLoaded) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          
          // Animate clients count to 500
          let clientCount = 0
          const clientInterval = setInterval(() => {
            clientCount += 10
            if (clientCount >= 500) {
              clientCount = 500
              clearInterval(clientInterval)
            }
            setCounts(prev => ({ ...prev, clients: clientCount }))
          }, 50)

          // Animate years count to 15
          let yearCount = 0
          const yearInterval = setInterval(() => {
            yearCount += 2
            if (yearCount >= 15) {
              yearCount = 15
              clearInterval(yearInterval)
            }
            setCounts(prev => ({ ...prev, years: yearCount }))
          }, 100)

          // Animate success rate to 98
          let successCount = 0
          const successInterval = setInterval(() => {
            successCount += 2
            if (successCount >= 98) {
              successCount = 98
              clearInterval(successInterval)
            }
            setCounts(prev => ({ ...prev, success: successCount }))
          }, 60)
        }
      },
      { threshold: 0.1 }
    )

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const statsElement = document.getElementById('statistics')
      if (statsElement) observer.observe(statsElement)
    }, 100)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [hasAnimated, isLoaded])

  // if (!isLoaded) {
  //   return (
  //     <div className='min-h-screen bg-white flex items-center justify-center'>
  //       <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1C1E53]"></div>
  //     </div>
  //   )
  // }

  return (
    <div className='min-h-screen flex items-center justify-center p-4'>
      <div className='max-w-7xl w-full flex items-center'>
        {/* Left Content Section */}
        <div 
          className='flex-1 pr-16 mb-30'
          style={{
            animation: isLoaded ? 'fadeInLeft 1s ease-out forwards' : 'none',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateX(0)' : 'translateX(-50px)'
          }}
        >
          <h1 
            className='text-6xl font-bold text-[#71A9F7 ] mb-4 leading-tight'
            style={{
              animation: isLoaded ? 'fadeInUp 1s ease-out 0.5s both' : 'none',
              opacity: isLoaded ? 1 : 0
            }}
          >
            Strategic<br />
            <span className='text-[#1C1E53]'>Financial</span><br />
            <span className='text-[#1C1E53]'>Consulting</span>
          </h1>
          
          <p 
            className='text-gray-600 text-lg mb-12 leading-relaxed max-w-lg'
            style={{
              animation: isLoaded ? 'fadeInUp 1s ease-out 0.8s both' : 'none',
              opacity: isLoaded ? 1 : 0
            }}
          >
            At Dakhya Financial Consultancy, we don't just work with numbers—we partner with you to shape a stronger financial future. Whether you're starting up or scaling up, our expert guidance on profitability, cash flow, debt, and cost control helps you grow with confidence, clarity, and complete peace of mind.
          </p>
          
          <div 
            className='flex gap-4 mb-8'
            style={{
              animation: isLoaded ? 'fadeInUp 1s ease-out 1.1s both' : 'none',
              opacity: isLoaded ? 1 : 0
            }}
          >
            <button className='bg-[#1C1E53] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#C9DAF1] hover:text-black cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg'>
              Schedule Consultation
            </button>
            <button className='border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium hover:border-gray-400 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer'>
              Learn More
            </button>
          </div>
          
          {/* Statistics */}
          <div 
            id="statistics"
            className='flex gap-20'
            style={{
              animation: isLoaded ? 'fadeInUp 1s ease-out 1.4s both' : 'none',
              opacity: isLoaded ? 1 : 0
            }}
          >
            <div className='hover:scale-110 transition-transform duration-300'>
              <div className='text-5xl font-bold text-gray-800 mb-2'>{counts.clients}+</div>
              <div className='text-gray-600 text-sm'>Clients Served</div>
            </div>
            <div className='hover:scale-110 transition-transform duration-300'>
              <div className='text-5xl font-bold text-gray-800 mb-2'>{counts.years}+</div>
              <div className='text-gray-600 text-sm'>Years Experience</div>
            </div>
            <div className='hover:scale-110 transition-transform duration-300'>
              <div className='text-5xl font-bold text-gray-800 mb-2'>{counts.success}%</div>
              <div className='text-gray-600 text-sm'>Success Rate</div>
            </div>
          </div>
        </div>
        
        {/* Right Image Section */}
        <div 
          className='flex justify-center mb-30'
          style={{
            animation: isLoaded ? 'fadeInRight 1s ease-out 0.5s both' : 'none',
            opacity: isLoaded ? 1 : 0
          }}
        >
          <div 
            className='rounded-2xl p-6 items-center hover:scale-105 transition-all duration-500'
          >
            {/* Professional Image */}
            <img 
              src="/business.png"
              alt="Professional consultation"
              width="200%"
              className='rounded-2xl transition-shadow duration-300'
              style={{
                animation: isLoaded ? 'fadeIn 1.5s ease-out 2.5s both' : 'none',
                opacity: isLoaded ? 1 : 0
              }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}

export default HomePage