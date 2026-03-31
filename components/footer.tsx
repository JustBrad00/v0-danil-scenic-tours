'use client'

import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      className="py-16 px-4"
      style={{
        backgroundColor: '#1C3028',
        color: '#FDF8F0',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-cormorant font-bold">Danil Scenic Tours</h3>
            <p className="font-inter text-sm leading-relaxed opacity-90">
              Creating Unforgettable Experiences
            </p>
            <p className="font-inter text-xs opacity-75">
              To create unforgettable experiences that connect our clientele to the stunning landscapes, magnificent wildlife, and rich cultures across Kenya.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-montserrat font-semibold text-[#D4870A]">Navigation</h4>
            <nav className="space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'Our Safaris', href: '/safaris' },
                { label: 'Destinations', href: '/destinations' },
                { label: 'About Us', href: '/about' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Book Now', href: '/book' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block font-inter text-sm hover:text-[#D4870A] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-montserrat font-semibold text-[#D4870A]">Contact</h4>
            <div className="space-y-3 font-inter text-sm">
              <div>
                <p className="opacity-75">Phone / WhatsApp</p>
                <Link href="tel:+254722919249" className="hover:text-[#D4870A] transition-colors">
                  +254 722 919 249
                </Link>
              </div>
              <div>
                <p className="opacity-75">Address</p>
                <p>P.O. Box 49377-00100, Nairobi, Kenya</p>
              </div>
              <div>
                <p className="opacity-75">Website</p>
                <Link href="https://danilscenictours.co.ke" target="_blank" className="hover:text-[#D4870A] transition-colors">
                  danilscenictours.co.ke
                </Link>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="space-y-4">
            <h4 className="font-montserrat font-semibold text-[#D4870A]">Verified Reviews</h4>
            <Link
              href="https://www.safaribookings.com/p6036"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2A4A35] border border-[#D4870A] px-4 py-2 rounded-lg font-inter text-sm hover:bg-[#D4870A] hover:text-[#1C3028] transition-colors"
            >
              SafariBookings Badge <ExternalLink size={14} />
            </Link>
            <div className="font-inter text-sm space-y-1">
              <p className="text-[#D4870A]">★★★★★ 5.0/5</p>
              <p className="opacity-75">23 Verified Reviews</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 border-t"
          style={{
            borderColor: 'rgba(212, 135, 10, 0.2)',
          }}
        >
          <p className="text-center font-inter text-sm opacity-75">
            © 2024 Danil Scenic Tours. Licensed by the Tourism Regulatory Authority of Kenya.
          </p>
        </div>
      </div>
    </footer>
  )
}
