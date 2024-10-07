'use client'

export function Hero({ children }) {
  return (
    <div className="relative isolate min-h-lvh overflow-hidden pt-14">
      {/* Background Image */}
      <img
        alt=""
        src="/images/banner.png"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black to-black opacity-95"></div>

      {/* Decorative Gradient Blob */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      {children}
    </div>
  )
}
