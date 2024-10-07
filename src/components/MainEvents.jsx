'use client'

import EventsTimeline from '@/content/EventTimeline.json'

export function MainEvents() {
  // Filter events by day1 and day2
  const day1Events = EventsTimeline.filter((event) => event.day1)
  const day2Events = EventsTimeline.filter((event) => event.day2)

  return (
    <main id="events" className="bg-white p-8 text-gray-900">
      <h1 className="mb-8 bg-white text-center text-4xl font-bold shadow">
        Events
      </h1>

      {/* Day 1 Events Section */}
      <section className="mb-12">
        <h2 className="mb-4 text-center text-3xl font-semibold">
          22nd November
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {day1Events.map((event, index) => (
            <article
              key={index}
              className="rounded-lg bg-gray-100 p-6 shadow-md"
            >
              {' '}
              {/* {event.imgUrl && (
                <img
                  src={event.imgUrl}
                  alt={event.event_name}
                  className="mt-2 h-40 rounded-lg"
                />
              )} */}
              <h3 className="text-xl font-semibold">{event.event_name}</h3>
              <p className="mt-2 text-gray-600">{event.shortDesc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Day 2 Events Section */}
      <section>
        <h2 className="mb-4 text-center text-3xl font-semibold">
          23rd November
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {day2Events.map((event, index) => (
            <article
              key={index}
              className="rounded-lg bg-gray-100 p-6 shadow-md"
            >
              {/* {event.imgUrl && (
                <img
                  src={event.imgUrl}
                  alt={event.event_name}
                  className="mt-2 h-40 rounded-lg"
                />
              )} */}
              <h3 className="text-xl font-semibold">{event.event_name}</h3>
              <p className="mt-2 text-gray-600">{event.shortDesc}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
