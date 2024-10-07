'use client'
import { useEffect, useState } from 'react'

const MouseTrailer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div
      className="pointer-events-none fixed transition-transform duration-200"
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div className="h-12 w-12 animate-pulse rounded-full bg-blue-500 shadow-lg"></div>
    </div>
  )
}

export default MouseTrailer
