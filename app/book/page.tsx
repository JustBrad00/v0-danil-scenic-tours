'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import FloatingButtons from '@/components/floating-buttons'
import AccessibilityToolbar from '@/components/accessibility-toolbar'

const heroSlideImages = [
  '/images/cheetah-resting.webp',
  '/images/impala-herd.webp',
  '/images/leopard-cub.webp',
  '/images/crowned-crane.webp',
  '/images/elephant-kilimanjaro.webp',
  '/images/amboseli-elephants.webp',
  '/images/beach-diving.webp',
  '/images/zebras-savanna.webp',
  '/images/cultural-gathering.webp',
]

export default function BookPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tourType: '',
    destination: '',
    dates: '',
    groupSize: '',
    message: '',
  })
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroSlideImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // [PLACEHOLDER] Form submission logic would go here
    alert('Thank you for your inquiry! We\'ll be in touch shortly.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      tourType: '',
      destination: '',
      dates: '',
      groupSize: '',
      message: '',
    })
  }

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
                alt={`Safari slide ${index + 1}`}
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
            Plan Your Safari
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto" style={{ opacity: 0.85 }}>
            Tell us about your dream trip and let's make it happen.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 px-4 bg-[#FAF4E8]">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-montserrat font-semibold text-[#2A4A35] mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-[#D4870A] rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-[#D4870A]"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-montserrat font-semibold text-[#2A4A35] mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-[#D4870A] rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-[#D4870A]"
                placeholder="your@email.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-montserrat font-semibold text-[#2A4A35] mb-2">
                Phone / WhatsApp *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-[#D4870A] rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-[#D4870A]"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            {/* Tour Type */}
            <div>
              <label className="block text-sm font-montserrat font-semibold text-[#2A4A35] mb-2">
                Tour Type *
              </label>
              <select
                name="tourType"
                value={formData.tourType}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-[#D4870A] rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-[#D4870A]"
              >
                <option value="">Select a tour type</option>
                <option value="safari">Safari Tours</option>
                <option value="cultural">Cultural Expeditions</option>
                <option value="adventure">Adventure Safaris</option>
                <option value="beach">Beach Escapes</option>
                <option value="custom">Customized Safari</option>
              </select>
            </div>

            {/* Destination */}
            <div>
              <label className="block text-sm font-montserrat font-semibold text-[#2A4A35] mb-2">
                Preferred Destination *
              </label>
              <select
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-[#D4870A] rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-[#D4870A]"
              >
                <option value="">Select a destination</option>
                <option value="maasai-mara">Maasai Mara</option>
                <option value="amboseli">Amboseli</option>
                <option value="tsavo">Tsavo East & West</option>
                <option value="lake-nakuru">Lake Nakuru</option>
                <option value="lake-bogoria">Lake Bogoria</option>
                <option value="diani">Diani Beach</option>
                <option value="multiple">Multiple Destinations</option>
              </select>
            </div>

            {/* Dates */}
            <div>
              <label className="block text-sm font-montserrat font-semibold text-[#2A4A35] mb-2">
                Preferred Travel Dates
              </label>
              <input
                type="text"
                name="dates"
                value={formData.dates}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-[#D4870A] rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-[#D4870A]"
                placeholder="e.g., June 15-22, 2025 (or flexible)"
              />
            </div>

            {/* Group Size */}
            <div>
              <label className="block text-sm font-montserrat font-semibold text-[#2A4A35] mb-2">
                Group Size
              </label>
              <input
                type="text"
                name="groupSize"
                value={formData.groupSize}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-[#D4870A] rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-[#D4870A]"
                placeholder="Number of travelers"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-montserrat font-semibold text-[#2A4A35] mb-2">
                Additional Details
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border border-[#D4870A] rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-[#D4870A]"
                placeholder="Tell us about your interests, budget, accommodation preferences, or any special requests..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-[#D4870A] text-[#1C1208] font-montserrat font-semibold rounded-lg hover:shadow-lg transition-all pulse-glow"
            >
              Send Inquiry
            </button>

            <p className="text-xs text-[#1C1208] opacity-75 font-inter text-center">
              We'll review your inquiry and respond within 24 hours via email or WhatsApp.
            </p>
          </form>

          {/* Alternative Contact */}
          <div className="mt-12 pt-8 border-t border-[#D4870A]">
            <h3 className="text-xl font-playfair text-[#2A4A35] mb-4">Prefer to chat directly?</h3>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="https://wa.me/254722919249"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-[#25D366] text-white font-montserrat font-semibold rounded-lg hover:shadow-lg transition-all"
              >
                WhatsApp
              </Link>
              <Link
                href="tel:+254722919249"
                className="px-6 py-2 bg-[#2A4A35] text-white font-montserrat font-semibold rounded-lg hover:shadow-lg transition-all"
              >
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
      <AccessibilityToolbar />
    </main>
  )
}
