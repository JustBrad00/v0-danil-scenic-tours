'use client'

import Link from 'next/link'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: 'When we were supposed to leave at 7, the jeep and driver were ready at 06:50, every day, not one day late. If we go back, we know who to call.',
    author: 'Chris',
    country: 'Belgium',
    date: 'March 2025',
    rating: 5,
    verified: true,
  },
  {
    quote: 'Danson was more than a driver — he was an entertainer. He was very patient and good with the kids. 10/10 value for money.',
    author: 'Daria',
    country: 'Germany',
    date: 'January 2025',
    rating: 5,
    verified: true,
  },
  {
    quote: 'The package they offered was budget friendly. Dan the tour guide was amazing — he knew the park like the back of his hand.',
    author: 'Lyeel',
    country: 'Kenya',
    date: 'January 2025',
    rating: 5,
    verified: true,
  },
  {
    quote: 'An unforgettable experience! The attention to detail and personalized service made our trip truly special. Highly recommend!',
    author: 'Sarah',
    country: 'United States',
    date: 'February 2025',
    rating: 5,
    verified: true,
  },
  {
    quote: 'Professional, reliable, and passionate about conservation. Every moment of the safari was perfectly orchestrated.',
    author: 'Michael',
    country: 'Canada',
    date: 'March 2025',
    rating: 5,
    verified: true,
  },
  {
    quote: 'The guides were incredibly knowledgeable and made sure we saw the Big Five. Worth every penny and then some!',
    author: 'Emma',
    country: 'United Kingdom',
    date: 'February 2025',
    rating: 5,
    verified: true,
  },
]

export default function TestimonialsCarousel() {
  return (
    <section
      className="py-20 px-4"
      style={{
        backgroundColor: '#1C3028',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-playfair text-[#FDF8F0] text-center mb-2">
          What Our Travellers Say
        </h2>
        <p className="text-center text-[#D4870A] font-montserrat font-semibold mb-12">
          Verified reviews from SafariBookings.com
        </p>

        {/* Grid Layout for 6 Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((review, index) => (
            <div
              key={index}
              className="bg-[#2A4A35] rounded-2xl p-6 flex flex-col justify-between"
              aria-label={`Review from ${review.author}, ${review.country}`}
            >
              <div>
                <Quote size={32} className="text-[#D4870A] mb-4" />
                <p className="text-[#FDF8F0] font-inter text-sm leading-relaxed mb-6 italic">
                  "{review.quote}"
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-[#D4870A] text-[#D4870A]" />
                  ))}
                </div>
                <div>
                  <p className="text-[#FDF8F0] font-montserrat font-semibold text-sm">
                    {review.author}, {review.country}
                  </p>
                  <p className="text-[#D4870A] font-inter text-xs">
                    {review.date}
                  </p>
                  {review.verified && (
                    <p className="text-[#D4870A] font-montserrat text-xs font-semibold mt-2">
                      ✓ Verified Review
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-[#FDF8F0] font-inter text-sm mb-4">
            Source: safaribookings.com/p6036
          </p>
          <Link
            href="https://www.safaribookings.com/p6036"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-[#D4870A] text-[#1C1208] font-montserrat font-semibold rounded-lg hover:shadow-lg transition-all pulse-glow"
            aria-label="View all 23 reviews on SafariBookings"
          >
            Read All 23 Reviews on SafariBookings
          </Link>
        </div>
      </div>
    </section>
  )
}
