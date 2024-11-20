'use client'
import React from 'react'
import posts from '../content/Technorian.json'
import Link from 'next/link'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

export default function Technorian() {
  return (
    <div id="competitions" className="bg-gray-900 py-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Technorian
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Unleash your talents across Aarambha&apos; thrilling 360° lineup of
            competitions!
          </p>
        </div>
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={1500}
          infinite={true}
          keyBoardControl={true}
          showDots={false}
        >
          {posts.map((post) => (
            <Link
              key={post.title}
              className="carousel-item cursor-pointer" // Add the custom class here
              href={`/technorian/${post.slug}`}
            >
              <div className="competitionSliderItem flex flex-col items-center p-4 transition-all duration-300 hover:p-2">
                <img
                  alt=""
                  src={post.imgUrl}
                  className="aspect-[14/14] w-full object-cover"
                />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">
                  {post.title}
                </h3>
                <p className="text-base leading-7 text-gray-300">
                  {post.subtitle}
                </p>
                <p className="text-sm leading-6 text-gray-500">{post.date}</p>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
    </div>
  )
}
