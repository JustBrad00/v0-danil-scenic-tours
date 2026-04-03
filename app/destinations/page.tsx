'use client'

import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import FloatingButtons from '@/components/floating-buttons'
import AccessibilityToolbar from '@/components/accessibility-toolbar'
import { ArrowRight } from 'lucide-react'

const destinations = [
  {
    name: 'Maasai Mara',
    description: 'Explore the world-famous Maasai Mara with expertly guided safari tours, breathtaking game drives, and the chance to witness the Big Five and the Great Migration.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-27%20094056-epSavrISmZLiwYYh4tsgGqat52e34W.webp',
    isPlaceholder: false,
  },
  {
    name: 'Amboseli',
    description: 'Experience Amboseli National Park with stunning views of Mount Kilimanjaro, large elephant herds, and unforgettable wildlife safari tours.',
    image: '/images/amboseli-elephants.webp',
    isPlaceholder: false,
  },
  {
    name: 'Lake Nakuru',
    description: 'Visit Lake Nakuru for scenic landscapes, flamingos, rhino sightings, and memorable wildlife safaris in one of Kenya\'s most iconic parks.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2812%29-s02sGMy6RmxVwGRkXsuExT87bOTlVI.webp',
    isPlaceholder: false,
  },
]

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-[#FAF4E8]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] flex flex-col items-center justify-center pt-20 px-4">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-27%20094056-epSavrISmZLiwYYh4tsgGqat52e34W.webp"
            alt="Maasai Mara buffalo herd safari destination in Kenya"
            fill
            className="object-cover"
            priority
            loading="eager"
            sizes="100vw"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(28,18,8,0.72) 0%, rgba(28,18,8,0.2) 100%)',
            zIndex: 1,
          }}
        />
        <div className="relative z-10 text-center max-w-2xl">
          <h1 className="font-playfair text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
            Explore Kenya's Premier Destinations
          </h1>
          <p className="text-white text-lg md:text-xl" style={{ opacity: 0.85 }}>
            Discover the best safari experiences across our curated destinations
          </p>
        </div>
      </section>

      {/* Destination Cards */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-[#FAF4E8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {destinations.map((dest, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                {dest.isPlaceholder ? (
                  <div
                    style={{
                      backgroundColor: '#C4A882',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      aspectRatio: '4/3',
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
                  <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                    <Image
                      src={dest.image}
                      alt={`${dest.name} safari destination - ${dest.description}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading={index === 0 ? 'eager' : 'lazy'}
                      priority={index === 0}
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-6 md:p-8 space-y-4">
                  <h3 className="text-xl md:text-2xl font-playfair text-[#2A4A35]">
                    {dest.name}
                  </h3>
                  <p className="text-[#1C1208] font-inter text-sm md:text-base leading-relaxed">
                    {dest.description}
                  </p>
                  <Link
                    href="/book"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4870A] text-white font-montserrat font-semibold text-sm rounded-lg hover:shadow-lg transition-all hover:gap-3"
                  >
                    Book This Safari <ArrowRight size={16} />
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
