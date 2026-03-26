'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import FloatingButtons from '@/components/floating-buttons'
import AccessibilityToolbar from '@/components/accessibility-toolbar'
import { ArrowRight } from 'lucide-react'

const heroSlideImages = [
  '/images/impala-herd.webp',
  '/images/leopard-cub.webp',
  '/images/crowned-crane.webp',
]

const destinations = [
  {
    name: 'Maasai Mara National Reserve',
    description: 'Kenya\'s most iconic reserve. Home to the Big Five, big cats, and the annual Great Wildebeest Migration (July–October).',
    image: '[Photo: Maasai Mara savannah at golden hour — wide open plains, acacia trees, warm light]',
    isPlaceholder: true,
  },
  {
    name: 'Amboseli National Park',
    description: 'Famous elephant herds set against the breathtaking backdrop of Mt. Kilimanjaro.',
    image: '/images/amboseli-elephants.webp',
    isPlaceholder: false,
  },
  {
    name: 'Tsavo East & West National Parks',
    description: 'Kenya\'s largest wilderness. Dramatic landscapes, red-dusted elephants, and diverse wildlife.',
    image: '[Photo: Leopard resting in tree, Tsavo National Park]',
    isPlaceholder: true,
  },
  {
    name: 'Lake Nakuru National Park',
    description: 'Rift Valley gem renowned for its flamingo colonies, rhinos, and leopards.',
    image: '[Photo: Flamingos in flight over Lake Nakuru, pink sky reflection]',
    isPlaceholder: true,
  },
  {
    name: 'Lake Bogoria National Reserve',
    description: 'Hot springs, geysers, and vast flamingo colonies on a striking soda lake.',
    image: '[Photo: Lake Bogoria hot springs and flamingo colony]',
    isPlaceholder: true,
  },
  {
    name: 'Aberdare National Park',
    description: 'Dense highland forests with waterfalls, mountain streams, and dense vegetation.',
    image: '[Photo: Aberdare National Park highland waterfalls and forest]',
    isPlaceholder: true,
  },
  {
    name: 'Mt. Kenya',
    description: 'Kenya\'s second-highest mountain. Dramatic clouds, verdant slopes, and alpine trails.',
    image: '[Photo: Mt. Kenya highland peak — dramatic clouds, greenery]',
    isPlaceholder: true,
  },
  {
    name: 'Meru National Park',
    description: 'Remote wilderness featuring the Big Five, dramatic rocky outcrops, and pristine landscapes.',
    image: '[Photo: Meru National Park remote wilderness at dusk]',
    isPlaceholder: true,
  },
  {
    name: 'Samburu National Reserve',
    description: 'Semi-arid landscape home to reticulated giraffes and other unique species.',
    image: '[Photo: Samburu landscape — reticulated giraffe against dry acacia brush]',
    isPlaceholder: true,
  },
  {
    name: 'Diani Beach',
    description: 'Pristine white sand coastline along the Indian Ocean. Perfect for snorkelling, diving, and relaxation.',
    image: '[Photo: Diani Beach — white sand, turquoise Indian Ocean, palm trees]',
    isPlaceholder: true,
  },
]

export default function DestinationsPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroSlideImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen bg-[#FAF4E8]">
      <Navbar />
      
      {/* Hero with Slideshow */}
      <section className="relative h-96 flex flex-col items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          {heroSlideImages.map((image, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{
                opacity: index === currentImageIndex ? 1 : 0,
              }}
            >
              <Image
                src={image}
                alt={`Kenya wonders slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(28,18,8,0.72) 0%, rgba(28,18,8,0.2) 100%)',
            zIndex: 1,
          }}
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-cormorant text-5xl md:text-6xl text-white mb-4 leading-tight">
            Discover Kenya's Wild Wonders.
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto" style={{ opacity: 0.85 }}>
            Custom tours to every park, reserve, and coastline across Kenya.
          </p>
        </div>
      </section>

      {/* Destination Cards */}
      <section className="py-20 px-4 bg-[#FAF4E8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((dest, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                {dest.isPlaceholder ? (
                  <div
                    style={{
                      backgroundColor: '#C4A882',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      aspectRatio: '3/2',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13px',
                      fontStyle: 'italic',
                      color: '#6B5240',
                      textAlign: 'center',
                      padding: '16px',
                    }}
                  >
                    {dest.image}
                  </div>
                ) : (
                  <div className="relative w-full" style={{ aspectRatio: '3/2' }}>
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-playfair text-[#2A4A35]">
                    {dest.name}
                  </h3>
                  <p className="text-[#1C1208] font-inter text-sm leading-relaxed">
                    {dest.description}
                  </p>
                  <Link
                    href="/book"
                    className="inline-flex items-center gap-2 text-[#D4870A] font-montserrat font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Plan a Safari Here <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
      <AccessibilityToolbar />
    </main>
  )
}
