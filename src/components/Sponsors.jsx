'use client'

export function Sponsors() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            alt="Transistor"
            src="/images/sponsors/acem.png"
            width={158}
            height={48}
            className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Transistor"
            src="/images/sponsors/acem.png"
            width={158}
            height={48}
            className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Transistor"
            src="/images/sponsors/acem.png"
            width={158}
            height={48}
            className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Transistor"
            src="/images/sponsors/acem.png"
            width={158}
            height={48}
            className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Transistor"
            src="/images/sponsors/acem.png"
            width={158}
            height={48}
            className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
          />
        </div>
        <div className="mt-16 flex justify-center">
          <p className="relative rounded-full bg-gray-50 px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/5">
            <span className="hidden md:inline">
              Over 50+ organizations are supporting us
            </span>
            <a href="#" className="font-semibold text-indigo-600">
              <span aria-hidden="true" className="absolute inset-0" /> view all.
              <span aria-hidden="true">&rarr;</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
