'use client'

import { useState, useEffect } from 'react'

export function GoToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Show or hide the "Go to Top" button based on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      // Adjust this value for when the button should appear
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  // Add event listener to window scroll
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 rounded-full bg-indigo-500 p-3 text-white shadow-lg hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
        >
          ↑ Top
        </button>
      )}
    </>
  )
}
