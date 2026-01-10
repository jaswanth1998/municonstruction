import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Calendar, ChevronRight, X } from 'lucide-react'

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <>
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="group cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div
          className="
            relative overflow-hidden
            bg-white dark:bg-slate-800
            rounded-2xl
            shadow-sm hover:shadow-xl
            transition-all duration-300
            hover:-translate-y-1
          "
        >
          {/* Image */}
          <div className="relative h-64 overflow-hidden">
            <img
              src={project.images[0]?.url}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />

            {/* Category Badge */}
            <span
              className="
                absolute top-4 left-4
                px-3 py-1
                bg-primary-500 text-white
                text-xs font-semibold uppercase tracking-wider
                rounded-full
              "
            >
              {project.category}
            </span>

            {/* View More */}
            <div
              className="
                absolute bottom-4 right-4
                flex items-center gap-1
                text-white font-medium text-sm
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300
              "
            >
              View Project
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
              {project.title}
            </h3>

            {/* Meta */}
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {project.location}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {project.completion}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
              {project.description}
            </p>

            {/* Services Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.services.slice(0, 3).map((service, idx) => (
                <span
                  key={idx}
                  className="
                    px-2 py-1
                    bg-gray-100 dark:bg-slate-700
                    text-gray-600 dark:text-gray-300
                    text-xs rounded
                  "
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Images */}
              <div className="relative h-80 md:h-96">
                <img
                  src={project.images[selectedImage]?.url}
                  alt={project.images[selectedImage]?.alt}
                  className="w-full h-full object-cover"
                />

                {/* Image Navigation */}
                {project.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImage(idx)}
                        className={`
                          w-3 h-3 rounded-full transition-all
                          ${idx === selectedImage ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/75'}
                        `}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8">
                <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium rounded-full mb-4">
                  {project.category}
                </span>

                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {project.title}
                </h2>

                <div className="flex items-center gap-6 text-gray-500 dark:text-gray-400 mb-6">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Completed {project.completion}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                    Services Provided:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Thumbnails */}
                {project.images.length > 1 && (
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                      Project Gallery:
                    </h3>
                    <div className="grid grid-cols-4 gap-2">
                      {project.images.map((image, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedImage(idx)}
                          className={`
                            relative rounded-lg overflow-hidden
                            ${idx === selectedImage ? 'ring-2 ring-primary-500' : ''}
                          `}
                        >
                          <img
                            src={image.url}
                            alt={image.alt}
                            className="w-full h-20 object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ProjectCard
