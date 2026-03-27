'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function StorytellingSectionHome() {
  return (
    <section className="py-20 px-4 bg-[#FAF4E8]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-6">
            <h2 className="font-playfair text-4xl md:text-5xl text-[#2A4A35]">
              More Than a Safari. A Connection.
            </h2>
            <p className="font-inter text-lg text-[#1C1208] leading-relaxed" style={{ lineHeight: 1.8 }}>
              At Danil Scenic Tours, we believe travel should change you. Not just show you things — but connect you deeply to Kenya's landscapes, its wildlife, and its people. Whether it's your first game drive or your tenth, we build every experience around you.
            </p>
            <Link
              href="/about"
              className="inline-block text-[#D4870A] font-montserrat font-semibold border-b-2 border-[#D4870A] pb-1 hover:opacity-80 transition-opacity"
            >
              Read Our Story →
            </Link>
          </div>

          {/* Image */}
          <div
            className="relative rounded-2xl overflow-hidden shadow-lg"
            style={{
              aspectRatio: '4/3',
              width: '100%',
            }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2812%29-s02sGMy6RmxVwGRkXsuExT87bOTlVI.webp"
              alt="Flamingos at Lake Nakuru"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
