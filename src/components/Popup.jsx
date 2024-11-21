'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export function Popup() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const notices = [
    '/images/notice/notice 1.jpg',
    '/images/notice/notice 2.jpg',
    '/images/notice/notice 3.jpg',
  ]


  useEffect(() => {
    if (!isOpen) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % notices.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isOpen, notices.length])

  useEffect(() => {
    setIsOpen(true)
  }, [])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-[2px] p-4"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative max-w-4xl rounded-lg bg-white/90 p-4"
        onClick={(e) => e.stopPropagation()} 
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute -right-3 -top-3 rounded-full bg-red-500 p-2 text-white hover:bg-red-600"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="relative h-[80vh] w-[90vw] max-w-4xl">
          <Image
            src={notices[currentImageIndex]}
            alt={`Notice ${currentImageIndex + 1}`}
            fill
            priority
            className="rounded-lg object-contain"
          />
        </div>

        {notices.length > 1 && (
          <>
            <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4">
              <button
                onClick={() =>
                  setCurrentImageIndex((prev) =>
                    prev === 0 ? notices.length - 1 : prev - 1
                  )
                }
                className="rounded-full bg-white/90 p-2 shadow-lg hover:bg-white"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={() =>
                  setCurrentImageIndex((prev) => (prev + 1) % notices.length)
                }
                className="rounded-full bg-white/90 p-2 shadow-lg hover:bg-white"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Dots indicator */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {notices.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 w-2 rounded-full ${
                    currentImageIndex === index
                      ? 'bg-blue-500'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
