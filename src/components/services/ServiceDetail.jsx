import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { services } from '../../data/services'
import Button from '../common/Button'

const ServiceDetail = () => {
  const location = useLocation()
  const sectionRefs = useRef({})

  // Scroll to section when hash changes
  useEffect(() => {
    const hash = location.hash.replace('#', '')
    if (hash && sectionRefs.current[hash]) {
      setTimeout(() => {
        sectionRefs.current[hash].scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }, 100)
    }
  }, [location.hash])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="section-padding bg-white dark:bg-slate-900">
      <div className="container-custom">
        <div className="space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={service.id}
                id={service.id}
                ref={(el) => (sectionRefs.current[service.id] = el)}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="scroll-mt-24"
              >
                <div
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <motion.div
                    variants={itemVariants}
                    className={isEven ? '' : 'lg:order-2'}
                  >
                    {/* Icon & Title */}
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="
                          inline-flex items-center justify-center
                          w-16 h-16
                          rounded-xl
                          bg-gradient-to-br from-primary-500 to-primary-600
                          text-white
                          shadow-lg shadow-primary-500/25
                        "
                      >
                        <Icon className="w-8 h-8" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        {service.title}
                      </h2>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-8">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-4">
                        What We Offer:
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            variants={itemVariants}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-300">
                              {feature}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="mb-8">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-4">
                        Benefits:
                      </h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <motion.li
                            key={idx}
                            variants={itemVariants}
                            className="flex items-center gap-3"
                          >
                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                            <span className="text-gray-600 dark:text-gray-300">
                              {benefit}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <Button
                      to="/contact"
                      icon={<ArrowRight className="w-5 h-5" />}
                      iconPosition="right"
                    >
                      {service.cta}
                    </Button>
                  </motion.div>

                  {/* Image */}
                  <motion.div
                    variants={itemVariants}
                    className={isEven ? '' : 'lg:order-1'}
                  >
                    <div className="relative">
                      <div className="rounded-2xl overflow-hidden shadow-2xl">
                        <img
                          src={getServiceImage(service.id)}
                          alt={service.title}
                          className="w-full h-[400px] object-cover"
                        />
                      </div>
                      {/* Decorative element */}
                      <div
                        className={`
                          absolute -z-10 w-full h-full rounded-2xl bg-primary-500/10
                          ${isEven ? '-bottom-4 -right-4' : '-bottom-4 -left-4'}
                        `}
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Helper function to get service images
const getServiceImage = (serviceId) => {
  const images = {
    residential:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    commercial:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    renovations:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
    roofing:
      'https://images.unsplash.com/photo-1632759104896-4a0e060d5f94?w=800&h=600&fit=crop',
    concrete:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    'project-management':
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
  }
  return images[serviceId] || images.residential
}

export default ServiceDetail
