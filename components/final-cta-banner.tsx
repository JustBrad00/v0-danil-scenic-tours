'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function FinalCTABanner() {
  return (
    <section className="relative overflow-hidden py-32 px-4 md:py-48">
      {/* Background Image */}
      <div className="absolute inset-0 ken-burns-zoom" style={{ zIndex: 0 }}>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2816%29-okv68gOhxJpXw4n1wmi6LzVWsS5NI3.webp"
          alt="Maasai Mara sunset with acacia trees"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(28,18,8,0.72) 0%, rgba(28,18,8,0.2) 100%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="font-cormorant text-4xl md:text-6xl lg:text-7xl text-white mb-16 md:mb-20 leading-tight">
          Your Dream Safari is One Message Away.
        </h2>

        <div className="flex gap-4 md:gap-6 justify-center flex-wrap">
          <Link
            href="/book"
            className="px-6 md:px-10 py-3 md:py-4 bg-[#D4870A] text-[#1C1208] font-montserrat font-semibold rounded-lg hover:shadow-lg transition-all pulse-glow text-sm md:text-base"
          >
            Start Planning
          </Link>
          <Link
            href="https://wa.me/254722919249"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 md:px-10 py-3 md:py-4 border-2 border-white text-white font-montserrat font-semibold rounded-lg hover:bg-white hover:text-[#2A4A35] transition-all text-sm md:text-base"
          >
            Chat on WhatsApp
          </Link>
        </div>
      </div>
    </section>
  )
}
