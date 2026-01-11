import { useState, useEffect } from 'react'
import { galleryImages } from '../../data/gallery'
import { SectionTitle } from '../common'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = (e) => {
    e.stopPropagation()
    const newIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1
    setCurrentIndex(newIndex)
    setSelectedImage(galleryImages[newIndex])
  }

  const handleNext = (e) => {
    e.stopPropagation()
    const newIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0
    setCurrentIndex(newIndex)
    setSelectedImage(galleryImages[newIndex])
  }

  const openImage = (image) => {
    const index = galleryImages.findIndex(img => img.id === image.id)
    setCurrentIndex(index)
    setSelectedImage(image)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return
      
      if (e.key === 'ArrowLeft') {
        handlePrevious(e)
      } else if (e.key === 'ArrowRight') {
        handleNext(e)
      } else if (e.key === 'Escape') {
        setSelectedImage(null)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [selectedImage, currentIndex])

  return (
    <section className="section-padding bg-gray-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Our Work Gallery"
          subtitle="Explore our recent construction projects across Nova Scotia"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-lg bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-4 bg-gradient-to-t from-gray-900 to-transparent absolute bottom-0 left-0 right-0">
                <p className="text-white font-semibold text-center flex items-center justify-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {image.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-4xl font-bold z-10"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>

            {/* Previous Button */}
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm z-10 group"
              aria-label="Previous image"
            >
              <svg
                className="w-6 h-6 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm z-10 group"
              aria-label="Next image"
            >
              <svg
                className="w-6 h-6 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Image */}
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-lg"
              />
              
              {/* Location Overlay on Image */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6 rounded-b-lg">
                <p className="text-white text-2xl font-bold flex items-center justify-center gap-3">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {selectedImage.location}
                </p>
              </div>
            </div>

            {/* Image Counter */}
            <div className="mt-4 text-center">
              <p className="text-white text-sm bg-white/10 backdrop-blur-sm inline-block px-4 py-2 rounded-full">
                {currentIndex + 1} / {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
