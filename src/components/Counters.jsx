'use client'

import { useState, useEffect } from 'react'
import CountUp from 'react-countup'

const stats = [
  { id: 1, name: 'Expected Visitors', value: 10000, suffix: '+' },
  { id: 2, name: 'Interactive Stalls', value: 100, suffix: '+' },
  { id: 3, name: 'Innovative Projects', value: 100, suffix: '+' },
]

export function Counters() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('highlights')
      if (section) {
        const rect = section.getBoundingClientRect()
        const threshold = window.innerHeight * 0.75 
        if (rect.top <= threshold && rect.bottom >= 0) {
          setIsVisible(true)
        }
      }
    }

    // Initial check
    handleScroll()
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      id="highlights"
      className="relative overflow-hidden bg-gray-900 py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl tracking-tight text-white">
            Event Highlights
          </h2>
          <p className="mt-2 sm:mt-3 md:mt-4 text-base sm:text-lg tracking-tight text-white">
            Join us at Aarambha and experience innovation firsthand!
          </p>
        </div>

        <dl className="mt-8 sm:mt-10 grid grid-cols-1 gap-y-8 sm:gap-y-12 md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex flex-col gap-y-2 sm:gap-y-3 md:gap-y-4 w-full max-w-[280px]"
            >
              <dt className="text-sm sm:text-base md:text-lg leading-7 text-white text-center">
                {stat.name}
              </dt>
              <dd className="order-first text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white text-center">
                {isVisible && (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={3}
                    separator=","
                  />
                )}
                {stat.suffix}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}