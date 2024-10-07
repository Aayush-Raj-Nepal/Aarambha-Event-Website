'use client'
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import posts from '../content/Competitions.json'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1536 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1536, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
}

export default function Competitions() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Competitions
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Unleash your talents across Aarambha's thrilling 360° lineup of
            competitions!
          </p>
        </div>

        {/* Carousel section */}
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={false}
          keyBoardControl={true}
          containerClass="carousel-container"
          itemClass="px-4"
        >
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <img
                alt=""
                src={post.imgUrl}
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <time dateTime={post.datetime} className="mr-8">
                  {post.date}
                </time>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
            </article>
          ))}
        </Carousel>
      </div>
    </div>
  )
}
