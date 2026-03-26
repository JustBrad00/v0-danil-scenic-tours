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
  '/images/elephant-kilimanjaro.webp',
  '/images/amboseli-elephants.webp',
  '/images/cheetah-resting.webp',
]

const services = [
  {
    title: 'Safari Tours',
    tag: 'Safari Tours',
    description: 'Guided game drives through Kenya\'s greatest national parks in our 4x4 pop-up roof jeeps. Witness the Big Five in their natural habitat.',
    details: 'Parks: Maasai Mara · Amboseli · Tsavo East & West · Lake Nakuru · Lake Bogoria · Aberdare · Mt. Kenya · Meru · Samburu\nAvailable as: Private or Group | From $128/person/day (excl. international flights)',
    image: '/images/elephant-kilimanjaro.webp',
    isPlaceholder: false,
  },
  {
    title: 'Cultural Expeditions',
    tag: 'Cultural',
    description: 'Immerse yourself in Kenya\'s vibrant traditions and daily life. Meet local communities, learn their customs, and savour authentic cuisine — including Kalenjin mursik and Gikuyu githeri.',
    details: 'Available as: Private or Group',
    image: '/images/cultural-gathering.webp',
    isPlaceholder: false,
  },
  {
    title: 'Adventure Safaris',
    tag: 'Adventure',
    description: 'For thrill-seekers: hiking, biking, and hot air ballooning across Kenya\'s most spectacular terrain.',
    details: 'Available as: Private or Group',
    image: '[Photo: Hot air balloon at sunrise over Maasai Mara, golden mist below]',
    isPlaceholder: true,
  },
  {
    title: 'Beach Escapes',
    tag: 'Beach',
    description: 'Unwind on the pristine shores of Kenya\'s Indian Ocean coast — Diani, Watamu, or Malindi. Relax in luxury beach resorts and explore marine life through snorkelling and diving.',
    details: 'Available as: Private or customized',
    image: '/images/beach-diving.webp',
    isPlaceholder: false,
  },
  {
    title: 'Customized Safaris',
    tag: 'All',
    description: 'Fully tailor-made itineraries built around your interests, group size, timeline, and budget — whether you\'re travelling solo, as a family, with friends, or on honeymoon.',
    details: 'Available as: Fully private and personalized',
    image: '/images/zebras-savanna.webp',
    isPlaceholder: false,
  },
]

export default function SafarisPage() {
  const [selectedFilter, setSelectedFilter] = useState('All')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroSlideImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const filters = ['All', 'Safari Tours', 'Cultural', 'Adventure', 'Beach']

  const filteredServices = selectedFilter === 'All'
    ? services
    : services.filter((s) => s.tag === selectedFilter)

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
                alt={`Safari experiences slide ${index + 1}`}
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
            Safari Experiences Built Around You.
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto" style={{ opacity: 0.85 }}>
            Private & group tours across Kenya. From $128/person/day. Fully customizable.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-12 px-4 bg-[#F2E8D5]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-6 py-2 rounded-full font-montserrat font-semibold transition-colors ${
                  selectedFilter === filter
                    ? 'bg-[#D4870A] text-white'
                    : 'bg-white text-[#2A4A35] hover:bg-[#E8DCC5]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-[#FAF4E8]">
        <div className="max-w-7xl mx-auto space-y-12">
          {filteredServices.map((service, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white rounded-2xl overflow-hidden shadow-lg">
              {/* Image */}
              {service.isPlaceholder ? (
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
                  {service.image}
                </div>
              ) : (
                <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-8 space-y-4">
                <h2 className="text-3xl font-playfair text-[#2A4A35]">
                  {service.title}
                </h2>
                <p className="text-[#1C1208] font-inter leading-relaxed">
                  {service.description}
                </p>
                <div className="text-sm text-[#1C1208] font-inter whitespace-pre-line opacity-90">
                  {service.details}
                </div>
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2 text-[#D4870A] font-montserrat font-semibold hover:gap-3 transition-all"
                >
                  Inquire About This {service.tag === 'All' ? 'Safari' : service.tag} <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Transparency */}
      <section className="py-16 px-4 bg-[#F2E8D5]">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-playfair text-[#2A4A35]">
            Honest Pricing. No Surprises.
          </h2>
          <p className="text-lg text-[#1C1208] font-inter leading-relaxed">
            Our tours range from $128 to $420 per person per day (USD), excluding international flights. Your final quote depends on the park, duration, accommodation level, and group size. Contact us for a custom quote — it's free and there's no commitment.
          </p>
          <Link
            href="/book"
            className="inline-block px-8 py-3 bg-[#D4870A] text-[#1C1208] font-montserrat font-semibold rounded-lg hover:shadow-lg transition-all pulse-glow"
          >
            Request a Free Quote
          </Link>
        </div>
      </section>

      {/* Vehicle Info */}
      <section
        className="py-8 px-4"
        style={{
          backgroundColor: '#2A4A35',
          color: '#FDF8F0',
        }}
      >
        <div className="max-w-7xl mx-auto text-center font-inter">
          <p>
            ✓ All safaris are conducted in our regularly serviced 4x4 pop-up roof jeeps — equipped for optimal wildlife viewing, built for your comfort, and maintained for your safety.
          </p>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
      <AccessibilityToolbar />
    </main>
  )
}
