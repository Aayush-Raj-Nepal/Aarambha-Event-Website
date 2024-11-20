'use client'

import { useState, useEffect } from 'react'
import confetti from 'canvas-confetti'

export function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [isEventOngoing, setIsEventOngoing] = useState(false)

  useEffect(() => {
    const targetDate = new Date('2024-11-22T10:00:00+05:45').getTime()
    const endDate = new Date('2024-11-23T23:59:59+05:45').getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
        setIsEventOngoing(false)
      } else if (now <= endDate) {
        // Event is ongoing
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        setIsEventOngoing(true)
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        })
      } else {
        // Event has ended
        clearInterval(timer)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        setIsEventOngoing(false)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (isEventOngoing) {
    return (
      <div className="mt-4 flex items-center justify-center">
        <div className="text-white text-3xl font-bold">
          Happening Now
        </div>
      </div>
    )
  }

  return (
    <div className="mt-4 flex items-center justify-center gap-4">
      <div className="text-white">
        <span className="text-3xl font-bold">{timeLeft.days}</span>
        <span className="ml-1 text-sm">days</span>
      </div>
      <div className="text-white">
        <span className="text-3xl font-bold">{timeLeft.hours}</span>
        <span className="ml-1 text-sm">hrs</span>
      </div>
      <div className="text-white">
        <span className="text-3xl font-bold">{timeLeft.minutes}</span>
        <span className="ml-1 text-sm">min</span>
      </div>
      <div className="text-white">
        <span className="text-3xl font-bold">{timeLeft.seconds}</span>
        <span className="ml-1 text-sm">sec</span>
      </div>
    </div>
  )
}