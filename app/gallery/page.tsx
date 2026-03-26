'use client'

import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import FloatingButtons from '@/components/floating-buttons'
import AccessibilityToolbar from '@/components/accessibility-toolbar'

const galleryImages = [
  { image: '[Photo: Maasai Mara savannah at golden hour — wide open plains, acacia trees, warm light]', isPlaceholder: true },
  { image: '[Photo: Elephant herd against Mt. Kilimanjaro backdrop, Amboseli National Park]', isPlaceholder: true },
  { image: '[Photo: 4x4 pop-up roof safari jeep on open savannah game drive]', isPlaceholder: true },
  { image: '[Photo: Flamingos in flight over Lake Nakuru, pink sky reflection]', isPlaceholder: true },
  { image: '[Photo: Tourists laughing and watching wildlife from open jeep roof]', isPlaceholder: true },
  { image: '[Photo: Diani Beach — white sand, turquoise Indian Ocean, palm trees]', isPlaceholder: true },
  { image: '[Photo: Hot air balloon at sunrise over Maasai Mara, golden mist below]', isPlaceholder: true },
  { image: '/images/cultural-gathering.webp', isPlaceholder: false },
  { image: '[Photo: Leopard resting in tree, Tsavo National Park]', isPlaceholder: true },
  { image: '[Photo: Lake Bogoria hot springs and flamingo colony]', isPlaceholder: true },
  { image: '[Photo: Mt. Kenya highland peak — dramatic clouds, greenery]', isPlaceholder: true },
  { image: '[Photo: Samburu landscape — reticulated giraffe against dry acacia brush]', isPlaceholder: true },
  { image: '[Photo: Family group on Kenya safari, smiling, binoculars out]', isPlaceholder: true },
  { image: '[Photo: Meru National Park remote wilderness at dusk]', isPlaceholder: true },
  { image: '[Photo: Aberdare National Park highland waterfalls and forest]', isPlaceholder: true },
]

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#FAF4E8]">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-96 flex flex-col items-center justify-center pt-20">
        <div
          className="absolute inset-0 flex items-center justify-center text-center ken-burns-zoom"
          style={{
            backgroundColor: '#C4A882',
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            fontStyle: 'italic',
            color: '#6B5240',
            zIndex: 0,
          }}
        >
          [Photo: Maasai Mara savannah at golden hour — wide open plains, acacia trees, warm light]
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
            Kenya Through Our Lens
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto" style={{ opacity: 0.85 }}>
            Explore the beauty, wildlife, and moments that await you.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4 bg-[#FAF4E8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                style={{
                  aspectRatio: '3/2',
                  position: 'relative',
                }}
              >
                {item.isPlaceholder ? (
                  <div
                    style={{
                      backgroundColor: '#C4A882',
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '16px',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '13px',
                        fontStyle: 'italic',
                        color: '#6B5240',
                        textAlign: 'center',
                      }}
                    >
                      {item.image}
                    </p>
                  </div>
                ) : (
                  <Image
                    src={item.image}
                    alt="Gallery image"
                    fill
                    className="object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
      <AccessibilityToolbar />
    </main>
  )
}
