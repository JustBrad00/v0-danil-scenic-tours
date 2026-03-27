'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import FloatingButtons from '@/components/floating-buttons'
import AccessibilityToolbar from '@/components/accessibility-toolbar'
import { Star } from 'lucide-react'

const allTestimonials = [
  {
    quote: 'When we were supposed to leave at 7, the jeep and driver were ready at 06:50, every day, not one day late. If we go back, we know who to call.',
    author: 'Chris',
    country: 'Belgium',
    date: 'March 2025',
    rating: 5,
  },
  {
    quote: 'Danson was more than a driver — he was an entertainer. He was very patient and good with the kids. 10/10 value for money.',
    author: 'Daria',
    country: 'Germany',
    date: 'January 2025',
    rating: 5,
  },
  {
    quote: 'The package they offered was budget friendly. Dan the tour guide was amazing — he knew the park like the back of his hand.',
    author: 'Lyeel',
    country: 'Kenya',
    date: 'January 2025',
    rating: 5,
  },
  {
    quote: '[Additional verified review]',
    author: 'Review 4',
    country: 'Country',
    date: '2025',
    rating: 5,
  },
]

const heroSlideImages = [
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2812%29-s02sGMy6RmxVwGRkXsuExT87bOTlVI.webp',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2813%29-dvsdfGxqdqYzb94D6e93B8K10dhmKW.webp',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2814%29-PPbHtHwWOiOCF897LhCVKG6lE946GY.webp',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2815%29-3ELJ3hQTT33H8nK1hqEBM53zsX5JEk.webp',
]

export default function AboutPage() {
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
      <section className="relative h-[600px] md:h-screen flex flex-col items-center justify-center pt-20">
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
                alt={`Kenya destinations slideshow ${index + 1}`}
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
            About Danil Scenic Tours
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto" style={{ opacity: 0.85 }}>
            Creating unforgettable experiences across Kenya since 2023.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 px-4 bg-[#FAF4E8]">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl font-playfair text-[#2A4A35]">Our Mission</h2>
            <p className="text-lg text-[#1C1208] font-inter leading-relaxed">
              To create unforgettable experiences that connect our clientele to the stunning landscapes, magnificent wildlife, and rich cultures across Kenya.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 space-y-6">
            <h2 className="text-4xl font-playfair text-[#2A4A35]">Why Tour With Danil</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Local Expertise', desc: 'Deep knowledge of Kenya\'s landscapes, wildlife, and culture.' },
                { title: 'Responsible Travel', desc: 'Committed to sustainable and ethical tourism practices.' },
                { title: 'Experienced Guides', desc: 'Professional guides fluent in English, Spanish, German, and French.' },
                { title: '24/7 Customer Support', desc: 'Always available when you need us.' },
                { title: 'Transparent Pricing', desc: 'No hidden fees. Honest quotes from the start.' },
                { title: 'Wide Fleet Selection', desc: 'Modern 4x4 pop-up roof jeeps, regularly serviced.' },
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <h3 className="font-playfair text-lg text-[#2A4A35]">{item.title}</h3>
                  <p className="text-[#1C1208] font-inter text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 px-4 bg-[#F2E8D5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-playfair text-[#2A4A35] mb-8">Company Information</h2>
          <div className="bg-white rounded-2xl p-8 space-y-4 font-inter text-[#1C1208]">
            <div>
              <p className="font-semibold text-[#D4870A]">Company Name</p>
              <p>Danil Scenic Tours (Daniel Scenic Tours Limited)</p>
            </div>
            <div>
              <p className="font-semibold text-[#D4870A]">Founded</p>
              <p>2023</p>
            </div>
            <div>
              <p className="font-semibold text-[#D4870A]">Legal Status</p>
              <p>Private Limited Company, registered in Kenya</p>
            </div>
            <div>
              <p className="font-semibold text-[#D4870A]">License</p>
              <p>Licensed by the Tourism Regulatory Authority (TRA) of Kenya</p>
            </div>
            <div>
              <p className="font-semibold text-[#D4870A]">Location</p>
              <p>Nairobi, Kenya</p>
            </div>
            <div>
              <p className="font-semibold text-[#D4870A]">Team Size</p>
              <p>Passionate tour guides, drivers, tour consultants, and project managers</p>
            </div>
            <div>
              <p className="font-semibold text-[#D4870A]">Languages</p>
              <p>English, Spanish, German, French</p>
            </div>
          </div>
        </div>
      </section>

      {/* All Reviews */}
      <section
        className="py-20 px-4"
        style={{
          backgroundColor: '#1C3028',
        }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-playfair text-[#FDF8F0] text-center mb-2">
            Guest Reviews
          </h2>
          <p className="text-center text-[#D4870A] font-montserrat font-semibold mb-12">
            Verified reviews from SafariBookings.com — 5.0/5 rating from 23 reviews
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allTestimonials.map((review, i) => (
              <div
                key={i}
                className="bg-[#2A4A35] rounded-xl p-6 space-y-4"
              >
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, idx) => (
                    <Star key={idx} size={16} className="fill-[#D4870A] text-[#D4870A]" />
                  ))}
                </div>
                <p className="text-[#FDF8F0] font-inter italic text-sm leading-relaxed">
                  "{review.quote}"
                </p>
                <div className="text-[#FDF8F0] font-montserrat font-semibold text-sm">
                  {review.author}, {review.country} • {review.date}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="https://www.safaribookings.com/p6036"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-[#D4870A] text-[#1C1208] font-montserrat font-semibold rounded-lg hover:shadow-lg transition-all"
            >
              See All Reviews on SafariBookings
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
      <AccessibilityToolbar />
    </main>
  )
}
