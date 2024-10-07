'use client'

import { useState, useEffect } from 'react'
import CountUp from 'react-countup'

// Define the stats array
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
      const rect = section.getBoundingClientRect()
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setIsVisible(true)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      id="highlights"
      className="relative overflow-hidden bg-gray-900 py-24 sm:py-32"
    >
      <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
        <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
          Event Highlights
        </h2>
        <p className="mt-4 text-lg tracking-tight text-white">
          Join us at Aarambha and experience innovation firsthand!
        </p>

        <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base leading-7 text-white">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                {isVisible && (
                  <CountUp start={0} end={stat.value} duration={3} />
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
