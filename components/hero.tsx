'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

const slideImages = [
  '/images/cheetah-resting.webp',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2816%29-okv68gOhxJpXw4n1wmi6LzVWsS5NI3.webp',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2812%29-s02sGMy6RmxVwGRkXsuExT87bOTlVI.webp',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2813%29-dvsdfGxqdqYzb94D6e93B8K10dhmKW.webp',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2814%29-PPbHtHwWOiOCF897LhCVKG6lE946GY.webp',
]

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % slideImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20">
      {/* Slideshow Background */}
      <div className="absolute inset-0 z-0">
        {slideImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: index === currentImageIndex ? 1 : 0,
            }}
          >
            <Image
              src={image}
              alt={`Kenya wildlife slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* Dark Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(28,18,8,0.72) 0%, rgba(28,18,8,0.2) 100%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="text-[#D4870A] text-xs md:text-sm font-montserrat tracking-widest mb-4">
          NAIROBI, KENYA · EST. 2023
        </div>
        
        <h1 className="font-cormorant text-4xl sm:text-5xl md:text-7xl text-white mb-4 md:mb-6 leading-tight">
          Kenya Is Calling.
        </h1>
        
        <p className="text-white text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed" style={{ opacity: 0.85 }}>
          Guided safaris, cultural expeditions, adventure tours & beach escapes — tailored entirely to you.
        </p>

        <div className="flex gap-3 md:gap-4 justify-center flex-wrap">
          <Link
            href="/safaris"
            className="px-6 md:px-8 py-2 md:py-3 bg-[#D4870A] text-[#1C1208] font-montserrat font-semibold rounded-lg hover:shadow-lg transition-all pulse-glow text-sm md:text-base"
          >
            Explore Our Safaris
          </Link>
          <Link
            href="/book"
            className="px-6 md:px-8 py-2 md:py-3 border-2 border-white text-white font-montserrat font-semibold rounded-lg hover:bg-white hover:text-[#2A4A35] transition-all text-sm md:text-base"
          >
            Plan My Trip
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 z-10 animate-bounce">
        <ChevronDown size={32} className="text-white" />
      </div>
    </section>
  )
}
