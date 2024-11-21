import { useState } from 'react'
import Link from 'next/link'

export function CompetitionsDropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const competitions = [
    { name: 'Hackathon', url: '/competitions/hackathon' },
    {
      name: 'ProjectDemonstration',
      url: '/competitions/project-demonstration',
    },
    { name: 'RoboPOP Challenge', url: '/competitions/robopop-challenge' },
    { name: 'Robo Sumo', url: '/competitions/robo-sumo' },
    { name: 'Circuit Architect', url: '/competitions/circuit-architect' },

    { name: 'Mesh Merize', url: '/competitions/mesh-merize' },
    { name: 'Cozmo Clench', url: '/competitions/cozmo-clench' },
    { name: 'Code Code', url: '/competitions/code-code' },
    { name: 'Techfest Olympiad', url: '/competitions/techfest-olympiad' },

    // civil
    { name: 'AutoCAD Pro', url: '/competitions/autocad-pro' },
    {
      name: 'Popsicle Bridge Competition',
      url: '/competitions/popsicle-bridge',
    },
    { name: 'Shake Table Competition', url: '/competitions/shake-table' },
    // pace
    { name: 'Lens Craft Photography', url: '/competitions/lens-craft' },
  ]

  return (
    <div className="relative ">
      <button
        onClick={handleDropdownToggle}
        className="text-sm text-gray-800 hover:text-blue-600 focus:outline-none md:px-4 md:pt-1"
        aria-haspopup="true"
        aria-expanded={isDropdownOpen}
      >
        Competitions{' '}
        <span aria-hidden="true" className="text-slate-400">
          ▼
        </span>
      </button>
      {isDropdownOpen && (
        <div className="absolute left-0 z-10 mt-2 w-96 rounded-md bg-slate-300 shadow-lg">
          <div className="grid grid-cols-2 gap-4 p-4">
            {competitions.map((competition) => (
              <Link
                key={competition.name}
                href={competition.url}
                className="block py-2 text-center text-gray-800 hover:bg-gray-100"
                onClick={() => setIsDropdownOpen(false)} // Close dropdown on click
              >
                {competition.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
