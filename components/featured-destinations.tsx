'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const destinations = [
  {
    name: 'Maasai Mara',
    description: 'Kenya\'s most iconic reserve with the Big Five and Great Wildebeest Migration.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2816%29-okv68gOhxJpXw4n1wmi6LzVWsS5NI3.webp',
    isPlaceholder: false,
  },
  {
    name: 'Amboseli',
    description: 'Famous elephant herds set against Mt. Kilimanjaro\'s breathtaking backdrop.',
    image: '/images/amboseli-elephants.webp',
    isPlaceholder: false,
  },
  {
    name: 'Lake Nakuru',
    description: 'Rift Valley gem renowned for flamingo colonies, rhinos, and leopards.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2812%29-s02sGMy6RmxVwGRkXsuExT87bOTlVI.webp',
    isPlaceholder: false,
  },
]

export default function FeaturedDestinations() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-6 bg-[#FAF4E8]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-playfair text-[#2A4A35] text-center mb-4">
          Where Will Kenya Take You?
        </h2>
        <p className="text-center text-[#1C1208] font-inter mb-16 md:mb-20 max-w-2xl mx-auto text-base md:text-lg">
          Explore some of Kenya's most spectacular destinations
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
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
                    width: '100%',
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
                    alt={dest.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-6 md:p-8 space-y-4">
                <h3 className="text-2xl md:text-3xl font-playfair text-[#2A4A35]">
                  {dest.name}
                </h3>
                <p className="text-[#1C1208] font-inter text-sm md:text-base leading-relaxed">
                  {dest.description}
                </p>
                <Link
                  href="/destinations"
                  className="inline-flex items-center gap-2 text-[#D4870A] font-montserrat font-semibold text-sm hover:gap-3 transition-all"
                >
                  See This Destination <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
