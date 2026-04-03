'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Car } from 'lucide-react'

const services = [
  {
    title: 'Safari Tours',
    description: 'Big Five game drives through Kenya\'s greatest national parks.',
    image: '/images/elephant-kilimanjaro.webp',
    isPlaceholder: false,
  },
  {
    title: 'Cultural Expeditions',
    description: 'Live the traditions, taste the cuisine, meet the people.',
    image: '/images/cultural-gathering.webp',
    isPlaceholder: false,
  },
  {
    title: 'Adventure Safaris',
    description: 'Hiking, biking, and hot air ballooning for the thrill-seeker.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-loren-nelson-iii-393937649-14779646-JNYFWwU42lFLNOQPguKoXD6t0DPdE7.webp',
    isPlaceholder: false,
  },
  {
    title: 'Beach Escapes',
    description: 'Unwind on Kenya\'s pristine Indian Ocean coastline.',
    image: '/images/beach-diving.webp',
    isPlaceholder: false,
  },
]

export default function ServicesGrid() {
  return (
    <section className="py-20 px-4 bg-[#F2E8D5]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-playfair text-[#2A4A35] text-center mb-16">
          What We Offer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              {service.isPlaceholder ? (
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
                  {service.image}
                </div>
              ) : (
                <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-playfair text-[#2A4A35]">
                  {service.title}
                </h3>
                <p className="text-[#1C1208] font-inter leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href="/safaris"
                  className="inline-flex items-center gap-2 text-[#D4870A] font-montserrat font-semibold hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Travel & Transport Solutions Section */}
        <h2 className="text-4xl md:text-5xl font-playfair text-[#2A4A35] text-center mt-24 mb-16">
          Travel & Transport Solutions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Custom Safaris Card */}
          <div
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Custom Safaris service"
          >
            {/* Maasai Mara Map/Itinerary Placeholder */}
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
              Maasai Mara Map & Itinerary
            </div>

            {/* Content */}
            <div className="p-8 space-y-4">
              <h3 className="text-2xl font-playfair text-[#2A4A35]">
                Custom Safaris
              </h3>
              <p className="text-[#1C1208] font-inter leading-relaxed">
                Tailor-made itineraries designed specifically for your interests, budget, and pace. From private family getaways to specialized photography expeditions.
              </p>
              <button
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#F97316] text-white font-montserrat font-semibold rounded-lg hover:shadow-lg transition-all hover:gap-3"
                aria-label="Request a Custom Proposal for safaris"
              >
                Request a Custom Proposal <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Professional Car Hire Card */}
          <div
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Professional Car Hire service"
          >
            {/* Car Icon Background */}
            <div
              style={{
                backgroundColor: '#F97316',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                aspectRatio: '4/3',
                width: '100%',
              }}
            >
              <Car size={80} className="text-white opacity-80" />
            </div>

            {/* Content */}
            <div className="p-8 space-y-4">
              <h3 className="text-2xl font-playfair text-[#2A4A35]">
                Professional Car Hire
              </h3>
              <p className="text-[#1C1208] font-inter leading-relaxed">
                Explore Kenya at your own pace with our fleet of reliable 4x4 Land Cruisers and Safari Vans. Available with professional drivers or as self-drive options.
              </p>
              <button
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#F97316] text-white font-montserrat font-semibold rounded-lg hover:shadow-lg transition-all hover:gap-3"
                aria-label="View Fleet and Rates for car hire"
              >
                View Fleet & Rates <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
