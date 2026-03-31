'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import FloatingButtons from '@/components/floating-buttons'
import AccessibilityToolbar from '@/components/accessibility-toolbar'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Spinner } from '@/components/ui/spinner'
import { bookingFormSchema, type BookingFormData } from '@/lib/validations/booking'

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [submittedName, setSubmittedName] = useState('')

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      tourType: '',
      destination: '',
      dates: '',
      groupSize: '',
      message: '',
    },
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroSlideImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const onSubmit = async (data: BookingFormData) => {
    setIsLoading(true)
    
    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.success) {
        setSubmittedName(data.name)
        setShowSuccessModal(true)
        form.reset()
      } else {
        console.error('Booking failed:', result.message)
      }
    } catch (error) {
      console.error('Submission error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const inputClassName = "w-full px-4 py-2 border border-[#D4870A] rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-[#D4870A]"
  const labelClassName = "block text-sm font-montserrat font-semibold text-[#2A4A35]"

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
            Tell us about your dream trip and let&apos;s make it happen.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 px-4 bg-[#FAF4E8]">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClassName}>Full Name *</FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        type="text"
                        className={inputClassName}
                        placeholder="Your name"
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClassName}>Email Address *</FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        type="email"
                        className={inputClassName}
                        placeholder="your@email.com"
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Phone */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClassName}>Phone / WhatsApp *</FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        type="tel"
                        className={inputClassName}
                        placeholder="+1 (555) 123-4567"
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Tour Type */}
              <FormField
                control={form.control}
                name="tourType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClassName}>Tour Type *</FormLabel>
                    <FormControl>
                      <select
                        {...field}
                        className={inputClassName}
                        disabled={isLoading}
                      >
                        <option value="">Select a tour type</option>
                        <option value="safari">Safari Tours</option>
                        <option value="cultural">Cultural Expeditions</option>
                        <option value="adventure">Adventure Safaris</option>
                        <option value="beach">Beach Escapes</option>
                        <option value="custom">Customized Safari</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Destination */}
              <FormField
                control={form.control}
                name="destination"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClassName}>Preferred Destination *</FormLabel>
                    <FormControl>
                      <select
                        {...field}
                        className={inputClassName}
                        disabled={isLoading}
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
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Dates */}
              <FormField
                control={form.control}
                name="dates"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClassName}>Preferred Travel Dates</FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        type="text"
                        className={inputClassName}
                        placeholder="e.g., June 15-22, 2025 (or flexible)"
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Group Size */}
              <FormField
                control={form.control}
                name="groupSize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClassName}>Group Size</FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        type="text"
                        className={inputClassName}
                        placeholder="Number of travelers"
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Message */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClassName}>Additional Details</FormLabel>
                    <FormControl>
                      <textarea
                        {...field}
                        rows={5}
                        className={inputClassName}
                        placeholder="Tell us about your interests, budget, accommodation preferences, or any special requests..."
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-[#D4870A] text-[#1C1208] font-montserrat font-semibold rounded-lg hover:shadow-lg transition-all pulse-glow disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Spinner className="size-5" />
                    Sending...
                  </>
                ) : (
                  'Send Inquiry'
                )}
              </button>

              <p className="text-xs text-[#1C1208] opacity-75 font-inter text-center">
                We&apos;ll review your inquiry and respond within 24 hours via email or WhatsApp.
              </p>
            </form>
          </Form>

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

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="bg-white border-[#D4870A]">
          <DialogHeader className="text-center items-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#2A4A35]/10">
              <CheckCircle className="h-10 w-10 text-[#2A4A35]" />
            </div>
            <DialogTitle className="text-2xl font-playfair text-[#2A4A35]">
              Success!
            </DialogTitle>
            <DialogDescription className="text-[#1C1208] font-inter text-base pt-2">
              Thank you{submittedName ? `, ${submittedName}` : ''}! Your booking inquiry has been received. Our team will contact you within 24 hours via email or WhatsApp to discuss your dream safari.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <button
              onClick={() => setShowSuccessModal(false)}
              className="px-8 py-2 bg-[#D4870A] text-[#1C1208] font-montserrat font-semibold rounded-lg hover:shadow-lg transition-all"
            >
              Continue Exploring
            </button>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
      <FloatingButtons />
      <AccessibilityToolbar />
    </main>
  )
}
