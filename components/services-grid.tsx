'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import ServiceModal from './service-modal'

const services = [
  {
    title: 'Safari Tours',
    description: 'Discover unforgettable Kenya safari tours with guided wildlife experiences across top destinations including Maasai Mara, Amboseli, and Lake Nakuru. Enjoy comfortable transport, expert guides, and tailored safari packages for every traveler.',
    image: '/images/elephant-kilimanjaro.webp',
    isPlaceholder: false,
  },
  {
    title: 'Cultural Expeditions',
    description: 'Experience authentic cultural expeditions that connect you with local communities, traditions, and heritage sites across Kenya. Explore meaningful journeys that blend culture, history, and unforgettable travel experiences.',
    image: '/images/cultural-gathering.webp',
    isPlaceholder: false,
  },
  {
    title: 'Adventure Safaris',
    description: 'Take on thrilling adventure safaris with game drives, scenic landscapes, and exciting wildlife encounters across Kenya\'s iconic national parks and reserves.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-loren-nelson-iii-393937649-14779646-JNYFWwU42lFLNOQPguKoXD6t0DPdE7.webp',
    isPlaceholder: false,
  },
  {
    title: 'Beach Escapes',
    description: 'Unwind with relaxing beach escapes along Kenya\'s beautiful coastline, combining luxury stays, ocean views, and seamless travel experiences after your safari adventure.',
    image: '/images/beach-diving.webp',
    isPlaceholder: false,
  },
  {
    title: 'Custom Safaris',
    description: 'Enjoy fully customized safaris designed around your travel goals, budget, and preferred destinations, from private Kenya safari tours to multi-day wildlife packages.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-31%20at%2010.39.00-zWbc5Kff8Ov83PkpY3KGpLCAFeWlks.webp',
    isPlaceholder: false,
  },
  {
    title: 'Professional Car Hire',
    description: 'Travel with ease through our professional car hire services, offering reliable vehicles and experienced drivers for safaris, city tours, and private travel across Kenya.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-31%20at%2022.58.01-CLCCC7SKHsOzZrZZbCo84McmWU3mT7.webp',
    isPlaceholder: false,
  },
]

export default function ServicesGrid() {
  const [selectedService, setSelectedService] = useState<{
    title: string
    description: string
  } | null>(null)

  const handleLearnMore = (service: typeof services[0]) => {
    setSelectedService({
      title: service.title,
      description: service.description,
    })
  }

  return (
    <section className="py-20 px-4 bg-[#F2E8D5]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-playfair text-[#2A4A35] text-center mb-16">
          Kenya Safari Tours, Kenya Safari Packages & Private Safari Tours
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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
                    alt={`${service.title} - ${service.description} by Danil Scenic Tours Nairobi`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              )}

              {/* Content - Only Title and Button */}
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-playfair text-[#2A4A35]">
                  {service.title}
                </h3>
                <button
                  onClick={() => handleLearnMore(service)}
                  className="inline-flex items-center gap-2 text-[#D4870A] font-montserrat font-semibold hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Modal */}
      {selectedService && (
        <ServiceModal
          isOpen={!!selectedService}
          title={selectedService.title}
          description={selectedService.description}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  )
}
