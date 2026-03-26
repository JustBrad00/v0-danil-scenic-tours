'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// All available images
const allImages = [
  '/images/cultural-gathering.webp',
  '/images/elephant-kilimanjaro.webp',
  '/images/beach-diving.webp',
  '/images/amboseli-elephants.webp',
  '/images/zebras-savanna.webp',
  '/images/cheetah-resting.webp',
  '/images/impala-herd.webp',
  '/images/leopard-cub.webp',
  '/images/crowned-crane.webp',
]

// Best 3 different images for second section
const safariExperiencesImages = [
  '/images/elephant-kilimanjaro.webp',
  '/images/cheetah-resting.webp',
  '/images/amboseli-elephants.webp',
]

// Different images for third section
const wildWondersImages = [
  '/images/impala-herd.webp',
  '/images/leopard-cub.webp',
  '/images/crowned-crane.webp',
]

interface SlideshowProps {
  images: string[]
  title: string
  description: string
  ctaText?: string
  ctaLink?: string
}

function Slideshow({ images, title, description, ctaText, ctaLink }: SlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [autoPlay, images.length])

  const goToPrevious = () => {
    setAutoPlay(false)
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setAutoPlay(false)
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  return (
    <section className="relative w-full py-24 overflow-hidden">
      {/* Slideshow Container */}
      <div className="relative w-full h-96 md:h-[28rem] lg:h-[32rem]">
        {/* Images */}
        {images.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: index === currentIndex ? 1 : 0,
            }}
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Dark Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(28,18,8,0.5) 0%, rgba(28,18,8,0.3) 100%)',
            zIndex: 2,
          }}
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
          <div className="text-center max-w-2xl">
            <h2 className="font-playfair text-4xl md:text-5xl text-white mb-4 drop-shadow-lg">
              {title}
            </h2>
            <p className="text-white text-lg md:text-xl mb-8 drop-shadow-md">
              {description}
            </p>
            {ctaText && ctaLink && (
              <Link
                href={ctaLink}
                className="inline-block px-8 py-3 bg-[#D4870A] text-[#1C1208] font-montserrat font-semibold rounded-lg hover:shadow-lg transition-all"
              >
                {ctaText}
              </Link>
            )}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-40 hover:bg-opacity-60 text-white p-2 rounded-full transition-all"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-40 hover:bg-opacity-60 text-white p-2 rounded-full transition-all"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setAutoPlay(false)
                setCurrentIndex(index)
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-white w-8' : 'bg-white bg-opacity-50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ImageSlideshowSections() {
  return (
    <>
      {/* Section 1: All Images */}
      <Slideshow
        images={allImages}
        title="Your Dream Safari is One Message Away"
        description="Explore Kenya's most breathtaking wildlife and landscapes. From majestic elephants to graceful birds, every moment is a memory waiting to be made."
        ctaText="Book Your Safari"
        ctaLink="/book"
      />

      {/* Section 2: Best 3 Images */}
      <Slideshow
        images={safariExperiencesImages}
        title="Safari Experiences Built Around You"
        description="Tailored adventures designed specifically for your interests, pace, and dreams. Experience Kenya your way."
        ctaText="Customize Your Experience"
        ctaLink="/book"
      />

      {/* Section 3: Different Images */}
      <Slideshow
        images={wildWondersImages}
        title="Discover Kenya's Wild Wonders"
        description="Encounter Africa's most iconic wildlife in their natural habitat. Witness the majesty, the beauty, and the raw power of nature."
        ctaText="Plan Your Journey"
        ctaLink="/safaris"
      />
    </>
  )
}
