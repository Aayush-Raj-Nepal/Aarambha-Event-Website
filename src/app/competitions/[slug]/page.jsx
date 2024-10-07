import React from 'react'
import { Container } from '@/components/Container'
import Competitions from '@/content/Competitions.json'

export default function Page({ params }) {
  const competition = Competitions.find((comp) => comp.slug === params.slug)

  return (
    <Container>
      <div className="py-12">
        <h1 className="p-4 text-center text-3xl font-bold text-white">
          {params.slug.toUpperCase()}
        </h1>

        <div className="mt-8">
          {competition && (
            <div className="grid grid-cols-2 gap-6 rounded-lg border border-gray-200 bg-transparent p-6 shadow-md transition-transform hover:scale-105">
              <div className="col-span-2 md:col-span-1">
                <img
                  src={competition.imgUrl}
                  alt={competition.title}
                  className="mb-4 w-full rounded object-cover"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <h2 className="text-2xl font-semibold text-slate-300">
                  {competition.title}
                </h2>
                <h3 className="text-md text-slate-300">
                  {competition.subtitle}
                </h3>
                <p className="mt-2 text-slate-300">{competition.description}</p>
                <p className="mt-2 text-slate-300">
                  <strong>Date:</strong> {competition.date} <br />
                  <strong>Time:</strong> {competition.time} <br />
                  <strong>Venue:</strong> {competition.venue}
                </p>

                <div className="mt-4 text-slate-300">
                  <h4 className="text-lg font-semibold">Coordinators:</h4>
                  <ul className="list-disc pl-5">
                    {competition.coordinators.map((coordinator) => (
                      <li key={coordinator.name}>
                        <a
                          href={`tel:${coordinator.contact}`}
                          className="text-blue-500 hover:underline"
                        >
                          {coordinator.name} - {coordinator.contact}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 text-slate-300">
                  <h4 className="text-lg font-semibold">Prizes:</h4>
                  <ul className="list-disc pl-5">
                    {Object.entries(competition.prizes).map(
                      ([place, amount]) => (
                        <li key={place}>
                          {place.replace(/_/g, ' ')}: {amount}
                        </li>
                      ),
                    )}
                  </ul>
                </div>

                {/* Registration Link */}
                <div className="mt-6">
                  <a
                    href={competition.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-400"
                  >
                    Click here for details and registration
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  )
}
