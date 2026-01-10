import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '../data/testimonials'
import { CTABanner } from '../components/home'

const TestimonialCard = ({ testimonial, index }) => {
  // Generate initials from name
  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  // Generate gradient based on index
  const gradients = [
    'from-blue-500 to-indigo-600',
    'from-emerald-500 to-teal-600',
    'from-amber-500 to-orange-600',
    'from-purple-500 to-pink-600',
    'from-red-500 to-rose-600',
    'from-cyan-500 to-blue-600',
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="h-full"
    >
      <div
        className="
          h-full p-8
          bg-white dark:bg-slate-800
          rounded-2xl
          border border-gray-100 dark:border-slate-700
          shadow-sm hover:shadow-xl
          transition-all duration-300
          hover:-translate-y-1
          flex flex-col
        "
      >
        {/* Quote Icon */}
        <div className="mb-6">
          <Quote className="w-10 h-10 text-primary-500/30" />
        </div>

        {/* Quote */}
        <blockquote className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed mb-6 flex-1 italic">
          "{testimonial.quote}"
        </blockquote>

        {/* Rating */}
        <div className="flex gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < testimonial.rating
                  ? 'text-amber-400 fill-amber-400'
                  : 'text-gray-300 dark:text-gray-600'
              }`}
            />
          ))}
        </div>

        {/* Author */}
        <div className="flex items-center gap-4 pt-6 border-t border-gray-100 dark:border-slate-700">
          {/* Avatar */}
          <div
            className={`
              w-14 h-14 rounded-full
              bg-gradient-to-br ${gradients[index % gradients.length]}
              flex items-center justify-center
              text-white font-bold text-lg
              shadow-lg
            `}
          >
            {testimonial.avatar ? (
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              getInitials(testimonial.name)
            )}
          </div>
          <div>
            <div className="font-semibold text-gray-900 dark:text-white">
              {testimonial.name}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {testimonial.location}
            </div>
            <div className="text-sm text-primary-500 font-medium">
              {testimonial.project} • {testimonial.date}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const TestimonialsPage = () => {
  // Calculate average rating
  const averageRating =
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length

  return (
    <>
      <Helmet>
        <title>Client Testimonials | Muni Construction - Halifax Contractor</title>
        <meta
          name="description"
          content="Read what our satisfied clients say about Muni Construction. See reviews from homeowners and businesses across Halifax, NS."
        />
      </Helmet>

      <main>
        {/* Page Header */}
        <section className="relative pt-32 pb-20 bg-gray-900">
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=600&fit=crop"
              alt="Happy clients"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900" />
          </div>

          {/* Content */}
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-2 bg-primary-500/20 text-primary-400 rounded-full text-sm font-medium mb-6">
                Testimonials
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our Clients Say
              </h1>
              <p className="text-xl text-gray-300">
                Don't just take our word for it. Here's what our satisfied clients have to say about their experience with Muni Construction.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16"
            >
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-4xl font-bold text-primary-500">
                    {averageRating.toFixed(1)}
                  </span>
                  <Star className="w-8 h-8 text-amber-400 fill-amber-400" />
                </div>
                <div className="text-gray-400 text-sm">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-500 mb-2">
                  {testimonials.length}+
                </div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-500 mb-2">
                  98%
                </div>
                <div className="text-gray-400 text-sm">Would Recommend</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="section-padding bg-gray-50 dark:bg-slate-900/50">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Review CTA */}
        <section className="section-padding bg-white dark:bg-slate-900">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Had a Great Experience?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We'd love to hear about your project! Your feedback helps us improve and helps others make informed decisions.
              </p>
              <a
                href="https://google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors"
              >
                <Star className="w-5 h-5" />
                Leave a Review on Google
              </a>
            </motion.div>
          </div>
        </section>

        <CTABanner />
      </main>
    </>
  )
}

export default TestimonialsPage
