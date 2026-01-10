import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { services } from '../data/services'
import { ServiceDetail } from '../components/services'
import { CTABanner } from '../components/home'

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Muni Construction - Halifax Contractor</title>
        <meta
          name="description"
          content="Explore Muni Construction's comprehensive services: residential construction, commercial building, renovations, roofing, concrete work, and project management in Halifax, NS."
        />
      </Helmet>

      <main>
        {/* Page Header */}
        <section className="relative pt-32 pb-20 bg-gray-900">
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&h=600&fit=crop"
              alt="Construction services"
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
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive Construction Services
              </h1>
              <p className="text-xl text-gray-300">
                From residential builds to commercial projects, we offer a full range of construction services tailored to your needs.
              </p>
            </motion.div>

            {/* Quick Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 flex flex-wrap justify-center gap-3"
            >
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <Link
                    key={service.id}
                    to={`#${service.id}`}
                    className="
                      inline-flex items-center gap-2
                      px-4 py-2
                      bg-white/10 hover:bg-white/20
                      border border-white/20
                      rounded-full
                      text-white text-sm font-medium
                      transition-all duration-300
                    "
                  >
                    <Icon className="w-4 h-4" />
                    {service.title}
                  </Link>
                )
              })}
            </motion.div>
          </div>
        </section>

        <ServiceDetail />
        <CTABanner />
      </main>
    </>
  )
}

export default Services
