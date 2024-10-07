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
      <div className="grids-col-1 container grid sm:grid-cols-2 lg:grid-cols-3">
        <img
          src="/images/Events/Final/1.png"
          className="col-span-1 w-full sm:col-span-2 lg:col-span-1"
          alt=""
          srcset=""
        />
        <img
          src="/images/Events/Final/2.png"
          className="col-span-1 w-full sm:col-span-2 lg:col-span-1"
          alt=""
          srcset=""
        />
        <img
          src="/images/Events/Final/3.png"
          className="col-span-1 w-full sm:col-span-2 lg:col-span-1"
          alt=""
          srcset=""
        />
      </div>
    </main>
  )
}
