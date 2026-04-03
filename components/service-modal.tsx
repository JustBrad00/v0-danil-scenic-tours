'use client'

import { X, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface ServiceModalProps {
  isOpen: boolean
  title: string
  description: string
  onClose: () => void
}

export default function ServiceModal({
  isOpen,
  title,
  description,
  onClose,
}: ServiceModalProps) {
  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between p-6 md:p-8 border-b border-[#E8DCC5]">
            <h2 className="text-2xl md:text-3xl font-playfair text-[#2A4A35]">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-[#F2E8D5] rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X size={24} className="text-[#2A4A35]" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 space-y-6">
            <p className="text-[#1C1208] font-inter text-base md:text-lg leading-relaxed">
              {description}
            </p>

            {/* CTA Button */}
            <Link
              href="/safaris"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#F97316] text-white font-montserrat font-semibold rounded-lg hover:shadow-lg transition-all hover:gap-3"
            >
              View Full Safari Itineraries <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
